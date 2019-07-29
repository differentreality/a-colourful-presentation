import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import store from '../../store'
import Carousel, { Modal, ModalGateway } from 'react-images';
import { DualButtons, Button } from '../parts/Buttons';
import git101 from '../../Photos/git101.jpg';
import gitMpratsa from '../../Photos/gitMpratsa.JPG';
import gitPeople from '../../Photos/gitPeople.JPG';
import gitStella from '../../Photos/gitStella.JPG';
import gitNasia from '../../Photos/gitNasia.JPG';
import { LinkContainer, StageContainer } from '../parts/LinkContainer';
import { Git, Ruby } from '../../svg/topics/topicsSvg';
import CodeSnippets from '../parts/CodeSnippets'

const images = [{ src: git101, caption: 'caption caption caption' },
{ src: gitNasia, caption: 'caption caption caption' },
{ src: gitMpratsa, caption: 'caption caption caption' },
{ src: gitPeople, caption: 'caption caption caption' },
{ src: gitStella, caption: 'caption caption caption' }
]
const LinkArray = [
    {
        url: 'sadaaa',
        text: 'test'
    },
    {
        url: 'sadaaa',
        text: 'test'
    },
    {
        url: 'sadaaa',
        text: 'test'
    }
]

class DetailedEvent extends Component {


    toggleModal = (index) => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen, selectedIndex: index }));
    }

    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false, selectedIndex: 0, mobile: !props.mobile }
        this.updateStore(props.group)
    }

    updateStore = (group) => {
        store.dispatch(
            { type: 'change_Color', payload: { color: group } }
        );
    }

    render() {

        const { modalIsOpen, selectedIndex } = this.state;

        return <Container fluid='true'>
            <Row>
                <Col xs='12' className='EventInfo' md='8'>
                    <h1 className='EventInfo__Title'>Git 101</h1>
                    <h5 className='EventInfo__Date'>06/04/2019</h5>
                    <p className='EventInfo__information'> lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem </p>
                    <DualButtons group='workshop' firstButtonText='Get the Slides' secondButtonText='Facebook Event' />
                </Col>


                <Col md='4' className='EventPoster'>
                    <img  src={git101} onClick={() => this.toggleModal(0)} className='EventPoster__image' />
                    <h5 className='EventPoster__text'>the poster</h5>
                </Col>
            </Row>

            <Row className='postIntroRow'>
                <Col xs='12' className='LinksCont'>
                    <div>
                        <h1 className='LinksCont__Title'>Links</h1>
                    </div>
                    <LinkContainer group='callToAction' title='Useful Links' Links={LinkArray} />
                    <LinkContainer group='callToAction' title='Useful Links' Links={LinkArray} />
                    <LinkContainer group='callToAction' title='Useful Links' Links={LinkArray} />
                </Col>
            </Row>

            {this.state.mobile ?
                <Row className='postIntroRow'>
                    <Col md='8' lg='9' className='cheatSheet'>
                        <div className='cheatIntro'>
                            <Git /><h2>the Cheatsheet</h2>

                        </div>
                        <Row>
                            <Col md='6' lg='4' className='cheatDetails'>
                                <Git /><h3>the Cheatsheet</h3>
                                <span className='cheatDetails__command'>command | use use</span>
                            </Col>
                            <Col md='6' lg='4' className='cheatDetails'>
                                <Git /><h3>the Cheatsheet</h3>
                                <span className='cheatDetails__command'>command | use use</span>
                            </Col>
                            <Col md='6' lg='4' className='cheatDetails'>
                                <Git /><h3>the Cheatsheet</h3>
                                <span className='cheatDetails__command'>command | use use</span>
                            </Col>
                            <Col md='6' lg='4' className='cheatDetails'>
                                <Git /><h3>the Cheatsheet</h3>
                                <span className='cheatDetails__command'>command | use use</span>
                            </Col>
                            <Col md='6' lg='4' className='cheatDetails'>
                                <Git /><h3>the Cheatsheet</h3>
                                <span className='cheatDetails__command'>command | use use</span>
                            </Col>
                            <Col md='6' lg='4' className='cheatDetails'>
                                <Git /><h3>the Cheatsheet</h3>
                                <span className='cheatDetails__command'>command | use use</span>
                            </Col>

                            <Col className='stages'>
                                <StageContainer title='stage 1' text='lorem lorem lorem' />
                                <StageContainer title='stage 1' text='lorem lorem lorem' />
                                <StageContainer title='stage 1' text='lorem lorem lorem' />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{ span: 4 }} lg='3' className='tipContainer'>
                        <p><b>Pro tip : </b> Make a bookmark so you can always refer back to it! </p>
                    </Col>
                </Row> : ''}

            {this.state.mobile ?
                <Row className='postIntroRow codeSnippetRow'>
                    <Col md='7' lg='8'>
                        <CodeSnippets />
                        <CodeSnippets />
                    </Col >
                    <LinkContainer group='download' title='Get the Files!' Links={LinkArray} />
                </Row> : ''}


            <Row className='postIntroRow PhotosRow'>
                <Col md='12'>
                    <h1>Moments</h1>
                </Col>
                <Col md='6'>
                    <img src={gitNasia} onClick={() => this.toggleModal(1)} className='PhotosRow__image' />
                </Col>
                <Col md='6'>
                    <img src={gitMpratsa} onClick={() => this.toggleModal(2)} className='PhotosRow__image' />
                </Col>
                <Col md='6'>
                    <img src={gitPeople} onClick={() => this.toggleModal(3)} className='PhotosRow__image' />
                </Col>
                <Col md='6'>
                    <img src={gitStella} onClick={() => this.toggleModal(4)} className='PhotosRow__image' />
                </Col>
            </Row>

            <Row className='postIntroRow ctaRow'>
                <Col className='ctaBlock' xs='12'>
                    <h2 className='ctaBlock__Title'>Book a git workshop for your community</h2>
                    <div className='ctaBlock__Divider' />
                    <Button group='calltoAction' buttonText='Show me the form!' />
                </Col>
            </Row>

            {this.state.mobile ? '' : <Col md={{ xs: 12 }} className='tipContainer'>
                <p>Check the Desktop version for extra content such as code snippets.</p>
            </Col>}


            <ModalGateway >
                {modalIsOpen ? (
                    <Modal onClose={this.toggleModal}  >
                        <Carousel onClick={this.toggleModal} currentIndex={selectedIndex} views={images} />
                    </Modal>
                ) : null}
            </ModalGateway>
        </Container>
    }
}

export default DetailedEvent;