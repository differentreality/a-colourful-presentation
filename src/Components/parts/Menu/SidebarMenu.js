import React from 'react';
import { Col } from 'react-bootstrap';

var colours = [
    {
        'id' : 'stellafacts',
        'name' : 'Grape',
        'code' : '#9B4EA1'
    },
    {
        'id' : 'contact',
        'name' : 'Plum',
        'code' : '#4e4376'
    },
    {
        'id' : 'talks',
        'name' : 'Pomegranate',
        'code' : '#FF0844'
    },
    {
        'id' : 'workshops',
        'name' : 'Blueberry',
        'code' : '#9B4EA1'
    },
    {
        'id' : 'events',
        'name' : 'Grapefruit',
        'code' : '#FF9A7D'
    }
]

//TODO: analoga me to router,allakse xroma & periexomeno
const SidebarMenu = () => {
    return <Col className='sideMenu' xs={1}>
        <Col className='sideMenu__insideBorderContent' xs={12}>
            <h5>LOGO</h5>
            <a className='sideMenu__insideBorderContent__vertical-text' href="https://www.github.com/"> MENU</a>
        </Col>

        <Col className='sideMenu__outofBorderContent sideMenu__outofBorderContent-stella' xs={12}>
                <div className='sideMenu__outofBorderContent__colourBubble-stella'/>
                <span className='sideMenu__outofBorderContent__colourCode'>{colours[0].code}</span>
                <span className='sideMenu__outofBorderContent__colourName'>{colours[0].name}</span>
        </Col>
    </Col>
}

export default SidebarMenu;