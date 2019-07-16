import React, { Component } from 'react';
import { Code, Cog, CogOutline, Pen, Laptop, Tool } from '../../../svg/Workshops'
 import { Papyrus, PapyrusOutline, QuestionMark, MessageCloud, MessageFolder } from '../../../svg/Contact'
import {confCard,Beer,Networking,University,UniversityOutline} from '../../../svg/Events'
import {Coffee,Idea,IdeaOutline,Smile,Reading} from '../../../svg/StellasFacts'
import { Container, Col, Row } from 'react-bootstrap';
import { Button } from '../../parts/Buttons'
import anime from 'animejs/lib/anime.es.js';
class WorkshopHome extends Component {

    constructor()
    {
        super();
        this.state ={
            'TitleSvg':Code,
            'Title':'Workshops',
            'paragraph':<p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'</p>,
            'topLeft':Papyrus,
            'topRight':QuestionMark,
            'center':MessageCloud,
            'botLeft':PapyrusOutline,
            'botRight':MessageFolder,

    }
    }
    animate = () => {
     
        var rotateAnimation = (classtoAnimate) => {
            anime({
                targets: classtoAnimate,
                rotate: {
                    value: 360,
                    duration: 15000
                },
                loop:true,
                easing: 'linear'
            });
        };

        anime({
            targets: '.svgFam__topLeft',
            translateX: {
                value: -20
            },
            translateY: {
                value: -100
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
                value: 25
            },
            translateY: {
                value: -150
            },
            rotateX: {
                value: 180,
            },
            rotate:{
                rotate: {
                    value: 360,
                    duration: 2000,
                    loop:true
                },
            },
            complete: function () {
                rotateAnimation('.svgFam__topRight')
            },
            easing: 'linear'
        });

        anime({
            targets: '.svgFam__botRight',
            translateX: {
                value: '40%'
            },
            translateY: {
                value: 50
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
                value: 50
            },
            rotateX: {
                value: 180,
            },
            complete: function() {
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
            easing: 'linear'
        })
    }

    componentDidMount() {

        this.animate();
       
      }



    render() {
        return (
            <Container id='MainNav' fluid='true'>
                <Row>
                <Col lg={{span:6,order:'last'}}  className='svgFam col-xs-pull-12'>
                        <this.state.topLeft />
                        <this.state.botLeft  />
                        <this.state.center />
                        <this.state.topRight />
                        <this.state.botRight />
                    </Col>
                    <Col lg={{span:6,order:'first'}} className='workshopCon col-xs-push-12'>
                        <this.state.TitleSvg className='workshopCon__svg' />
                        <span className='workshopCon__Title'>{this.state.Title}</span>
                        {this.state.paragraph} {this.state.translateDivide}
                        <Button group='workshop' buttonText='Learn More!' />
                    </Col>
                    
                </Row>
            </Container>
        );
    }
}

export default WorkshopHome;