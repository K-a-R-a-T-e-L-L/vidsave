import React from 'react';
import style from './styles.module.scss';
import Image from 'next/image';
import CustomSlider from '../CustomSlider';
import { SliderProps } from '@/app/types/SliderProps';

const Information: React.FC = () => {

    const ArrayImagesSlider = {
        brands: [
            ['/images/hivideo_logo.png', 'Логотип бренда компании HiVideo Electronics Limited'],
            ['/images/ezviz_logo.png', 'Логотип международного бренда EZVIZ,  интеллектуальных решений для безопасности и жизни'],
            ['/images/iflow_logo.png', 'Логотип бренда iFLOW, поставляющий оборудование и интеллектуальные решения в сфере комплексных систем безопасности.'],
            ['/images/novicam_logo.png', 'Логотип бренда Novicam, производитель оборудования для систем видеонаблюдения, контроля доступа (СКУД) и домофонии'],
            ['/images/alhua_logo.png', 'Логотип компании Alhua Technology Co Ltd., производящая камеры и цифровые видеорегистраторы для систем видеонаблюдения (CCTV)'],
        ],
        projects: [
            ['/images/project_1.jpg', ''],
            ['/images/project_2.jpg', ''],
            ['/images/project_3.jpg', ''],
            ['/images/project_4.jpg', ''],
            ['/images/project_5.jpg', ''],
            ['/images/project_6.jpg', ''],
            ['/images/project_7.jpg', ''],
            ['/images/project_9.jpg', ''],
            ['/images/project_10.jpg', ''],
            ['/images/project_11.jpg', ''],
            ['/images/project_12.jpg', ''],
            ['/images/project_13.jpg', ''],
            ['/images/project_14.jpg', ''],
            ['/images/project_15.jpg', ''],
            ['/images/project_16.jpg', ''],
            ['/images/project_17.jpg', ''],
            ['/images/project_18.jpg', ''],
            ['/images/project_19.jpg', ''],
            ['/images/project_20.jpg', ''],
            ['/images/project_21.jpg', ''],
            ['/images/project_22.jpg', ''],
            ['/images/project_23.jpg', ''],
        ]
    };

    const SettingsSlider = {
        brands: {
            dots: false,
            infinity: true,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            pauseOnHover: false,
        },
        projects: {
            dots: true,
            infinity: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    };

    const StylesSlider = {
        brands: {
            container: {
                rowGap: '15px',
            },
            title: {
                fontSize: '14px',
                fontSizeMobile: '10px',
                opacity: '0.6',
                textAlign: 'center',
            },
            buttons: false,
            imgSizes: 'contain',
            class: 'no_animated'
        },
        projects: {
            container: {
                rowGap: '35px',
            },
            title: {
                fontSize: '32px',
                fontSizeMobile: '28px',
                opacity: '0.8',
                textAlign: 'center',
                marginTop: '60px'
            },
            buttons: true,
            imgSizes: 'contain',
            class: 'hidden_img'
        }
    };

    const SliderProps = {
        brands: {
            title: "Работаем с различными брендами ведущих производителей",
            arrayURL: ArrayImagesSlider.brands,
            settings: SettingsSlider.brands,
            styles: StylesSlider.brands
        },
        projects: {
            title: "Примеры наших работ",
            arrayURL: ArrayImagesSlider.projects,
            settings: SettingsSlider.projects,
            styles: StylesSlider.projects
        }
    };

    return (
        <section className={style.information} id='information'>
            <article className={style.information__article_first}>
                <div className={style.article_first__box_text}>
                    <h2 className={`${style.box_text__title} hidden_h`}>О компании</h2>
                    <p className={`${style.box_text__description} hidden_p`}>
                        🏢 Компания «ВИДЕОХРАНИТЕЛЬ» внедряет передовые комплексы видеонаблюдения с функцией распознавания лиц, автоматического отслеживания движений и интеллектуального анализа событий. <br />
                        💡 Благодаря таким решениям:
                        Вам не нужны десятки сторожей и контролёров объекте.
                        Система круглосуточно фиксирует всё, что происходит.
                        Вы получаете мгновенные уведомления о подозрительных ситуациях.
                        Экономия на зарплатах персоналу достигает сотен тысяч рублей в год.
                        Мы проектируем, устанавливаем и обслуживаем системы «под ключ».
                        Ваш объект всегда под защитой - без лишних затрат.
                    </p>
                </div>
                <div className={style.article_first__box_image}>
                    <Image src={'/images/information_image.png'} alt='Универсальная камера для наблюдения на доме' className='hidden_img' style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />
                </div>
                <div className={style.article_first__box_slider}><CustomSlider props={SliderProps.brands as SliderProps["props"]} /></div>
            </article>
            <article className={style.information__article_last}>
                <CustomSlider props={SliderProps.projects as SliderProps["props"]} />
            </article>
        </section>
    );
};

export default Information;