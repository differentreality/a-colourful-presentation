import React, { Component } from 'react';
import { Button } from '../parts/Buttons'
import { Container, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import { Heart, Tool, Git, Version, Cog, MVC, Ruby, HtmlTag } from '../../svg/topics/topicsSvg';
class Topics extends Component {

    constructor(props) {
        super();
        var array = (props.group)==='workshop'?this.wshopContent : this.talkContent;
        this.state={
            chosenArray : array
        };
    }

    wshopContent = [
        {
            primarySvg: Git,
            Title: 'Git',
            paragraph: 'We learn about versioning and contributing',
            svg1: Heart,
            svg1Text: 'Contributing',
            svg2: Tool,
            svg2Text: 'Maintenance',
            svg3: Version,
            svg3Text: 'Versioning'
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
            svg3Text: 'Framework'
        }
    ]

    talkContent = [
        {
            primarySvg: Git,
            Title: 'Git',
            paragraph: 'We learn about versioning and contributing',
            svg1: Heart,
            svg1Text: 'Contributing',
            svg2: Tool,
            svg2Text: 'Maintenance',
            svg3: Version,
            svg3Text: 'Versioning'
        },
        {
            primarySvg: Ruby,
            Title: 'Ruby On Rails',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
            svg2: MVC,
            svg1: HtmlTag,
            svg1Text: 'Web App',
            svg2Text: 'M.V.C.',
            svg3: Cog,
            svg3Text: 'Framework'
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

        svgAnimatio2 = anime({

            complete:()=>
                anime({targets: '.keywordsCont__divider',
                scale:0.7,
                duration: 400,
                easing: 'linear'})
            })
    


    render() {
        return <Container fluid='true' className='fade-in'>




            <h3 className={'topicsCont__Category-' + this.props.group}>Workshops</h3>

            {this.state.chosenArray.map((event) => <Row className='topic'>
                <Col lg={{ span: '6' }} className='topicsCont'>
                    <event.primarySvg className='topicsCont__Svg' />
                    <h2 className={'topicsCont__Title-' + this.props.group}>{event.Title}</h2>
                    <p>{event.paragraph} </p>
                    <Button group={this.props.group} buttonText={'Browse '+event.Title} />
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