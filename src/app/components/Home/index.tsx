import Image from 'next/image';
import style from './styles.module.scss';
import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {

    return (
        <section className={style.home} id='home'>
            <article className={style.home__article_first}>
                <div className={style.article_first__box}>
                    <h1 className={`${style.box__title} hidden_h`}>Торгово-монтажная компания «ВИДЕОХРАНИТЕЛЬ»</h1>
                    <p className={`${style.box__description} hidden_p`}>
                        Мы - ключ к Вашему комфорту! Знаем как сделать вашу жизнь современной и безопасной,  видь мы специализируемся на создании комплексных решений, что позволяет решить любые задачи.
                    </p>
                    <div className={style.box__buttons_box}>
                        <Link href={'#contacts'} className={`${style.buttons_box__one_button} hidden_li`}>Оставить заявку</Link>
                        <Link href={'#information'} className={`${style.buttons_box__two_button} hidden_li`}>Подробнее</Link>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Home;