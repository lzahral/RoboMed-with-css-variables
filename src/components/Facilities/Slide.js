import React from 'react';
import { BsDot } from "react-icons/bs";
import FR from "../../images/FR.png";
import "./SlidTop.css"
import Image from 'react-bootstrap/Image';

const Slide = ({ color }) => {

    const bg = `bg-${color ? "primary" : "secondary"} slidTop`;
    const tag = `${color ? "text-primary bg-text" : "bg"} `;
    return (
        <div className=' position-relative rounded border p-3 pt-5 ' >
            <div className={bg}></div>
            <h5>Mankind Medicare <Image src={FR} /></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor ornare gravida non arcu. Pellentesque tempor et dictum ut</p>
            <span className={tag}><BsDot className='fs-3' />{color ? "Hospital" : "clinic"}</span>
        </div>
    );
};

export default Slide;