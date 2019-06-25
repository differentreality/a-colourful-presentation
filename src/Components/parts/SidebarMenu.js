import React from 'react';
import { Col } from 'react-bootstrap';



const SidebarMenu = () => {
    return <Col className='sideMenu' xs={1}>
        <Col className='inBorder' xs={12}>
            <h5>LOGO</h5>
            <a className='vertical-text' href="https://www.github.com/"> MENU </a>
        </Col>

        <Col className='outofBorder' xs={12}>
            <div className='colorName'>
                <span >Color Name</span>
            </div>
        </Col>
    </Col>
}

export default SidebarMenu;