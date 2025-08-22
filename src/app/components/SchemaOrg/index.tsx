'use client';

import { useEffect } from "react"

const SchemaOrg = () => {
    useEffect(() => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'localBusiness',
            name: '«ВИДЕОХРАНИТЕЛЬ»',
            image: '/images/',
            url: 'https://recsave.ru',
            telephone: '+7-995-065-67-77',
            address: {
                '@type': 'PostalAddress',
                streetAddres: 'улица Шестакова 6А',
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
                'https://recsave.ru',
                'https://vk.com/khranitel_video',
                'https://www.avito.ru/user/546aa53ca0c817d582afaacd3c4e46c5/profile?src=sharing',
                'https://wa.me/79950656777'
            ]
        };
        
        const script = document.createElement('script');
        script.type = 'application/ld + json';
        script.innerHTML = JSON.stringify(schema);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};

export default SchemaOrg;