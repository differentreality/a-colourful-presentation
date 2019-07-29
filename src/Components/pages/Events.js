import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { EmptyButton } from '../parts/Buttons';
import git101ateith from '../../Photos/git101ateith.JPG';
import Carousel, { Modal, ModalGateway } from 'react-images';
import store from '../../store';


const images = [{ src: git101ateith, caption: 'caption caption caption' }]

class Events extends Component {
    state = { modalIsOpen: false }
    toggleModal = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    }

    componentDidMount()
    {
        this.updateStore();
    }

    updateStore =() =>
    {

        store.dispatch(
            {type:'change_Color',payload:{color:this.props.group}}
        );
    }

    wshopContent = [
        {
            Title: 'Git 101',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
            date: '02/04/20',
            Level: 'Begginer',
            Place: 'Thessaloniki'
        },
        {
            Title: 'Git 101',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
            date: '02/04/20',
            Level: 'Begginer',
            Place: 'Thessaloniki'
        }
    ]




    render() {
        const { modalIsOpen } = this.state; 
        return (
            <Container className='fade-in' fluid='true'>
                <Row>
                    <Col lg='8' className='eventLeftCont'>
                        <h1 className='eventLeftCont__Title'>Git 101</h1>
                        <div onClick={this.toggleModal} style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(40, 162, 183,.4)),url(${git101ateith})`
                        }} className='eventLeftCont__image' />

                        <Col className={'eventLeftCont__info-' + this.props.group} xs='12' sm='8' md='8' xl='6'>
                            <Row>
                                <Col xs='4'>
                                    <h3>Date</h3><br />
                                    <h6>02/04/03</h6>

                                </Col>
                                <Col className='eventLeftCont__center' xs='4' >
                                    <h3>Level</h3><br />
                                    <h6>Beginner</h6>
                                </Col>
                                <Col xs='4'>
                                    <h3>Place</h3><br />
                                    <h6>Thessaloniki</h6>

                                </Col>
                            </Row>
                        </Col>
                    </Col>


                    <Col lg='4' className='eventRightCont'>
                        <h1>About Git 101</h1>
                        <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                        Lorem Ipsum has been the industry.</p>
                        <EmptyButton group={this.props.group} buttonText='See the details!' />
                    </Col>
                </Row>

                <ModalGateway >
                    {modalIsOpen ? (
                        <Modal onClose={this.toggleModal}  >
                            <Carousel onClick={this.toggleModal} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </Container>
        )
    }
}

export default withRouter(Events);