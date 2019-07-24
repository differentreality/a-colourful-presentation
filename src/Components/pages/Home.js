import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Container, Col, Row } from 'react-bootstrap';
import { Button } from '../../Components/parts/Buttons';
import CallToActionSvg from '../../svg/CallToActionSvg';
import history from '../../history'
class Home extends Component {

    componentDidMount() {
        this.scrollToChangePage=this.scrollToChangePage.bind(this)
        window.addEventListener("wheel",this.scrollToChangePage);
        this.entranceAnimation();
        
    }

    componentWillUnmount()
    {
        window.removeEventListener('wheel', this.scrollToChangePage);
    }

    scrollToChangePage = (e) => {
        if (e.deltaY > 0) {            
            var animation =anime({
                targets: '#Content',
                opacity: 0,
                duration: 500,
            })
            history.push('/workshops');
            //eksafanisi content,ksanaemfanisi epomenou
            animation.reverse();
        }
    }

    entranceAnimation =() =>{
        var textWrapper = document.querySelector('.leftContent__title');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline()
        .add({
          targets: '.leftContent__title .letter',
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: function(el, i) {
            return 150 * (i+1)
          }
        })
      }
    render() {
        return (
            <Container id='homePage' fluid='true' className='home'>
                <Row>
                    <Col className='leftContent' md='6'>
                        <h1 className='leftContent__title'>Stella Rouzi</h1>
                        <h3 className='leftContent__subtitle'>Event Organizer
                    <br />
                            Ruby on Rails Dev
                    <br />
                            GSoC Mentor
                    </h3>
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
                        <span className='home__scrollAction'>Scroll and Roll!</span> <CallToActionSvg />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;