import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Code } from '../../svg/Workshops';
import { MicrophoneOutlineSvg } from '../../svg/Talks';
import { MenuConfCard } from '../../svg/Events'
import { PapyrusOutline } from '../../svg/Contact'
import {  Link } from 'react-router-dom';
import store from '../../store'

const workshopLinks=[
    {
       title:'Git',
       url:'/workshops/topics/git' 
    },
    {
        title:'ruby',
        url:'/workshops/topics/ruby' 
     }
]

const talkLinks=[
    {
       title:'Google Summer of Code',
       url:'/talks/topics/gsoc' 
    },
    {
        title:'ruby',
        url:'/workshops/topics/ruby' 
     }
]

const eventsLinks=[
    {
        title:'Past Events',
        url:'/events/events'
    }
]
class MenuContainer extends Component {

    updateStore =() =>
    {
        store.dispatch(
            {type: 'trigger_Menu', payload: { isMenuOpen: false}}
        );
    }
    render() {
        return <Container id='MenuNavigation'>
            <Row>
                <Col className='Navigation' md='6' lg='3'>
                    <Code />
                    <h1 className='Navigation__Title'>Workshops</h1>
                    <ul>
                        {workshopLinks.map((link, id) => <li><Link onClick={this.updateStore} className='Navigation__Link' key={id} to={link.url}>{link.title}</Link></li>)}
                    </ul>
                </Col>
                <Col className='Navigation' md='6' lg='3'>
                    <MicrophoneOutlineSvg />
                    <h1 className='Navigation__Title'>Talks</h1>
                    <ul>
                        {talkLinks.map((link, id) =><li> <Link className='Navigation__Link' key={id} to={link.url}>{link.title}</Link></li>)}
                    </ul>
                </Col>
                <Col className='Navigation' md='6' lg='3'>
                    <MenuConfCard />
                    <h1 className='Navigation__Title'>Events</h1>
                    <ul>
                        {eventsLinks.map((link, id) =><li> <Link className='Navigation__Link' key={id} to={link.url}>{link.title}</Link></li>)}
                    </ul>
                </Col>
                <Col className='Navigation' md='6' lg='3'>
                    <PapyrusOutline />
                    <h1 className='Navigation__Title'>Contact</h1>
                    <ul>
                        <li> <Link className='Navigation__Link' to='/stellas-facts/about'>Stella's Facts</Link></li>
                        <li> <Link className='Navigation__Link' to='/contact/form'>Contact form</Link></li>
                    </ul>
                </Col>
            </Row>

            <Row>
               <Col className='scheduledQuote' lg='7'>
                <h3 className='scheduledQuote__title'>
                    Quote of the month
                </h3>
                <h1 className='scheduledQuote__quote'>
                ''So many books, so little time.''
                </h1>
                <h4 className='scheduledQuote__author'>
                -Frank Zappa.
                </h4>
               </Col> 
            </Row>

            <Row className='newsLetter'>
                   <Col lg={{span:5,offset:3}}>
                    <span className='newsLetter__info'>Get notified about upcoming events!</span>
                    </Col>
                    <Col lg='4'>
                    <form className='newsLetterForm' action="/action_page.php">
                    <input className='newsLetterForm__input' type="text" id="fname" name="firstname" placeholder="Your E-mail..."/>
                    <input className='newsLetterForm__submit' type="submit" value="Submit! 🡢 "/>
                    </form>
                    </Col>
            </Row>
        </Container>
    }
}

export default MenuContainer;