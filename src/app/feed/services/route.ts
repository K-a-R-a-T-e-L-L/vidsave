// app/feed/services/route.ts
import { servicesList } from "@/app/lib/servicesList";
import { headers } from "next/headers";

export async function GET() {
    const headersList = await headers();
    const protocol = headersList.get("x-forwarded-proto") || "https";
    const host = headersList.get("host");
    const baseUrl = `${protocol}://${host}`;

    // Маппинг категорий на id
    const categoryMap: Record<string, string> = {
        "Установка и настройка систем видеонаблюдения": "1",
        "Монтаж и обслуживание кондиционеров": "2",
        "Установка видеорегистраторов": "3",
        "Электромонтажные работы": "4",
        "Установка и настройка роутеров": "5",
        "Замена жёсткого диска": "6",
        "Подключение POE коммутатора": "7"
    };

    // Генерация уникального set-id для каждой услуги
    const generateSetId = (id: number) => `set_${id}`;

    // Функция экранирования XML
    const escapeXml = (text: string): string => {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "<")
            .replace(/>/g, ">")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;");
    };

    // Собираем все <set>
    const setsXml = servicesList.map(service => `
            <set id="${generateSetId(service.id)}"><name>${escapeXml(service.name)}</name><url>${baseUrl}/${service.serviceName}</url></set>`
    ).join("");

    // Собираем все <offer>
    const offersXml = servicesList.map(service => {
        const categoryId = categoryMap[service.category];
        const setIds = generateSetId(service.id);
        const imageUrl = `${baseUrl}/images/service${service.id}.png`;

        // Дополнительные параметры в зависимости от категории
        let paramsXml = `
                <param name="Рейтинг">5</param>
                <param name="Число отзывов">0</param>
                <param name="Годы опыта">10</param>
                <param name="Регион">Кемеровская область</param>
                <param name="Конверсия">0.4</param>
                <param name="Выезд на дом">да</param>
                <param name="Работа по договору">да</param>
                <param name="Наличный расчет">да</param>
                <param name="Безналичный расчет">да</param>
                <param name="unit">${service.unit === "м" ? "Погонный метр" : "Услуга"}</param>`;

        if (service.category === "Установка и настройка систем видеонаблюдения") {
            paramsXml += `\n                <param name="service_type">security</param>`;
        } else if (service.category === "Монтаж и обслуживание кондиционеров") {
            paramsXml += `\n                <param name="service_type">airconditioning</param>`;
        } else if (service.category === "Установка видеорегистраторов") {
            paramsXml += `\n                <param name="service_type">security_dvr_nvr</param>`;
        } else if (service.category === "Электромонтажные работы") {
            paramsXml += `\n                <param name="service_type">electrical</param>`;
        } else if (service.category === "Установка и настройка роутеров") {
            paramsXml += `\n                <param name="service_type">network_router</param>`;
        } else if (service.category === "Замена жёсткого диска") {
            paramsXml += `\n                <param name="service_type">security_hdd_replace</param>`;
        } else if (service.category === "Подключение POE коммутатора") {
            paramsXml += `\n                <param name="service_type">network_poe_switch</param>`;
        }

        return `
            <offer id="${service.id}">
                <name>${escapeXml(service.name)}</name>
                <url>${baseUrl}/${service.serviceName}</url>
                <price>${service.price}</price>
                <currencyId>RUB</currencyId>
                <categoryId>${categoryId}</categoryId>
                <set-ids>${setIds}</set-ids>
                <picture>${imageUrl}</picture>
                <description>${escapeXml(service.description)}</description>
                <adult>false</adult>
                <expiry>P5Y</expiry>${paramsXml}
            </offer>`;
    }).join("");

    // Полный YML
    const yml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<yml_catalog date="${new Date().toISOString().slice(0, 10).replace(/-/g, "-")} 00:00">
    <shop>
        <name>ВИДЕОХРАНИТЕЛЬ</name>
        <company>ВИДЕОХРАНИТЕЛЬ</company>
        <url>${baseUrl}</url>
        <email>denis.zaichuk@yandex.ru</email>
        <currencies>
            <currency id="RUB" rate="1"/>
        </currencies>
        <categories>
            <category id="1">Установка и настройка систем видеонаблюдения</category>
            <category id="2">Монтаж и обслуживание кондиционеров</category>
            <category id="3">Установка видеорегистраторов</category>
            <category id="4">Электромонтажные работы</category>
            <category id="5">Установка и настройка роутеров</category>
            <category id="6">Замена жёсткого диска</category>
            <category id="7">Подключение POE коммутатора</category>
        </categories>
        <sets>${setsXml}
        </sets>
        <offers>${offersXml}
        </offers>
    </shop>
</yml_catalog>`;

    return new Response(yml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
        },
    });
};