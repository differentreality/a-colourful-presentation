import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Container, Col, Row } from 'react-bootstrap';
import { Button } from '../../Components/parts/Buttons';
import { CallToActionSvg } from '../../svg/CallToActionSvg';
import history from '../../history'
import { directive } from '@babel/types';
class Home extends Component {

    componentDidMount() {
        this.scrollToChangePage = this.scrollToChangePage.bind(this)
        window.addEventListener("wheel", this.scrollToChangePage);
        window.addEventListener('touchstart', this.startTouch, false);
        window.addEventListener('touchmove', this.swipeToChangePage, false);
        this.entranceAnimation();
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.scrollToChangePage);
        window.removeEventListener('touchstart', this.startTouch, true);
        window.removeEventListener('touchmove', this.swipeToChangePage, true);
    }

    initialX = null;
    startTouch = (e) => {
        this.initialX = e.touches[0].clientX;
    };
    swipeToChangePage = (e) => {
        if (this.initialX === null) {
            return;
        }
        var currentX = e.touches[0].clientX;
        var diffX = this.initialX - currentX;
        // sliding horizontally
        if (diffX > 0) {
            // swiped left
            this.changePage();
        }
        this.initialX = null;
        e.preventDefault();
    };

    scrollToChangePage = (e) => {
        if (e.deltaY > 0) {
            //scroll down
            this.changePage();
        }
    }

    changePage = () => {
        var animation = anime({
            targets: '#Content',
            opacity: 0,
            duration: 500,
        })
        history.push('/workshops');
        //eksafanisi content,ksanaemfanisi epomenou
        animation.reverse();
    }

    entranceAnimation = () => {
        var textWrapper = document.querySelector('.leftContent__title');
        // eslint-disable-next-line
        textWrapper.innerHTML = textWrapper.textContent.replace((/([^\x00-\x80]|\w)/g), "<span class='letter'>$&</span>");

        anime.timeline()
            .add({
                targets: '.leftContent__title .letter',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: function (el, i) {
                    return 150 * (i + 1)
                }
            })
            .add({
                targets: '.leftContent__subtitle-first',
                opacity: [0, 1],
                easing: "easeInOutQuad"
            })
            .add({
                targets: '.leftContent__subtitle-second',
                opacity: [0, 1],
                easing: "easeInOutQuad"
            })
            .add({
                targets: '.leftContent__subtitle-last',
                opacity: [0, 1],
                easing: "easeInOutQuad"
            })
            .add({
                targets: '.rightContent',
                translateX: -1000,
                duration: 2000,
                easing: 'easeInOutSine',
                scale:[.05,1],
            })
            .add({
                targets:'.homeCTA',
                opacity: [0, 1],
                duration:1000
            })
    }



    render() {
        return (
            <Container id='homePage' fluid='true' className='home'>
                <Row>
                    <Col className='leftContent' md='6'>
                        <h1 className='leftContent__title'>Stella Rouzi</h1>
                        <h3 className='leftContent__subtitle leftContent__subtitle-first'>Event Organizer</h3>
                        <h3 className='leftContent__subtitle leftContent__subtitle-second'>Ruby on Rails Dev</h3>
                        <h3 className='leftContent__subtitle leftContent__subtitle-last'>GSoC Mentor</h3>

                    </Col>
                    <Col className='rightContent' md='6'>
                        <p className='rightContent__paragraph'>
                            Meeting new people, sharing ideas,
                        <br />
                            exploring the world,
                        <br />
                            contributing!
                    </p>
                    </Col>
                </Row>
                <Row className='homeCTA'>
                    <Col md='6'>
                        <span className='home__latest'>Latest</span>
                        <Button group='workshop' buttonText='Git 101' />
                    </Col>

                    <Col className='scrollGuide' md='6'>
                        <span className='home__scrollAction'>Try Swiping or Scrolling!</span> <CallToActionSvg />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;