import React, { Component } from 'react';
import { Code, Cog, CogOutline, Pen, Laptop, Tool } from '../../../svg/Workshops'
// import { Papyrus, PapyrusOutline, QuestionMark, MessageCloud, MessageFolder } from '../../../svg/Contact'
// import {confCard,Beer,Networking,NetworkingOutline} from '../../../svg/Events'
import { Container, Col, Row } from 'react-bootstrap';
import { Button } from '../../parts/Buttons'
import anime from 'animejs/lib/anime.es.js';
import { thisExpression } from '@babel/types';
class WorkshopHome extends Component {

    constructor()
    {
        super();
        this.state ={
            'TitleSvg':Code,
            'Title':'Workshops',
            'paragraph':<p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'</p>,
            'topLeft':Cog,
            'topRight':Pen,
            'center':Laptop,
            'botLeft':CogOutline,
            'botRight':Tool
    }
    }
    animate = () => {
        var rotateAnimation = (classtoAnimate) => {
            anime({
                targets: classtoAnimate,
                rotate: {
                    value: 360,
                    duration: 15000,
                    loop: true,
                },
                loop: true,
                easing: 'linear'
            });
        };

        anime({
            targets: '.svgFam__topLeft',
            translateX: {
                value: -250
            },
            translateY: {
                value: -150
            },
            rotateX: {
                value: 180,
            },
            complete: function () {
                rotateAnimation('.svgFam__topLeft')
            },
            easing: 'linear'
        });

        anime({
            targets: '.svgFam__topRight',
            translateX: {
                value: 250
            },
            translateY: {
                value: -150
            },
            rotateX: {
                value: 180,
            },
            complete: function () {
                rotateAnimation('.svgFam__topRight')
            },
            easing: 'linear'
        });

        anime({
            targets: '.svgFam__botRight',
            translateX: {
                value: 400
            },
            translateY: {
                value: 250
            },
            rotateX: {
                value: 180,
            },
            complete: function () {
                rotateAnimation('.svgFam__botRight')
            },
            easing: 'linear'
        });

        anime({
            targets: '.svgFam__botLeft',
            translateX: {
                value: -200
            },
            translateY: {
                value: 250
            },
            rotateX: {
                value: 180,
            },
            complete: function () {
                rotateAnimation('.svgFam__botLeft')
            },
            easing: 'linear'
        });

        anime({
            targets: '.svgFam__center',
            translateY: 50,
            loop: true,
            direction: 'alternate',
            duration: 2500,
            easing: 'linear',

        })
    }

    componentDidMount() {
        this.animate();
    }



    render() {
        return (
            <Container fluid='true'>
                <Row>
                    <Col md='6' className='workshopCon'>
                        <this.state.TitleSvg className='workshopCon__svg' />
                        <span className='workshopCon__Title'>{this.state.Title}</span>
                        {this.state.paragraph}
                        <Button group='workshop' buttonText='Learn More!' />
                    </Col>
                    <Col md='6' className='svgFam'>
                        <this.state.topLeft />
                        <this.state.botLeft  />
                        <this.state.center />
                        <this.state.topRight />
                        <this.state.botRight />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WorkshopHome;