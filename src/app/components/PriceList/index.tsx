"use client";
import Image from 'next/image';
import style from './styles.module.scss';
import React, { useState } from 'react';

type IformationCardType = {
    all: [
        {
            icon: string,
            title: string,
            description: string
        },
        {
            icon: string,
            title: string,
            description: string
        },
        {
            icon: string,
            title: string,
            description: string
        }
    ],
    basic: [
        {
            preview: string,
            title: string,
            description: string
        },
        {
            preview: string,
            title: string,
            description: string
        },
        {
            preview: string,
            title: string,
            description: string
        }
    ]
};

const PriceList: React.FC = () => {

    const [InformationCard, setIformationCard] = useState<IformationCardType>({
        all: [
            {
                icon: '/images/project_8.jpg',
                title: 'Проектирование и монтаж систем видеонаблюдения',
                description: 'Обеспечение полного контроля над вашей территорией, днем и ночью.',
            },
            {
                icon: '/images/project_10.png',
                title: 'Установка кондиционеров',
                description: 'Создание идеального микроклимата, который подарит вам прохладу летом и тепло зимой, а также позаботится о чистоте воздуха с помощью бризера.',
            },
            {
                icon: '/images/project_9.jpg',
                title: 'Электромонтажные работы',
                description: 'От прокладки кабеля и установки розеток до полного электроснабжения объектов.',
            },
        ],
        basic: [
            {
                preview: '/images/camera_left.png',
                title: 'Проектирование и монтаж систем видеонаблюдения',
                description: 'Создаем индивидуальные решения для любого типа объекта.',
            },
            {
                preview: '/images/pc_tel.png',
                title: 'Настройка оборудование и обучение пользованию',
                description: 'Получите возможность удаленного доступа к камерам через смартфон или компьютер, просматривайте записи в любое время и будьте спокойны за своих близких и свое дело.',
            },
            {
                preview: '/images/technical_support.png',
                title: 'Обслуживание и техническая поддрежка',
                description: 'Мы работаем в строгом соответствии с действующими нормами и правилами, используя только сертифицированные материалы и проверенные технологии.',
            },
        ]
    });

    return (
        <section className={style.price_list} id='priceList'>
            <article className={style.price_list__article_first}>
                <h2 className={style.article_first__title}>Наши популярные услуги</h2>
                <p className={style.article_first__description}>Мы предоставляем широкий спектр услуг в области монтажной деятельности</p>
                <div className={style.article_first__box_services}>
                    {InformationCard.all.length > 0 ? InformationCard.all.map((el, i) => {
                        return (
                            <div className={style.box_services__card} key={i}>
                                <div className={style.card__icon}><Image src={el.icon} alt='icon' fill style={{ objectFit: 'cover' }} /></div>
                                <h3 className={style.card__title}>{el.title}</h3>
                                <p className={style.card__description}>{el.description}</p>
                                <span className={style.card__price}>От 1000 ₽</span>
                            </div>
                        )
                    }) : (<></>)}
                </div>
            </article>
            <article className={style.price_list__article_last}>
                <h2 className={style.article_last__title}>Ключевые услуги по видеонаблюдению</h2>
                <p className={style.article_last__description}>Мы предлагаем полный спектр услуг по проектированию и монтажу систем видеонаблюдения. Наша команда гарантирует надежность и высокое качество обслуживания.</p>
                <div className={style.article_last__box_services}>
                    {InformationCard.basic.length > 0 ? InformationCard.basic.map((el, i) => {
                        return (
                            <div className={style.box_services__card} key={i}>
                                <div className={style.card__preview}><Image src={el.preview} alt='icon' fill style={{ objectFit: 'cover' }} /></div>
                                <h3 className={style.card__title}>{el.title}</h3>
                                <p className={style.card__description}>{el.description}</p>
                            </div>
                        )
                    }) : (<></>)}
                </div>
            </article>
        </section>
    );
};

export default PriceList;