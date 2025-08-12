import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';
import React from 'react';
import Image from 'next/image';

interface CustomSliderProps {
    props: {
        title: string
        arrayURL: string[],
        settings: Record<string, number | string | boolean>,
        styles: {
            container: Record<string, string>,
            title: Record<string, string>,
            buttons: boolean,
            imgSizes: string,
            class: string
        }
    }
};

const CustomSlider: React.FC<CustomSliderProps> = ({ props }) => {

    const StylesContainer = {
        ...props.styles.container,
        '--buttons': props.styles.buttons ? 'block' : 'none'
    };

    const StylesTitle = {
        ...props.styles.title,
        "--fontSizeMobile": props.styles.title.fontSizeMobile
    };

    return (
        <div className={'container_slider'} style={StylesContainer as React.CSSProperties}>
            <h2 style={StylesTitle as React.CSSProperties}>{props.title}</h2>
            <Slider {...props.settings}>
                {props.arrayURL.map((el, i) => {
                    return (
                        <div key={i} className={'item_slider'}>
                            <Image src={el} alt='img' className={props.styles.class} fill objectFit={props.styles.imgSizes} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default CustomSlider;