import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import stella from '../../Photos/stella.jpg'
import miranda from '../../Photos/miranda.jpg'
import osem from '../../Photos/osem.jpg'
import spaghetti from '../../Photos/spaghetti.png'
import { Rails, Git, Ruby } from '../../svg/AboutSvg';
import { Reading } from '../../svg/StellasFacts';
import anime from 'animejs/lib/anime.es.js';
import { SingleBreadCrumbs } from '../parts/BreadCrumbs'
import FsLightbox from 'fslightbox-react';


const images=[stella,miranda]

const TechBooks = [
    {
        author: 'Jorge Bucay',
        title: 'Let me tell you a story'
    }
]

const SIbooks = [
    {
        author: 'Jorge Bucay',
        title: 'Let me tell you a story'
    },
    {
      author: 'Grant Cardone',
      title: 'Be obsessed or be average'
    },
    {
      author: 'Tolle Eckhart',
      title: 'The power of NOW'
    }
]


class About extends Component {

    state = { toggler: false, slide: 0 }

     openLightboxOnSlide = (number) => {
        this.setState(prevState =>
            ({
                toggler: !prevState.toggler,
                slide: number,
            })
        );
    }

    componentDidMount()
    {
        this.technologyAnimation();
    }

    technologyAnimation=()=>
    {
        anime({
            targets:['.primaryTechnologies svg','.aboutBooksSvg svg'],
            translateY:50,
            loop:true,
            duration:5000,
            direction: 'alternate',
            easing:    'easeInOutSine',
            delay: function (el, i) {
                return 350 * (i + 1)
            }
        })

        anime({
            targets:'.titleContainer',
            opacity:[.5,1],
            loop:true,
            duration:2000,
            direction: 'alternate',
            easing:    'easeInOutSine',

        })
    }


render() {
    const toggler = this.state.toggler;
    const slide = this.state.slide;
        return <Container className='About fade-in' fluid='true'>
            <SingleBreadCrumbs group="stella" parent="Stella's Facts" url='/stellas-facts' title='about'/>
            <Row>
                <Col md='6' className='PhotoContainer' >
                    <div className='PhotoContainer__stella'>
                        <img alt='a selfie of mine!' className='PhotoContainer__stella__image' onClick={()=>this.openLightboxOnSlide(1)} src={stella} />
                        <h4>That's me!</h4>
                    </div>

                    <div className='PhotoContainer__miranda'>
                        <img alt='my blonde dog,Miranda,posing!' className='PhotoContainer__miranda__image' src={miranda} onClick={()=>this.openLightboxOnSlide(2)} />
                        <h4>...and that's Miranda!</h4>
                    </div>

                </Col>
                <Col md='6'>
                    <p className='Introduction'>
                        I am a passionate perfectionist that loves travelling, substantial interaction and communicating with people around the globe!
                    </p>
                </Col>
            </Row>

            <Row className='postRow'>
                <p className='superParagraph'>
                    I am a passionate perfectionist that loves <span className='keyword'>travelling</span>, substantial interaction and <span className='keyword'>communicating</span> with people around the globe!
            </p>
            </Row>

            <Row className='postRow primaryTechnologies'>
                <div className='titleContainer'>
                    <h1>Technologies</h1>
                </div>
                <Col xs='12'>
                    <Rails />
                    <Git />
                    <Ruby />
                </Col>
            </Row>

            <Row className='postRow osemRow'>
                <Col md={{ span: 6, offset: 6 }} className='osemContainer'>
                    <h1>My experience with GSoC</h1>
                    <img alt="osem's logo with a mouse smiling with closed eyes, and scratching its belly" src={osem} />
                </Col>
                <Col md='6'>
                    <p className='aboutOsem'>
                        I am one of the contributors for OSEM - the Open Source Event Manager, a favorite <span className='keyword'>Ruby on Rails</span> web application that manages conferences, oriented in <span className='keyword'>open source</span> conference.
                    </p>
                </Col>
            </Row>

            <Row className='postRow'>
                <Col xs='12' className='sectionTitle'>
                    <h1>Okay, let's talk about free time.</h1>
                    <div className='divider' />
                </Col>
            </Row>

            <Row className='postRow' >
                <Col className='aboutBooksSvg' md={{ span: 5, offset: 1 }} xs='12'>
                    <Reading />
                </Col>
                <Col xs='12' md='6' className='aboutBooks'>
                    <p>The fire is cracking and  no such other moment should be appreciated without a good <span className='keyword'>book</span>.
                     I admire the complexity of the human <span className='keyword'>brain functionality</span> which is the primary reason I enjoy exploring the depths of <span className='keyword'>human psychology</span>. But I also am keen on  - a quite good - variety of genres.</p>
                </Col>
            </Row>

            {(this.props.mobile)?'':
            <Row className='postRow'>
                <Col xs='12' className='sectionTitle'>
                    <h1>Book Suggestions</h1>
                    <div className='divider' />
                </Col>
                <Col className='bookSuggestion-left' xs='12' md='6'>
                    <h2>Technology</h2>
                    <ul className='bookList'>
                        {TechBooks.map((book, id) => <li key={id}> <span className='bookList__author'>{book.author}</span> - <span className='bookList__title'> {book.title}</span></li>)}
                    </ul>
                </Col>
                <Col className='bookSuggestion-right' xs='12' md='6'>
                    <h2>Self-Improvement</h2>
                    <ul className='bookList'>
                        {SIbooks.map((book, id) => <li key={id}> <span className='bookList__author'>{book.author}</span> - <span className='bookList__title'> {book.title}</span></li>)}
                    </ul>
                </Col>
            </Row>}

            <Row className='postRow cooking'>
                <Col className='' xs='12'  md='6'>
                    <img src={spaghetti} alt='a tasty spaghetti plate with sauce and vegetables' />

                </Col>
                <Col className='cooking__info' xs={{ span: 12 }} md='6'>
                    <h3 >Cooking</h3>
                    <p>Food is passion. And I am all for passion. And good food.<br />I am open to new culinary adventures and I am a firm believer that food should be shared.</p>
                </Col>
            </Row>

            <Row className='postRow contactStella'>
                <Col xs='12'>
                <p className='contactStella__paragraph'>That's about it, share your thoughts using the <span className='keyword'><a href='/#/contact/form'>contact form</a></span> or say hi directly,
                at <span className='keyword'><a href='mailto:stellarouzi@gmail.com'>stellarouzi@gmail.com</a></span>
                </p>
                </Col>
            </Row>

            <FsLightbox
                    toggler={toggler}
                    slide={slide}
                    sources={images}
                    type='image'
                />
        </Container>
    }

}

export default About
