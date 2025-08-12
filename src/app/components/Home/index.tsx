import Image from 'next/image';
import style from './styles.module.scss';
import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {

    return (
        <section className={style.home} id='home'>
            <article className={style.home__article_first}>
                <div className={style.article_first__box}>
                    <h1 className={style.box__title}>Торгово-монтажная компания «ВИДЕОХРАНИТЕЛЬ»</h1>
                    <p className={style.box__description}>
                        Мы - ключ к Вашему комфорту! Мы знаем как сделать вашу жизнь современной и безопасной,  видь мы специализируемся на создании комплексных решений, что позволяет решить любые задачи.
                    </p>
                    <div className={style.box__buttons_box}>
                        <Link href={'#contacts'} className={`${style.buttons_box__one_button} `}>Оставить заявку</Link>
                        <Link href={'#information'} className={`${style.buttons_box__two_button} `}>Подробнее</Link>
                    </div>
                </div>
            </article>
            <article className={style.home__article_last}>
                <div className={style.article_last__box_text}>
                    <h2 className={style.box_text__title}>Будьте спокойны за сохранность имущества и близких</h2>
                    <p className={style.box_text__description}>
                        Мы ценим ваше время и доверие, поэтому предлагаем качественные услуги «под ключ» с индивидуальным подходом к каждому клиенту. Доверьте нам заботу о Вашем комфорте и безопасности!
                    </p>
                    <hr className={style.box_text__line} />
                </div>
                    <div className={style.article_last__box_image}>
                        <Image src={'/images/home_image.png'} alt='img' fill style={{ objectFit: 'cover' }} />
                    </div>
            </article>
        </section>
    );
};

export default Home;