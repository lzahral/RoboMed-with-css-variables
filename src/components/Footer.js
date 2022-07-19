import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import vector from '../images/bg-vectors/8.png'
import { RiInstagramFill, RiWhatsappFill, RiYoutubeFill, RiPhoneFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMail, IoLocationSharp } from "react-icons/io5"

const Footer = () => {
    const socialMedia = [<RiWhatsappFill className='fs-5' />, <FaTelegramPlane className='fs-5' />, <RiYoutubeFill className='fs-5' />]
    return (
        <div className='overflow-hidden div mt-5'>
            <Image src={vector} style={{ position: 'absolute ', bottom: '0px', zIndex: '1', width: '100%' }} />
            <Row xs={1} md={2} className='mx-4 p-5'>
                <Col className='mb-4'>
                    <h3>RoboMed</h3>
                    <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae</p>
                    <button className='iconBtn me-2'><RiInstagramFill className='fs-5' /></button>
                    {socialMedia.map(icon => <button className='iconBtn mx-2' key={socialMedia.indexOf(icon)}>{icon}</button>)}
                </Col>
                <Col>
                    <h6 className=' fw-light py-3'><RiPhoneFill className='fs-4 text-primary' /> (330) 718 - 8699</h6>
                    <h6 className=' fw-light'><IoMail className='fs-4 text-primary' /> HospitalAdmin@gmail.com</h6>
                    <h6 className=' fw-light py-3'><IoLocationSharp className='fs-4 text-primary' /> Keas 69 Str.
                        15234, Chalandri
                        Athens,
                        Greece</h6>
                </Col>
            </Row>
            <div>
                <h6 className='mx-5 py-4 border-top'>©2022 Global Access Telehealth. All Rights Reserved.Privacy Policy</h6>
            </div>
        </div>
    );
};

export default Footer;