import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import store from '../../../store'
import Carousel, { Modal, ModalGateway } from 'react-images';
import { DualButtons, Button } from '../../parts/Buttons';
import { LinkContainer, StageContainer } from '../../parts/LinkContainer';
import CodeSnippets from '../../parts/CodeSnippets'

const EventIntroduction = (props) =>
    <Row>
        <Col xs='12' md='8' className='EventInfo'>
            <h1 onClick={() => console.log(props)} className='EventInfo__Title'>{props.title}</h1>
            <h5 className='EventInfo__Date'>{props.date}</h5>
            <p className='EventInfo__information'>{props.details} </p>
            <DualButtons group={props.group} firstLink={props.slides} secondLink={props.socialEvent} firstButtonText='Get the Slides' secondButtonText='Facebook Event' />
        </Col>
        <Col xs='12' md='4' className='EventPoster'>
            <img src={props.poster} alt={props.title + ' poster'} onClick={() => props.toggleModal(0)} className='EventPoster__image' />
            <h5 className='EventPoster__text'>the poster</h5>
        </Col>
    </Row>

const LinksRow = (props) => <Row className='postIntroRow'>
    <Col xs='12' className='LinksCont'>
        <div>
            <h1 className='LinksCont__Title'>Links</h1>
        </div>
        {props.links.map((container, id) => <LinkContainer group='callToAction' title='Useful Links' key={id} Links={container} />)}
    </Col>
</Row>

const CheatSheet = (props) => <Row className='postIntroRow'>
    <Col md='8' lg='9' className='cheatSheet'>
        <div className='cheatIntro'>
            <props.svg /><h2>the Cheatsheet</h2>

        </div>
        <Row>
            {props.cheatsheet.map((cheatData, id) => {
                return <Col key={id} md='6' lg='4' className='cheatDetails'>
                    <props.svg /><h3>{cheatData.title}</h3>
                    <span className='cheatDetails__codeLine'><span className='cheatDetails__command'>{cheatData.command}</span> | {cheatData.use}</span>
                </Col>
            })}

            <Col xs='12' className='stages'>
                <StageContainer title='stage 1' text='lorem lorem lorem' />
                <StageContainer title='stage 1' text='lorem lorem lorem' />
                <StageContainer title='stage 1' text='lorem lorem lorem' />
            </Col>
        </Row>
    </Col>
    <Col md={{ span: 4 }} lg='3' className='tipContainer'>
        <p><b>Pro tip : </b> Make a bookmark so you can always refer back to it! </p>
    </Col>
</Row>

const EventCodeSnippets = (props) => <Row className='postIntroRow codeSnippetRow'>
    <Col md='7' lg='8'>
        {props.codeSnippets.map((code, id) => <CodeSnippets key={id} code={code} />)}
    </Col>
    <LinkContainer group='download' title='Get the Files!' Links={props.downloadLinks} />
</Row>

const PhotoMedia = (props) => <Row className='postIntroRow PhotosRow'>
    <Col md='12'>
        <h1>Moments</h1>
    </Col>
    <Col md='6'>
        <img src={props.images[1].src} onClick={() => props.toggleModal(1)} alt={props.images[1].caption} className='PhotosRow__image' />
    </Col>
    <Col md='6'>
        <img src={props.images[2].src} onClick={() => props.toggleModal(2)} alt={props.images[2].caption} className='PhotosRow__image' />
    </Col>
    <Col md='6'>
        <img src={props.images[3].src} onClick={() => props.toggleModal(3)} alt={props.images[3].caption} className='PhotosRow__image' />
    </Col>
    <Col md='6'>
        <img src={props.images[4].src} onClick={() => props.toggleModal(4)} alt={props.images[4].caption} className='PhotosRow__image' />
    </Col>
</Row>

const CTAEnding = (props) => <div><Row className='postIntroRow ctaRow'>
    <Col className='ctaBlock' xs='12'>
        <h2 className='ctaBlock__Title'>Book a git workshop for your community</h2>
        <div className='ctaBlock__Divider' />
        <Button group='calltoAction' buttonText='Show me the form!' />
    </Col>
    {props.isMobile ? <Col md={{ xs: 12 }} className='tipContainer'>
        <p>Check the Desktop version for extra content such as code snippets.</p>
    </Col> : ''}
</Row>
</div>

class WorkshopDetailedEvent extends Component {

    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false, selectedIndex: 0 }
        this.updateStore(props.group)
    }

    toggleModal = (index) => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen, selectedIndex: index }));
    }

    updateStore = (group) => {
        store.dispatch(
            { type: 'change_Color', payload: { color: group } }
        );
    }

    render() {

        const { modalIsOpen, selectedIndex } = this.state;
        const mobile = this.props.mobile;
        return <Container className='fade-in' fluid='true'>


            <EventIntroduction title={this.props.data.title} date={this.props.data.date} details={this.props.data.details}
                group={this.props.data.group} firstLink={this.props.data.slides}
                secondLink={this.props.data.socialEvent}
                poster={this.props.data.poster}
                toggleModal={(num) => this.toggleModal(num)} />


            <LinksRow links={this.props.data.links} />


            {this.props.mobile ?
                '' : (<div>
                    <CheatSheet cheatsheet={this.props.data.cheatsheet} svg={this.props.data.svg} />
                    <EventCodeSnippets codeSnippets={this.props.data.codeSnippets} downloadLinks={this.props.data.downloadLinks} />
                </div>)}


            <PhotoMedia images={this.props.data.images} toggleModal={(num) => this.toggleModal(num)} />

            <CTAEnding isMobile={mobile}/>

            <ModalGateway >
                {modalIsOpen ? (
                    <Modal onClose={this.toggleModal}  >
                        <Carousel onClick={this.toggleModal} currentIndex={selectedIndex} views={this.props.data.images} />
                    </Modal>
                ) : null}
            </ModalGateway>
        </Container>
    }
}

class TalkEventDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false, selectedIndex: 0, isMobile: props.mobile }
        this.updateStore(props.group)
    }

    toggleModal = (index) => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen, selectedIndex: index }));
    }

    updateStore = (group) => {
        store.dispatch(
            { type: 'change_Color', payload: { color: group } }
        );
    }

    render() {

        const { modalIsOpen, selectedIndex } = this.state;
        const mobile = this.props.mobile;
        return <Container className='fade-in' fluid='true'>


            <EventIntroduction title={this.props.data.title} date={this.props.data.date} details={this.props.data.details}
                group={this.props.data.group} firstLink={this.props.data.slides}
                secondLink={this.props.data.socialEvent}
                poster={this.props.data.poster}
                toggleModal={(num) => this.toggleModal(num)} />

            <LinksRow links={this.props.data.links} />

            <PhotoMedia images={this.props.data.images} toggleModal={(num) => this.toggleModal(num)} />

            <CTAEnding isMobile={mobile}/>

            <ModalGateway >
                {modalIsOpen ? (
                    <Modal onClose={this.toggleModal}  >
                        <Carousel onClick={this.toggleModal} currentIndex={selectedIndex} views={this.props.data.images} />
                    </Modal>
                ) : null}
            </ModalGateway>
        </Container>
    }
}

export {WorkshopDetailedEvent,TalkEventDetails};