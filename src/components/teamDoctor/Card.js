import React from 'react';
import Image from 'react-bootstrap/Image';

const Card = ({img}) => {
    return (
        <div className='rounded p-3 mb-4' style={{backgroundColor:"#BCBCBC1A"}}>
            <Image src={img} fluid/>
            <h3 className='pt-4'>Dr. Johnaton Leo</h3>
            <p className='text-primary pb-3'>Orthopedis</p>
        </div>
    );
};

export default Card;