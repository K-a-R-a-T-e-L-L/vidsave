import Link from 'next/link';
import style from './styles.module.scss';
import React from 'react';

type ListLinksType = {
    url: string;
    text: string;
    target: string;
}[];

const Footer = () => {
    const ListLinks: ListLinksType = [
        {
            url: '#home',
            text: 'Главная',
            target: '_self'
        },
        {
            url: '#information',
            text: 'О компании',
            target: '_self'
        },
        {
            url: '#contacts',
            text: 'Контакты',
            target: '_self'
        },
        {
            url: 'tel:8-904-574-52-07',
            text: '8-904-574-52-07',
            target: '_blank'
        },
        {
            url: '#priceList',
            text: 'Услуги и цены',
            target: '_self'
        },
        {
            url: '#advantages',
            text: 'Преимущества',
            target: '_self'
        },
        {
            url: 'mailto:denis.zaichuk@yandex.ru',
            text: 'denis.zaichuk@yandex.ru',
            target: '_blank'
        },
        {
            url: 'tel:8-995-065-67-77',
            text: '8-995-065-67-77',
            target: '_blank'
        },
    ];

    return (
        <footer className={style.footer}>
            <div className={style.footer__box}>
                <nav className={style.box__navigation}>
                    <ul className={style.navigation__list_link}>
                        {ListLinks.map((el, i) => {
                            return (
                                <li key={i} className={`${style.list_link__link}`} tabIndex={0}>
                                    <Link href={el.url} target={el.target}>{el.text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className={style.box__info}>
                    <h4 className={`${style.info__title}`}>Торгово-монтажная компания «ВИДЕОХРАНИТЕЛЬ»</h4>
                    <hr className={`${style.info__decoration_line}`} />
                    <h6 className={`${style.info__description}`}>
                        ИП Зайчук Денис Евгеньевич ИНН 423085052501 ЕГРИП 324420500109616 650010 Россия, Кемеровская область —
                        Кузбасс, г. Кемерово, ул. Тельбесская, д. 61
                    </h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
