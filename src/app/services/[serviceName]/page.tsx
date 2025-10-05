import { servicesList } from "@/app/lib/servicesList";
import style from './styles.module.scss';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClientService from "@/app/components/ClientService";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{ serviceName: string }>;
}

const ServicePage = async ({ params }: Props) => {

    const ListLinks = [
        {
            icon: 'email_icon.png',
            title: 'Электронная почта',
            link: ['denis.zaichuk@yandex.ru'],
            alt: 'Иконка электронной почты яндекс',
        },
        {
            icon: 'telephone_icon.png',
            title: 'Телефон',
            link: ['8-995-065-67-77', '8-904-574-52-07'],
            alt: 'Иконка телефона',
        },
        {
            icon: 'avito_icon.png',
            title: 'Авито',
            link: ['https://www.avito.ru/user/546aa53ca0c817d582afaacd3c4e46c5/profile?src=sharing'],
            alt: 'Иконка авито',
        },
        {
            icon: 'whatsapp_icon.png',
            title: 'Ватсапп',
            link: ['https://wa.me/79950656777'],
            alt: 'Иконка ватсапа',
        },
        {
            icon: 'vk_icon.png',
            title: 'ВКонтакте',
            link: ['https://vk.com/khranitel_video'],
            alt: 'Иконка ВКонтакте',
        },
    ];

    const resolvedParams = await params;
    const { serviceName } = resolvedParams;

    const service = servicesList.find((s) => s.serviceName === serviceName);

    if (!service) {
        return (
            <div className={style.layout}>
                <Header />
                <main className={style.layout__main}>
                    <ClientService children={<h1>Услуга не была найдена</h1>} />
                </main>
                <Footer />
            </div>
        );
    };

    return (
        <div className={style.layout}>
            <Header />
            <main className={style.layout__main}>
                <ClientService>
                    <h1 className={style.main__title}>{service.name}</h1>
                    <div className={style.main__box_image}>
                        <Image src={`/images/services/service${service.id}.png`} alt={service.name} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />
                    </div>
                    <div className={style.main__content}>
                        <p className={style.content__description}>{service.description}</p>
                        <div className={style.content__info}>
                            <span className={style.info__price}>
                                <span className={style.price__number}>{service.from} {service.price}</span>
                                <span className={style.price__unit}>₽ / {service.unit}</span>
                            </span>
                            <hr className={style.info__line} />
                            <div className={style.info__contacts}>
                                <p className={style.contact__text}>Свяжитесь с нами:</p>
                                <div className={style.contacts__buttons}>
                                    {ListLinks.map((el, i) => {
                                        return (
                                            <Link
                                                target="_blank"
                                                key={i}
                                                href={`${el.title === 'Электронная почта' ? 'mailto:' : (el.title === 'Телефон' ? 'tel:' : '')}${el.link[0]}`}
                                                className={`${style.buttons__link}`}
                                            >
                                                <Image
                                                    src={`/images/colored_${el.icon}`}
                                                    alt={el.alt}
                                                    style={{ objectFit: 'cover' }}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    fill
                                                />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </ClientService>
            </main>
            <Footer />
        </div>
    );
};

export async function generateStaticParams() {
    return servicesList.map((s) => ({
        serviceName: s.serviceName
    }));
};

export default ServicePage;