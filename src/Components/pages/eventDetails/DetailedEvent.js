import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import store from '../../../store'
import Carousel, { Modal, ModalGateway } from 'react-images';
import { DualButtons, Button } from '../../parts/Buttons';
import { LinkContainer, StageContainer } from '../../parts/LinkContainer';
import CodeSnippets from '../../parts/CodeSnippets'

class DetailedEvent extends Component {

    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false, selectedIndex: 0, isMobile: props.mobile }
        this.updateStore(props.group)
    }

    toggleModal = (index)=>
    {
        this.setState(state=>({modalIsOpen:!state.modalIsOpen,selectedIndex:index}));
    }

    updateStore = (group) => {
        store.dispatch(
            { type: 'change_Color', payload: { color: group } }
        );
    }

    render() {

        const { modalIsOpen, selectedIndex } = this.state;
        return <Container className='fade-in' fluid='true'>
            <Row>
                <Col xs='12' className='EventInfo' md='8'>
                    <h1 className='EventInfo__Title'>{this.props.data.title}</h1>
                    <h5 className='EventInfo__Date'>{this.props.data.date}</h5>
                    <p className='EventInfo__information'>{this.props.data.details} </p>
                    <DualButtons group={this.props.data.group} firstLink={this.props.data.slides} secondLink={this.props.data.socialEvent} firstButtonText='Get the Slides' secondButtonText='Facebook Event' />
                </Col>


                <Col md='4' className='EventPoster'>
                    <img src={this.props.data.poster} alt={this.props.data.title +' poster'} onClick={() => this.toggleModal(0)} className='EventPoster__image' />
                    <h5 className='EventPoster__text'>the poster</h5>
                </Col>
            </Row>

            <Row className='postIntroRow'>
                <Col xs='12' className='LinksCont'>
                    <div>
                        <h1 className='LinksCont__Title'>Links</h1>
                    </div>
                    {this.props.data.links.map((container,id)=><LinkContainer group='callToAction' title='Useful Links' key={id} Links={container}/>)}
                </Col>
            </Row>

            {this.state.isMobile ?
                '' : <Row className='postIntroRow'>
                <Col md='8' lg='9' className='cheatSheet'>
                    <div className='cheatIntro'>
                        <this.props.data.svg /><h2>the Cheatsheet</h2>

                    </div>
                    <Row>
                        {this.props.data.cheatsheet.map((cheatData, id) =>{return <Col key={id} md='6' lg='4' className='cheatDetails'>
                                <this.props.data.svg /><h3>{cheatData.title}</h3>
                                <span className='cheatDetails__codeLine'><span className='cheatDetails__command'>{cheatData.command}</span> | {cheatData.use}</span>
                                </Col>})}

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
            </Row>}

            {this.state.isMobile ?''
                :<Row className='postIntroRow codeSnippetRow'>
                    <Col md='7' lg='8'>
                        {this.props.data.codeSnippets.map((code,id)=><CodeSnippets key={id} code={code}/>)}
                    </Col>
                    <LinkContainer group='download' title='Get the Files!' Links={this.props.data.downloadLinks} />
                </Row>}


            <Row className='postIntroRow PhotosRow'>
                <Col md='12'>
                    <h1>Moments</h1>
                </Col>
                <Col md='6'>
                    <img src={this.props.data.images[1].src} alt={this.props.data.images[1].caption} onClick={() => this.toggleModal(1)} className='PhotosRow__image' />
                </Col>
                <Col md='6'>
                    <img src={this.props.data.images[2].src} onClick={() => this.toggleModal(2)} alt={this.props.data.images[2].caption} className='PhotosRow__image' />
                </Col>
                <Col md='6'>
                    <img src={this.props.data.images[3].src} onClick={() => this.toggleModal(3)} alt={this.props.data.images[3].caption} className='PhotosRow__image' />
                </Col>
                <Col md='6'>
                    <img src={this.props.data.images[4].src} onClick={() => this.toggleModal(4)} alt={this.props.data.images[4].caption} className='PhotosRow__image' />
                </Col>
            </Row>

            <Row className='postIntroRow ctaRow'>
                <Col className='ctaBlock' xs='12'>
                    <h2 className='ctaBlock__Title'>Book a git workshop for your community</h2>
                    <div className='ctaBlock__Divider' />
                    <Button group='calltoAction' buttonText='Show me the form!' />
                </Col>
            </Row>

            {this.state.isMobile ? <Col md={{ xs: 12 }} className='tipContainer'>
                <p>Check the Desktop version for extra content such as code snippets.</p>
            </Col> : '' }


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

export default DetailedEvent;