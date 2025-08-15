'use client'
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
            link: ['denis.zaichuk@yandex.ru'],
            alt: 'Иконка электронной почты яндекс'
        },
        {
            icon: '/images/telephone_icon.png',
            coloredIcon: '/images/colored_telephone_icon.png',
            title: 'Телефон',
            link: ['8-995-065-67-77', '8-904-574-52-07'],
            alt: 'Иконка телефона'
        },
        {
            icon: '/images/avito_icon.png',
            coloredIcon: '/images/colored_avito_icon.png',
            title: 'Авито',
            link: ['https://www.avito.ru/user/808b4759c3612b86a06b7fd6eb936f30/profile?src=sharing'],
            alt: 'Иконка авито'
        },
        {
            icon: '/images/whatsapp_icon.png',
            coloredIcon: '/images/colored_whatsapp_icon.png',
            title: 'Whatsapp',
            link: ['https://wa.me/7995706576777'],
            alt: 'Иконка ватсапа'
        },
    ];

    return (
        <section className={style.contacts} id='contacts'>
            <div className={style.contacts__box_text}>
                <h2 className={style.box_text__title}>Свяжитесь с нами</h2>
                <p className={style.box_text__description}>Мы всегда готовы ответить на ваши вопросы.</p>
            </div>
            <div className={style.contacts__box_contacts}>
                <div className={style.box_contacts__container}>
                    {ArrayLinksInfo.map((el, i) => {
                        return (
                            <div className={style.container__contact} key={i}>
                                <div className={style.contacts__icon}><Image src={el.icon} alt={el.alt} style={{objectFit: 'contain'}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill /></div>
                                <h3 className={style.contact__title}>{el.title}</h3>
                                {el.link.length === 2 ? (
                                    <>
                                        <h5 className={style.contact__link}><Link target='_blank' href={`tel:${el.link[0]}`}>{el.link[0]}</Link></h5>
                                        <h5 className={style.contact__link}><Link target='_blank' href={`tel:${el.link[1]}`}>{el.link[1]}</Link></h5>
                                    </>
                                ) : (
                                    <h5 className={style.contact__link}><Link target='_blank' href={`${el.title === 'Электронная почта' ? 'mailto:[' : ''}${el.link[0]}${el.title === 'Электронная почта' ? ']' : ''}`}>{el.link}</Link></h5>
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className={style.box_contacts__maps}>
                    <Map latitude={55.362173} longitude={86.068001} address='Кемерово, Шестакова 6А' title='Яндекс карты' sizes={['100%', '80%']} borderRadius='20px' />
                    <div className={style.maps__info}>
                        <div className={style.info__contacts_buttons}>
                            <div className={style.contacts_buttons__line}></div>
                            {ArrayLinksInfo.map((el, i) => {
                                return (
                                    <Link target='_blank' key={i} href={`${el.title === 'Электронная почта' ? 'mailto:[' : (el.title === 'Телефон' ? 'tel:' : '')}${el.link[0]}${el.title === 'Электронная почта' ? ']' : ''}`} className={style.contacts_buttons__link}>
                                        <Image src={el.coloredIcon} alt={el.alt} style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />
                                    </Link>
                                )
                            })}
                            <div className={style.contacts_buttons__line}></div>
                        </div>
                        <h5 className={style.info__address}>Россия, г. Кемерово, ул. Шестакова, д. 6А</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;