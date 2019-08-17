import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import store from '../../store'
import { SingleBreadCrumbs } from '../parts/BreadCrumbs'
import anime from 'animejs/lib/anime.es.js';
import toastr from 'toastr'
import * as emailjs from 'emailjs-com'


export default class ContactForm extends React.Component {
    constructor(props) {
      super(props)

      this.state =  {
        name: '',
        email: '',
        subject: '',
        message: ''
      }

    }

    handleInputChange (event) {
      event.preventDefault()
      const target = event.target
      const name = target.name
      const value = target.value

      this.setState({[name]: value})
    }

    handleSubmit(event) {
      event.preventDefault();

      var templateParams = {
        "to_name": process.env.REACT_APP_TO_EMAIL,
        "from_name": this.state.name,
        "subject": this.state.subject,
        "message_html": this.state.message,
      }

      emailjs.send("gmail", "template_fg92o5s8", templateParams, process.env.REACT_APP_EMAILJS_KEY )
        .then( function(resonse) {
          toastr.success('Sent successfully!')
        })

      this.setState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }

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
                            <form className='contactForm' onSubmit={this.handleSubmit} noValidate>
                                <h1 className='contactForm__title'>The Contact Form</h1>

                                <p className='contactForm__about'>Got a question or interested in booking a workshop for your community? Send me
                                message and you will receive an answer as soon as possible!</p>
                                <h3 className='contactForm__subtitle'>Get to know each other</h3>

                                <div className='inputBox-name'>
                                    <label xfor="name">Name</label>
                                    <input className='inputText' type="text" id="name" name="name" placeholder="John Smithson" onChange={this.handleInputChange.bind(this)} value={this.state.name} />
                                </div>

                                <div className='inputBox-mail'>
                                    <label htmlFor="mailadress">E-mail Address</label>
                                    <input className='inputText' type="text" id="mailadress" name="email" placeholder="you@mail.me" onChange={this.handleInputChange.bind(this)} value={this.state.email}/>
                                </div>

                                <h3 className='contactForm__subtitle'>Your Message</h3>

                                <div className='inputBox'>
                                    <label xfor="subject">Title</label>
                                    <input className='inputText' type="text" id="subject" name="subject" placeholder="Book a git workshop in Thessaloniki" onChange={this.handleInputChange.bind(this)} value={this.state.subject} required/>
                                </div>

                                <label xfor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Write something.." onChange={this.handleInputChange.bind(this)} value={this.state.message} required></textarea>
                                <input className='contactForm__submit' type="submit" value="Submit" onClick={this.handleSubmit.bind(this)}/>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}
