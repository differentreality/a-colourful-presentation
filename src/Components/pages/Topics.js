import React, { Component } from 'react';
import { Button } from '../parts/Buttons'
import { Container, Col, Row } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import store from '../../store'
import { BreadCrumbsLevel1 } from '../parts/BreadCrumbs'
class Topics extends Component {

    componentDidMount() {
        this.updateStore();
    }

    updateStore = () => {
        store.dispatch(
            { type: 'change_Color', payload: { color: this.props.group } }
        );
    }

    svgAnimation = anime({

        complete: () =>
            anime({
                targets: '.keywordsSVG__Svg',
                translateY: -20,
                loop: true,
                direction: 'alternate',
                duration: 2500,
                easing: 'linear'
            })
    })

    render() {
        return <Container fluid='true' className='fade-in'>
            <BreadCrumbsLevel1 group={this.props.group} />
            {this.props.data.map((technology, id) => <Row key={id} className='topic'>
                <Col lg={{ span: '6' }} className='topicsCont'>
                    <technology.primarySvg className='topicsCont__Svg' />
                    <h2 className={'topicsCont__Title-' + this.props.group}>{technology.Title}</h2>
                    <p>{technology.paragraph} </p>
                    <Link to={technology.link}><Button group={this.props.group} buttonText={technology.buttonText} /></Link>
                </Col>
                <Col lg={{ span: '6' }} className='keywordsCont'>
                    <h4 className={'keywordsCont__keywordText-' + this.props.group}>keywords</h4>
                    <div className={'keywordsCont__divider keywordsCont__divider-' + this.props.group} />
                    <Row className='keywordsSVGCont'>
                        <Col className='keywordsSVG' xs={{ span: 4 }} md={{ span: 4, offset: 0 }} xl={{ span: 3, offset: 2 }}>
                            <technology.svg1 className='keywordsSVG__Svg' />
                            <span className='keywordsSVG__SvgTitle'>{technology.svg1Text}</span>
                        </Col>
                        <Col className='keywordsSVG' xs={{ span: 4 }} md={{ span: 4, offset: 0 }} xl={{ span: 3, offset: 0 }} >
                            <technology.svg2 className='keywordsSVG__Svg' />
                            <span className='keywordsSVG__SvgTitle'>{technology.svg2Text}</span>
                        </Col>
                        <Col className='keywordsSVG' xs={{ span: 4 }} sm={{ span: 4, offset: 0 }} xl={{ span: 3, offset: 0 }} >
                            <technology.svg3 className='keywordsSVG__Svg' />
                            <span className='keywordsSVG__SvgTitle'>{technology.svg3Text}</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            )}




        </Container>
    }
}

export default withRouter(Topics);