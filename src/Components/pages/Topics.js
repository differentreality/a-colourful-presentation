import React, { Component } from 'react';
import { Button } from '../parts/Buttons'
import { Container, Col, Row } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import store from '../../store'
import { Heart, Tool, Git, Version, Cog, MVC, Ruby, HtmlTag ,Gsoc,Globe,Student,OpenSource } from '../../svg/topics/topicsSvg';
import {BreadCrumbsLevel1} from '../parts/BreadCrumbs'
class Topics extends Component {

    constructor(props) {
        super();
        var array = (props.group)==='workshop'?this.wshopContent : this.talkContent;
        this.state={
            chosenArray : array
        };
    }

    componentDidMount()
    {
        this.updateStore();
    }

    updateStore =() =>
    {
        store.dispatch(
            {type:'change_Color',payload:{color:this.props.group}}
        );
    }

    wshopContent = [
        {
            primarySvg: Git,
            Title: 'Git',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
            svg1: Heart,
            svg1Text: 'Contributing',
            svg2: Tool,
            svg2Text: 'Maintenance',
            svg3: Version,
            svg3Text: 'Versioning',
            buttonText:'Browse Git',
            link:'/workshops/topics/git'
        },
        {
            primarySvg: Ruby,
            Title: 'Ruby On Rails',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
            svg1: MVC,
            svg1Text: 'M.V.C.',
            svg2: HtmlTag,
            svg2Text: 'Web App',
            svg3: Cog,
            svg3Text: 'Framework',
            buttonText:'Browse Ruby on Rails',
            link:'/workshops/topics/ror'
        }
    ]

    talkContent = [
        {
            primarySvg: Gsoc,
            Title: 'Google Summer of Code',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
            svg1: OpenSource,
            svg1Text: 'Open Source Community',
            svg2: Student,
            svg2Text: 'For Students',
            svg3: Globe,
            svg3Text: 'Remote',
            buttonText:'Browse GSoC',
            link:'/talks/topics/gsoc'
        }
    ]

    

    svgAnimation = anime({

        complete:()=>
            anime({targets: '.keywordsSVG__Svg',
            translateY: -20,
            loop: true,
            direction: 'alternate',
            duration: 2500,
            easing: 'linear'})
        })

        
    


    render() {
        return <Container fluid='true' className='fade-in'>
               <BreadCrumbsLevel1 group={this.props.group}/>


            {this.state.chosenArray.map((event,id) => <Row key={id} className='topic'>
                <Col lg={{ span: '6' }} className='topicsCont'>
                    <event.primarySvg className='topicsCont__Svg' />
                    <h2 className={'topicsCont__Title-' + this.props.group}>{event.Title}</h2>
                    <p>{event.paragraph} </p>
                    <Link to={event.link}><Button group={this.props.group} buttonText={event.buttonText} /></Link>
                </Col>
                <Col lg={{ span: '6' }} className='keywordsCont'>
                    <h4 className={'keywordsCont__keywordText-' + this.props.group}>keywords</h4>
                    <div className={'keywordsCont__divider keywordsCont__divider-' + this.props.group} />
                    <Row className='keywordsSVGCont'>
                        <Col className='keywordsSVG' xs={{ span: 4 }} md={{ span: 4, offset: 0 }} xl={{ span: 3, offset: 2 }}>
                            <event.svg1 className='keywordsSVG__Svg' />
                            <span className='keywordsSVG__SvgTitle'>{event.svg1Text}</span>
                        </Col>
                        <Col className='keywordsSVG' xs={{ span: 4 }} md={{ span: 4, offset: 0 }} xl={{ span: 3, offset: 0 }} >
                            <event.svg2 className='keywordsSVG__Svg' />
                            <span className='keywordsSVG__SvgTitle'>{event.svg2Text}</span>
                        </Col>
                        <Col className='keywordsSVG' xs={{ span: 4 }} sm={{ span: 4, offset: 0 }} xl={{ span: 3, offset: 0 }} >
                            <event.svg3 className='keywordsSVG__Svg' />
                            <span className='keywordsSVG__SvgTitle'>{event.svg3Text}</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            )}

          


        </Container>
    }
}

export default withRouter(Topics);