import React from 'react';
import { Col } from 'react-bootstrap';



const MobileHeader = () => {
    return <Col id='mobileHeader' xs={12}>
        <Col xs={8} id='mobileHeader-bordered'>
            <Col xs={2}>
                <a href='https://www.github.com'>MENU</a>
            </Col>
        </Col>
    </Col>
}

export default MobileHeader;