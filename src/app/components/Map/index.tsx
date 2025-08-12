import React from "react"

interface MapProps {
    latitude: number,
    longitude: number,
    address: string
    sizes: string[],
    borderRadius: string,
    title: string
};

const Map: React.FC<MapProps> = ({ latitude, longitude, address, sizes, borderRadius, title }) => {

    const MapURL = `https://yandex.ru/map-widget/v1/?ll=${longitude},${latitude}&mode=whatshere&whatshere%5Bpoint%5D=${longitude},${latitude}&whatshere%5Bzoom%5D=17&z=17&text=${encodeURIComponent(address)}`;

    return (
        <div style={{ width: sizes[0], height: sizes[1], borderRadius: borderRadius, overflow: 'hidden', backgroundColor: '#a9f3f372'}}>
                <iframe
                    width={"100%"}
                    height={"100%"}
                    title={title}
                    src={MapURL}
                    style={{ border: 0 }}
                >
                </iframe>
        </div>
    )
};

export default Map;