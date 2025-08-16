'use client';
import Footer from '../Footer';
import Header from '../Header';
import style from './styles.module.scss';
import Home from '../Home';
import Information from '../Information';
import Advantages from '../Advantages';
import Contacts from '../Contacts';
import PriceList from '../PriceList';
import { useEffect } from 'react';

const Layout: React.FC = () => {
    useEffect(() => {
        const Observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const TagName = entry.target.localName;

                    try {
                        if (entry.isIntersecting && TagName === 'p') {
                            entry.target.classList.add('animated_p');
                        } else if (
                            entry.isIntersecting &&
                            (TagName === 'h1' ||
                                TagName === 'h2' ||
                                TagName === 'h3' ||
                                TagName === 'h4' ||
                                TagName === 'h5' ||
                                TagName === 'h6')
                        ) {
                            entry.target.classList.add('animated_h');
                        }
                        if (entry.isIntersecting && TagName === 'img' && !entry.target.classList.contains('no_animated')) {
                            entry.target.classList.add('animated_img');
                        }
                        if (entry.isIntersecting && (TagName === 'li' || TagName === 'a')) {
                            entry.target.classList.add('animated_li');
                        }
                        if (entry.isIntersecting && TagName === 'hr') {
                            entry.target.classList.add('animated_hr');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                });
            },
            { threshold: 0.3 },
        );

        document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, img, li:not(.slick-dots li), a, hr, #home').forEach((el) => {
            if (el) Observer.observe(el);
        });
    }, []);

    return (
        <div className={style.layout}>
            <Header />
            <main className={style.layout__main}>
                <Home />
                <PriceList />
                <Advantages />
                <Information />
                <Contacts />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
