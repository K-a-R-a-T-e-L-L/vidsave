import style from './styles.module.scss';

const Advantages = () => {
    return (
        <section className={style.advantages} id='advantages'>
            <article className={style.advantages__article_first}>
                <div className={style.article_first__box}>
                    <h2 className={`${style.box__title} hidden_h`}>Почему выбирают нас?</h2>
                    <p className={`${style.box__description} hidden_p`}>
                        Мы обеспечиваем оперативный выезд специалиста для осмотра Вашего объекта и заключения договора. <br />
                        Гарантия на оборудование и монтажные работы , а так же дальнейшее обслуживание.
                    </p>
                    <div className={style.box__roadmap}>
                        <div className={`${style.roadmap__camera} ${style.roadmap__item}`}>
                            <h3 className={`${style.roadmap__el__title} hidden_h`}>Виденаблюдение:</h3>
                            <ul className={style.roadmap__el__list_points}>
                                <li className={`${style.list_points__point} hidden_li`}><span className={style.point__main_text}>Безопасность</span> — Современные системы видеонаблюдения для защиты вашего имущества, днем и ночью, в любое время года.</li>
                                <li className={`${style.list_points__point} hidden_li`}><span className={style.point__main_text}>Удаленный доступ и архивирование</span> — Контролируйте ситуацию через смартфон или компьютер онлайн или смотрите записи, где бы вы ни находились.</li>
                                <li className={`${style.list_points__point} hidden_li`}><span className={style.point__main_text}>Индивидуальный подход</span> — Мы подберем оптимальное решение, учитывая потребности и особенности вашего объекта.</li>
                            </ul>
                        </div>
                        <div className={`${style.roadmap__conditioner} ${style.roadmap__item}`}>
                            <h3 className={`${style.roadmap__el__title} hidden_h`}>Кондиционирование:</h3>
                            <ul className={style.roadmap__el__list_points}>
                                <li className={`${style.list_points__point} hidden_li`}><span className={style.point__main_text}>Идеальный микроклимат</span> — создадим комфортную атмосферу в любом помещении с помощью современных и энергоэффективных cплит-систем.</li>
                                <li className={`${style.list_points__point} hidden_li`}><span className={style.point__main_text}>Экономия и надежность</span> — подберем сплит-систему, которая будет соответствовать вашим ожиданиям по производительности, экономичности и долговечности.</li>
                                <li className={`${style.list_points__point} hidden_li`}><span className={style.point__main_text}>Забота о здоровье</span> — наши системы очищают воздух от пыли и аллергенов, обеспечивая здоровый микроклимат.</li>
                            </ul>
                        </div>
                        <div className={`${style.roadmap__installation} ${style.roadmap__item}`}>
                            <h3 className={`${style.roadmap__el__title} hidden_h`}>Электромонтажные работы:</h3>
                            <ul className={style.roadmap__el__list_points}>
                                <li className={`${style.list_points__point} hidden_li`}><span className={style.point__main_text}>Надежная основа вашего комфорта</span> — полный спектр электромонтажных работ любой сложности, обеспечивающий безопасность и надежность вашей электросети.</li>
                                <li className={`${style.list_points__point} hidden_li`}><span className={style.point__main_text}>От проектирования до реализации</span> — осуществляем все этапы, от проектирования до пусконаладки электрооборудования и освещения.</li>
                                <li className={`${style.list_points__point} hidden_li`}><span className={style.point__main_text}>Соответствие современным стандартам</span> — работаем в строгом соответствии с нормами и правилами, используя сертифицированные материалы.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Advantages;