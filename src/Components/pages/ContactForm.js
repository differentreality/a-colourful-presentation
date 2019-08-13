import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import store from '../../store'
import { SingleBreadCrumbs } from '../parts/BreadCrumbs'
import anime from 'animejs/lib/anime.es.js';


export default class ContactForm extends React.Component {
    componentDidMount() {
        this.updateStore();
        this.animate();
    }

    updateStore = () => {

        store.dispatch(
            { type: 'change_Color', payload: { color: 'contact' } }
        );
    }

    animate = () =>anime({
        targets:'.animatedText',
        translateY:[-100,400],
        duration:4000,
        rotate:(-30),
        color:'red',
        complete:()=>anime({
            targets:'.animatedText',
            translateY:[400,350],
                duration:4000,
                loop:true,
                easing:'linear',
                direction: 'alternate',
        }),
    })

    render() {
        return (
            <Container className='fade-in' fluid='true'>
                <div >
                    <Row>
                        <Col xs='12' lg='4'>
                            <SingleBreadCrumbs group='contact' parent='contact' url='/contact' title='contact form' />
                            <h1 className='animatedText'>Hello there!</h1>
                        </Col>
                        <Col xs='12' lg={{ span: 6 }}>
                            <form className='contactForm' action="/action" noValidate>
                                <h1 className='contactForm__title'>The Contact Form</h1>
                                
                                <p className='contactForm__about'>Got a question or interested in booking a workshop for your community? Send me 
                                message and you will receive an answer as soon as possible!</p>
                                <h3 className='contactForm__subtitle'>Get to know each other</h3>

                                <div className='inputBox-name'>
                                    <label htmlFor="name">Name</label>
                                    <input className='inputText' type="text" id="name" name="name" placeholder="John Smithson" required/>
                                </div>

                                <div className='inputBox-mail'>
                                    <label htmlFor="mailadress">E-mail Address</label>
                                    <input className='inputText' type="text" id="mailadress" name="email" placeholder="you@mail.me" required/>
                                </div>

                                <h3 className='contactForm__subtitle'>Your Message</h3>

                                <div className='inputBox'>
                                    <label for="title">Title</label>
                                    <input className='inputText' type="text" id="title" name="title" placeholder="Book a git workshop in Thessaloniki" required/>
                                </div>

                                <label for="message">Message</label>
                                <textarea id="subject" name="message" placeholder="Write something.." required></textarea>
                                <input className='contactForm__submit' type="submit" value="Submit" />
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}