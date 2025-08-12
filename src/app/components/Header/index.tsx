'use client';
import Image from 'next/image';
import style from './styles.module.scss';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type ListLinksType = {
    url: string,
    text: string,
    class: string
}[];

const Header = () => {

    const [ListLinks, setListLinks] = useState<ListLinksType>([
        {
            url: 'priceList',
            text: 'Услуги и цены',
            class: ''
        },
        {
            url: 'advantages',
            text: 'Преимущества',
            class: ''
        },
        {
            url: 'information',
            text: 'О компании',
            class: ''
        },
        {
            url: 'contacts',
            text: 'Контакты',
            class: ''
        },
    ]);

    const [HeaderClass, setHeaderClass] = useState(false);
    const [BurgerMenu, setBurgerMenu] = useState(false);

    useEffect(() => {
        const Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                try {
                    if (entry.isIntersecting) {
                        setListLinks((prevState) => {
                            const newLinks = prevState.map((el) => {
                                if (el.url === entry.target.id) {
                                    return {
                                        ...el,
                                        class: el.class === "link_active" ? '' : 'link_active'
                                    }
                                }
                                else {
                                    return { ...el, class: '' }
                                }
                            });
                            return newLinks;
                        });
                    };
                } catch (error) {
                    console.log(error);
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('#home, #priceList, #advantages, #information, #contacts').forEach((el) => {
            if (el) Observer.observe(el);
        });
    }, []);

    useEffect(() => {
        const handleScrollPage = () => {
            if (window.scrollY === 0) setHeaderClass(false);
            else setHeaderClass(true);
        };

        window.addEventListener('scroll', handleScrollPage);

        return () => window.removeEventListener('scroll', handleScrollPage);
    }, []);

    return (
        <header className={`${style.header} ${HeaderClass ? style.header_active : ''}`}>
            <div className={style.header__unification}>
                <Link href="#home" className={style.header__mini_info}>
                    <div className={style.mini_info__logo_box}>
                        <Image alt="Logo" src={"/images/logo.png"} objectFit='contain' layout='fill' />
                    </div>
                    ВИДЕОХРАНИТЕЛЬ
                </Link>
                <nav className={`${style.header__navigation} ${BurgerMenu ? style.header__navigation_burger : ''}`}>
                    <button className={`${style.navigation__burger} ${BurgerMenu ? style.navigation__burger_active : ''}`} onClick={() => setBurgerMenu(!BurgerMenu)}></button>
                    <ul className={style.navigation__list_link}>
                        {ListLinks.map((el, i) => {
                            return (
                                <li key={i} className={`${style.list_link__link} ${el.class}`}><Link href={`#${el.url}`} onClick={() => BurgerMenu ? setBurgerMenu(false) : null}>{el.text}</Link></li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;