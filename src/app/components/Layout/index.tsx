'use client';
import Footer from '../Footer';
import Header from '../Header';
import style from './styles.module.scss';
import Home from '../Home';
import Information from '../Information';
import Advantages from '../Advantages';
import Contacts from '../Contacts';
import PriceList from '../PriceList';
import { useEffect, useLayoutEffect } from 'react';
import { useGetSizingWindow } from '@/hooks/useGetSizingWindow/useGetSizingWindow';
import { animated } from '@/app/lib/animated';

const Layout: React.FC = () => {
    const [Width] = useGetSizingWindow();

    useEffect(() => {
        document.documentElement.classList.remove('no-js');        
    }, []);

    useLayoutEffect(() => {
        animated();
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