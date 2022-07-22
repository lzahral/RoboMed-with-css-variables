import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_l from '../images/logo-light.png';
import logo_d from '../images/logo-dark.png';
import Image from 'react-bootstrap/Image';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";


const NavbarComp = ({ theme, setTheme }) => {
    return (
        <Navbar collapseOnSelect expand="lg" variant={!theme ? "dark" : "light"}>
            <Container className='me-auto'>
                <Navbar.Brand href="#home">
                    <Image src={theme ? logo_l : logo_d} style={{ width: "30%", paddingRight: "10px" }} alt="logo" />
                    <p className='d-inline p-3 fs-3 '>RoboMed</p>
                    <button className='iconBtn' onClick={() => setTheme(s => !s)}>{theme ? <IoMoonOutline className='fs-5' /> : <IoSunnyOutline className='fs-5' />}</button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant="pills" className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#registrationForm">Registration Form</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#service">Service</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComp;