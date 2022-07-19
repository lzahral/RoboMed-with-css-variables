import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card';
import Dr_2 from '../../images/Dr-2.png'
import Dr_3 from '../../images/Dr-3.png'
import Dr_4 from '../../images/Dr-4.png'

const Team = () => {
    const doctorsImg = [Dr_2,Dr_3,Dr_4]
    return (
        <div className='my-5 text-center'>
            <h6 className='text-primary'>Team Doctor</h6>
            <h4>Meet Our Specialist</h4>
            <Row className='my-5' xs={1} md={2} lg={3}>
                {doctorsImg.map(img=>(<Col  key={img}><Card  img={img}/></Col>))}
                {doctorsImg.map(img=>(<Col  key={img}><Card  img={img}/></Col>))}
            </Row>
        </div>
    );
};

export default Team;