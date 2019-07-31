import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import stella from '../../Photos/stella.jpg'
import osem from '../../Photos/osem.jpg'
import spaghetti from '../../Photos/spaghetti.png'
import { Rails, Git, Ruby } from '../../svg/AboutSvg';
import { Reading } from '../../svg/StellasFacts';
import Carousel, { Modal, ModalGateway } from 'react-images';


const images=[{src:stella,caption:'lorem lorem lorem'}]

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
    }
]


class About extends Component {

    state = { modalIsOpen: false, selectedIndex: 0 }
    toggleModal = (index) => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen, selectedIndex: index }));
    }


render() {
    const { modalIsOpen } = this.state;        
        return <Container className='About' fluid='true'>
            <Row>
                <Col md='6' className='PhotoContainer' >
                    <div className='PhotoContainer__stella'>
                        <img className='PhotoContainer__stella__image' onClick={()=>this.toggleModal(0)} src={stella} />
                        <h4>That's me!</h4>
                    </div>

                    <div className='PhotoContainer__miranda'>
                        <img className='PhotoContainer__miranda__image' src={stella} onClick={()=>this.toggleModal(1)} />
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
                    <h2>primary</h2>
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
                    <img src={osem} />
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
                    <img src={spaghetti} />
                    
                </Col>
                <Col className='cooking__info' xs={{ span: 12 }} md='6'>
                    <h3 >Cooking</h3>
                    <p>Lorem eatting ipsun text Lorem eating ipsun textLorem eating ipsun textLorem eating ipsun textLorem eating ipsun textLorem eating ipsun textLorem eating ipsun textLorem eating ipsun textLorem eating ipsun textLorem eating ipsun textLorem eating ipsun text.</p>
                </Col>
            </Row>

            <Row className='postRow contactStella'>
                <Col xs='12'>
                <p className='contactStella__paragraph'>That's about it, share your thoughts using the <span className='keyword'>contact form</span> or say hi directly,
                at <span className='keyword'>stellarouzi@gmail.com</span>
                </p>
                </Col>
            </Row>

            <ModalGateway>
                    {modalIsOpen ? (
                        <Modal onClose={this.toggleModal}  >
                            <Carousel onClick={this.toggleModal} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
        </Container>
    }

}

export default About