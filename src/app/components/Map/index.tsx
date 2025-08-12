import React, { useEffect, useRef, useState } from "react"

interface MapProps {
    latitude: number,
    longitude: number,
    address: string
    sizes: string[],
    borderRadius: string,
    title: string
};

const Map: React.FC<MapProps> = ({ latitude, longitude, address, sizes, borderRadius, title }) => {

    const [Visibility, setVisibility] = useState(false);
    const Ref = useRef<null | HTMLDivElement>(null);
    const MapURL = `https://yandex.ru/map-widget/v1/?ll=${longitude},${latitude}&mode=whatshere&whatshere%5Bpoint%5D=${longitude},${latitude}&whatshere%5Bzoom%5D=17&z=17&text=${encodeURIComponent(address)}`;

    useEffect(() => {
        const Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibility(true);
                    Observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        if (Ref.current) {
            Observer.observe(Ref.current);
        };

        return () => {
            if (Ref.current) Observer.unobserve(Ref.current);
        };
    }, []);

    return (
        <div style={{ width: sizes[0], height: sizes[1], borderRadius: borderRadius, overflow: 'hidden', backgroundColor: '#a9f3f372', display: 'grid', placeItems: 'center' }} ref={Ref}>
            {Visibility ? (
                <iframe
                    width={"100%"}
                    height={"100%"}
                    title={title}
                    src={MapURL}
                    style={{ border: 0 }}
                >
                </iframe>
            ) : (
                <span>Загрузка карты ...</span>
            )}
        </div>
    )
};

export default Map;