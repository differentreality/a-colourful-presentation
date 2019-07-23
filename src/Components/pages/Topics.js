import history from '../../history'
import React, { Component } from 'react';
import { Button } from '../parts/Buttons'
import { Container, Col, Row } from 'react-bootstrap';
import { withRouter, NavLink } from 'react-router-dom';

class Topics extends Component{

    constructor()
    {
        super();
    }


    render()
    {
        return <Container fluid='true'>
            <Col md='6' className='topicsCont'>
            <h3 className='topicsCont__Category'>Workshops</h3>
            <h1 classname='topicsCont__Title'>Git</h1>
            <Button group='workshop' buttonText='Git Workshops' />
            </Col>
            <Col md='6'>
                <h4>keywords</h4>
            </Col>
        </Container>
    }
}

export default withRouter(Topics);