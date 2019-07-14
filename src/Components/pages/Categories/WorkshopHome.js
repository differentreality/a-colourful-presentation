import React, { Component } from 'react';
import {Code,Cog,CogOutline,Pen,Laptop,Tool} from '../../../svg/Workshops'
import { Container, Col, Row } from 'react-bootstrap';
import {Button} from '../../parts/Buttons'
class WorkshopHome extends Component
{
    



    render()
    {
        return(
            <Container fluid='true'>
                <Row>
                    <Col md='6' className='workshopCon'>
                        <Code className='workshopCon__svg'/>
                        <span className='workshopCon__Title'>Workshops</span>
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                        </p>
                        <Button group='workshop' buttonText='Learn More!'/>
                    </Col>
                    <Col md='6' className='svgFam'>
                        <Cog  className='svgFam__topLeft'/>
                        <CogOutline  className='svgFam__botLeft'/>
                        <Laptop  className='svgFam__center'/>
                        <Pen  className='svgFam__topRight'/>
                        <Tool  className='svgFam__botRight'/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WorkshopHome;