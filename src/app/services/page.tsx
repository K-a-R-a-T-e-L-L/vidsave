import { servicesList } from "../lib/servicesList";
import style from './styles.module.scss';
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import ClientServicesList from "../components/ClientServicesList";

const ServicesListPage = () => {

    return (
        <div className={style.layout}>
            <Header />
            <ClientServicesList>
                <main className={style.layout__main}>
                    <h1 className={style.main__title}>Перечень услуг</h1>
                    <p className={style.main__description}>Профессиональные решения для дома и бизнеса</p>
                    <section className={style.main__services_list}>
                        {servicesList.map((el) => {
                            return (
                                <div className={style.list__item} key={el.id}>
                                    <div className={style.item__image}>
                                        <Image src={`/images/service${el.id}.png`} alt={el.name} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />
                                    </div>
                                    <div className={style.item__content}>
                                        <div className={style.content__text}>
                                            <h2 className={style.text__title}>{el.name}</h2>
                                            <p className={style.text__description}>{el.description}</p>
                                        </div>
                                        <div className={style.content__more}>
                                            <span className={style.more__price}>{el.unit === "м" && !el.serviceName.includes("prokladka-kabelya-utp") ? "от" : ""} {el.price}₽ / {el.unit}</span>
                                            <hr />
                                            <Link href={`/services/${el.serviceName}`} className={style.more__link}>Узнать подробнее</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                </main>
            </ClientServicesList>
            <Footer />
        </div>
    );
};

export default ServicesListPage;