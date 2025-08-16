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
import { useGetSizingWindow } from '@/hooks/useGetSizingWindow/useGetSizingWindow';

const Layout: React.FC = () => {

    const [Width] = useGetSizingWindow();

    useEffect(() => {
        const Observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const TagName = entry.target.localName;

                    try {
                        if (Width > 768) {
                            if (entry.isIntersecting) {
                                const addingAnimation = () => {
                                    if (TagName === 'p') {
                                        entry.target.classList.add('animated_p');
                                    }
                                    else if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(TagName)) {
                                        entry.target.classList.add('animated_h');
                                    }
                                    else if (TagName === 'img' && !entry.target.classList.contains('no_animated')) {
                                        entry.target.classList.add('animated_img');
                                    }
                                    else if (['li', 'a'].includes(TagName)) {
                                        entry.target.classList.add('animated_li');
                                    }
                                    else if (TagName === 'hr') {
                                        entry.target.classList.add('animated_hr');
                                    };
                                };

                                requestAnimationFrame(addingAnimation);
                            };
                        }
                        else {
                            entry.target.classList.remove('hidden_p', 'hidden_h', 'hidden_img', 'hidden_li', 'hidden_hr');
                        };
                    } catch (error) {
                        console.log(error);
                    }
                });
            },
            { threshold: 0.3 },
        );

        const AnimatedElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, img, li:not(.slick-dots li), a, hr, #home');
        AnimatedElements.forEach((el) => {
            if (el) Observer.observe(el);
        });

        return () => {
            AnimatedElements.forEach((el) => {
                if (el) Observer.unobserve(el);
            });
            Observer.disconnect;
        };
    }, [Width]);

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
