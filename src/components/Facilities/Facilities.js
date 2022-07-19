import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Slids from './Slide';
import vector1 from '../../images/bg-vectors/2.png'
import vector2 from '../../images/bg-vectors/3.png'

const Slider = () => {
    return (
        <div className='position-relative mt-5 text-center'>
            <h6 className='text-primary'>Healtcare Facilities</h6>
            <h4>Our Last Healthcare Facilities</h4>
            <Image className='img1' src={vector1} />
            <Image className='img2' src={vector2} />
            <Row xs={1} md={2} lg={3} xl={4} className='mt-5 text-start'>
                <Col className='pb-4'><Slids color="1" /></Col>
                <Col><Slids color="" /></Col>
                <Col className='pb-4'><Slids color="1" /></Col>
                <Col><Slids color="" /></Col>
            </Row>

        </div>
    );
};

export default Slider;