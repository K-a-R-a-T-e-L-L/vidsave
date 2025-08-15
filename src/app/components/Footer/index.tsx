import Link from 'next/link';
import style from './styles.module.scss';
import React from 'react';

type ListLinksType = {
    url: string,
    text: string
}[];

const Footer = () => {

    const ListLinks: ListLinksType = [
        {
            url: '#home',
            text: 'Главная'
        },
        {
            url: '#information',
            text: 'О компании'
        },
        {
            url: '#contacts',
            text: 'Контакты'
        },
        {
            url: '',
            text: '8-904-574-52-07'
        },
        {
            url: '#priceList',
            text: 'Услуги и цены'
        },
        {
            url: '#advantages',
            text: 'Преимущества'
        },
        {
            url: '',
            text: 'denis.zaichuk@yandex.ru'
        },
        {
            url: '',
            text: '8-995-065-67-77'
        },
    ];

    return (
        <footer className={style.footer}>
            <div className={style.footer__box}>
                <nav className={style.box__navigation}>
                    <ul className={style.navigation__list_link}>
                        {ListLinks.map((el, i) => {
                            return <li key={i} className={`${style.list_link__link} hidden_li`} tabIndex={0}><Link href={el.url}>{el.text}</Link></li>
                        })}
                    </ul>
                </nav>
                <div className={style.box__info}>
                    <h4 className={`${style.info__title} hidden_h`}>Торгово-монтажная компания «ВИДЕОХРАНИТЕЛЬ»</h4>
                    <hr className={`${style.info__decoration_line} hidden_hr`} />
                    <h6 className={`${style.info__description} hidden_h`}>
                        ИП Зайчук Денис Евгеньевич ИНН 423085052501 ЕГРИП 324420500109616
                        650010 Россия, Кемеровская область - Кузбасс, г. Кемерово, ул. Тельбесская, д. 61
                    </h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;