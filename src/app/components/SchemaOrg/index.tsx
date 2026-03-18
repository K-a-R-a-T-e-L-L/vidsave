'use client';

import { useEffect } from "react"

const SchemaOrg = () => {
    useEffect(() => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'localBusiness',
            name: '«ВИДЕОХРАНИТЕЛЬ»',
            image: '/images/project_13.jpg',
            url: 'https://vidsave.ru',
            telephone: '+7-904-574-52-07',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'улица Шестакова 6А',
                addressLocality: 'Кемерово',
                addressRegion: 'Кемеровская область',
                postalCode: '650000',
                addressCountry: 'RU',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: '55.362173',
                longitude: '86.068001',
            },
            serviceArea: 'Кемерово и область',
            description: 'Установка видеонаблюдения, кондиционеров и электромонтажных работ',
            aggregateRating: {
                ratingValue: '5',
                reviewCount: '39'
            },
            sameAs: [
                'https://vidsave.ru',
                'https://vk.com/khranitel_video',
                'https://www.avito.ru/kemerovo/predlozheniya_uslug/videonablyudenie_ustanovkaprodazhaobsluzhivanie_3335539044',
                'https://t.me/deniszaichuk'
            ]
        };
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(schema);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};

export default SchemaOrg;