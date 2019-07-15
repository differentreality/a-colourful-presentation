import React, { Component } from 'react';
import { Code, Cog, CogOutline, Pen, Laptop, Tool } from '../../../svg/Workshops'
 import { Papyrus, PapyrusOutline, QuestionMark, MessageCloud, MessageFolder } from '../../../svg/Contact'
import {confCard,Beer,Networking,University,UniversityOutline} from '../../../svg/Events'
import {Coffee,Idea,IdeaOutline,Smile,Reading} from '../../../svg/StellasFacts'
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
            'topLeft':University,
            'topRight':confCard,
            'center':Networking,
            'botLeft':UniversityOutline,
            'botRight':Beer,
            'translateDivide':1
    }
    }
    animate = () => {
        var rotateAnimation = (classtoAnimate) => {
            anime({
                targets: classtoAnimate,
                rotate: {
                    value: 360,
                    duration: 1000
                },
                loop: true,
                easing: 'linear'
            });
        };

        anime({
            targets: '.svgFam__topLeft',
            translateX: {
                value: -250/this.state.translateDivide
            },
            translateY: {
                value: -150/this.state.translateDivide
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
                value: 250/this.state.translateDivide
            },
            translateY: {
                value: -150/this.state.translateDivide
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
                value: 400/this.state.translateDivide
            },
            translateY: {
                value: 250/this.state.translateDivide
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
                value: -200/(this.state.translateDivide-(this.state.translateDivide> 2 ? 1 : 0)) //den feugei arketa xoris to -1
            },
            translateY: {
                value: 250/this.state.translateDivide
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
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        this.animate();
      }

    componentDidUpdate()
    {
        this.animate.restart();
    }
    
    
    
      resize() {
        window.innerWidth <= 1300 ? this.setState({ 'translateDivide': 3 }) : this.setState({ 'translateDivide': 1})
      }



    render() {
        return (
            <Container fluid='true'>
                <Row>
                    <Col md='6' className='workshopCon'>
                        <this.state.TitleSvg className='workshopCon__svg' />
                        <span className='workshopCon__Title'>{this.state.Title}</span>
                        {this.state.paragraph} {this.state.translateDivide}
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