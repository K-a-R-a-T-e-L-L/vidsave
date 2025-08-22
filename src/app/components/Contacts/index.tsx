'use client';
import Image from 'next/image';
import style from './styles.module.scss';
import Map from '../Map';
import Link from 'next/link';

const Contacts = () => {
    const ArrayLinksInfo = [
        {
            icon: '/images/email_icon.png',
            coloredIcon: '/images/colored_email_icon.png',
            title: 'Электронная почта',
            description: 'Отправьте нам письмо с вашими вопросами',
            link: ['denis.zaichuk@yandex.ru'],
            alt: 'Иконка электронной почты яндекс',
        },
        {
            icon: '/images/telephone_icon.png',
            coloredIcon: '/images/colored_telephone_icon.png',
            title: 'Телефон',
            description: 'Позвоните нам по любому из номеров',
            link: ['8-995-065-67-77', '8-904-574-52-07'],
            alt: 'Иконка телефона',
        },
        {
            icon: '/images/avito_icon.png',
            coloredIcon: '/images/colored_avito_icon.png',
            title: 'Авито',
            description: 'Найдите нас на популярной торговой площадке',
            link: ['https://www.avito.ru/user/546aa53ca0c817d582afaacd3c4e46c5/profile?src=sharing'],
            alt: 'Иконка авито',
        },
        {
            icon: '/images/whatsapp_icon.png',
            coloredIcon: '/images/colored_whatsapp_icon.png',
            title: 'Ватсапп',
            description: 'Напишите нам в WhatsApp для быстрой связи',
            link: ['https://wa.me/79950656777'],
            alt: 'Иконка ватсапа',
        },
        {
            icon: '/images/vk_icon.png',
            coloredIcon: '/images/colored_vk_icon.png',
            title: 'ВКонтакте',
            description: 'Подпишитесь на нашу страницу и будьте в курсе новостей',
            link: ['https://vk.com/khranitel_video'],
            alt: 'Иконка ВКонтакте',
        },
    ];

    return (
        <section className={style.contacts} id="contacts">
            <div className={style.contacts__box_text}>
                <h2 className={`${style.box_text__title} hidden_h`}>Свяжитесь с нами</h2>
                <p className={`${style.box_text__description} hidden_p`}>Мы всегда готовы ответить на ваши вопросы.</p>
            </div>
            <div className={style.contacts__box_contacts}>
                <div className={style.box_contacts__container}>
                    {ArrayLinksInfo.map((el, i) => {
                        return (
                            <div className={style.container__contact} key={i}>
                                <div className={style.contact__icon_box}>
                                    <div className={style.icon_box__icon}>
                                        <div className={style.icon__icon}>
                                            <Image
                                                src={el.icon}
                                                alt={el.alt}
                                                className="hidden_img"
                                                style={{ objectFit: 'contain' }}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                fill
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.contact__text_content}>
                                    <h3 className={style.text_content__title}>{el.title}</h3>
                                    <p className={style.text_content__description}>{el.description}</p>
                                    {el.link.length === 2 ? (
                                        <>
                                            <Link target="_blank" className={`${style.text_content__link} hidden_li`} href={`tel:${el.link[0]}`}>
                                                {el.link[0]}
                                            </Link>
                                            <Link target="_blank" className={`${style.text_content__link} hidden_li`} href={`tel:${el.link[1]}`}>
                                                {el.link[1]}
                                            </Link>
                                        </>
                                    ) : (
                                        <Link
                                            target="_blank"
                                            className={`${style.text_content__link} hidden_li`}
                                            href={`${el.title === 'Электронная почта' ? 'mailto:' : ''}${el.link[0]}`}
                                        >
                                            {el.link}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={style.box_contacts__maps}>
                    <Map
                        latitude={55.362173}
                        longitude={86.068001}
                        address="Кемерово, Шестакова 6А"
                        title="Яндекс карты"
                        sizes={['100%', '80%']}
                        borderRadius="20px"
                    />
                    <div className={style.maps__info}>
                        <div className={style.info__contacts_buttons}>
                            <div className={style.contacts_buttons__line}></div>
                            {ArrayLinksInfo.map((el, i) => {
                                return (
                                    <Link
                                        target="_blank"
                                        key={i}
                                        href={`${el.title === 'Электронная почта' ? 'mailto:' : (el.title === 'Телефон' ? 'tel:' : '')}${el.link[0]}`}
                                        className={`${style.contacts_buttons__link} hidden_li`}
                                    >
                                        <Image
                                            src={el.coloredIcon}
                                            alt={el.alt}
                                            className="hidden_img"
                                            style={{ objectFit: 'cover' }}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            fill
                                        />
                                    </Link>
                                );
                            })}
                            <div className={style.contacts_buttons__line}></div>
                        </div>
                        <h5 className={`${style.info__address} hidden_h`}>Россия, г. Кемерово, ул. Шестакова, д. 6А</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
