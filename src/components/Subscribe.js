import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import vector from '../images/bg-vectors/7.png'
import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import { IoMailOutline } from "react-icons/io5"


const Subscribe = () => {
    return (
        <Row xs={1} md={2} className="mb-5">
            <Col>
                <h6 className='text-primary'>Newsletter Subscribe</h6>
                <h4>To Get More News Subscribe Us</h4>
                <div className='pt-3 position-relative text-center'><Image className='position-absolute top-0 start-50' src={vector} /></div>
            </Col>
            <Col>
                <div className='p-2 rounded' style={{ backgroundColor: "#BCBCBC1A" }}>
                    <InputGroup>
                        <InputGroup.Text className='bg-transparent border-0 '><IoMailOutline className='text-muted fs-3' /></InputGroup.Text>
                        <Form.Control className='bg-transparent border-0' placeholder='Email Address' />
                        <Button className='rounded' variant="primary">Subscribe</Button>
                    </InputGroup>
                </div>
            </Col>
        </Row>
    );
};

export default Subscribe;