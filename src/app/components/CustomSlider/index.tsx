import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';
import React from 'react';
import Image from 'next/image';
import { SliderProps } from '@/app/types/SliderProps';

const CustomSlider: React.FC<SliderProps> = ({ props }) => {

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
            <h2 style={StylesTitle as React.CSSProperties} className={'hidden_h'}>{props.title}</h2>
            <Slider {...props.settings}>
                {props.arrayURL.map((el, i) => {
                    return (
                        <div key={i} className={'item_slider'}>
                            <Image src={el[0]} alt={el[1]} className={props.styles.class} style={{objectFit: props.styles.imgSizes}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill  />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default CustomSlider;