import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Dr_1 from '../../images/Dr-1.png';

const Slide = () => {
    return (
        <Row className=' p-4' >
            <Col className='p-3' xs={5} md={4} lg={3}><br /><Image src={Dr_1} alt="Dr image" /></Col>
            <Col className='text-start'>
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egest in nisl</p>
                <h3>Roberta Fitzgerald</h3>
            </Col>
        </Row>
    );
};

export default Slide;