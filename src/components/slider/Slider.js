import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import vector1 from '../../images/bg-vectors/4.png'
import vector2 from '../../images/bg-vectors/5.png'
import vector3 from '../../images/bg-vectors/6.png'
import Slide from './Slide';
import './slider.css'

const Slider = () => {
    return (
        <div className='position-relative p-2 my-5 text-center '>
            <Image className='d-none d-md-inline image1' src={vector1} />
            <Image className='image2' src={vector2} />
            <Image className='image3' src={vector3} />
            <h6 className='text-primary'>testimonial</h6>
            <h4>Patients Say About Us</h4>
            <Carousel controls={false} className='div my-5'>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;