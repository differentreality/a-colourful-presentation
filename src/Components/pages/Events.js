import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { EmptyButton } from '../parts/Buttons'
import Carousel, { Modal, ModalGateway } from 'react-images';
import store from '../../store';
import { Link } from 'react-router-dom';


class Events extends Component {
    state = { modalIsOpen: false, selectedIndex: 0 }




    toggleModal = (index)=>
    {
        this.setState(state=>({modalIsOpen:!state.modalIsOpen,selectedIndex:index}));
    }

    componentDidMount() {
        this.updateStore();
        this.setState({
            gradientColour:this.gradientColourImage(this.props.group)
        })
        
    }

    gradientColourImage = (group) => group === 'workshop' ?
        'linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(40, 162, 183,.4))' :
        group === 'event' ?
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(255, 154, 125,.3))' :
            group === 'talk' ?
                'linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(255, 8, 68,.1))' : ''



    updateStore = () => {

        store.dispatch(
            { type: 'change_Color', payload: { color: this.props.group } }
        );
    }

    render() {
        const { modalIsOpen, selectedIndex } = this.state;
        return (
            <Container className='fade-in' fluid='true'>
                {this.props.data.map((event, id) => <Row className='eventCont' key={id}>
                    <Col lg='8' className='eventLeftCont'>
                        <h1 className='eventLeftCont__Title'>{event.Title}</h1>
                        <div onClick={() => this.toggleModal(id)} style={{
                            backgroundImage: `${this.state.gradientColour},url(${this.props.images[id].src})`
                        }} className='eventLeftCont__image' />

                        <Col className={'eventLeftCont__info-' + this.props.group} xs='12' sm='8' md='8' xl='6'>
                            <Row>
                                <Col xs={this.props.group === 'workshop' ? '4' : '6'}>
                                    <h3>Date</h3><br />
                                    <h6>{event.date}</h6>

                                </Col>
                                {this.props.group === 'workshop' ? <Col className='eventLeftCont__center' xs='4' >
                                    <h3>Level</h3><br />
                                    <h6>{event.Level}</h6>
                                </Col> : ''}
                                <Col xs={this.props.group === 'workshop' ? '4' : '6'}>
                                    <h3>Place</h3><br />
                                    <h6>{event.Place}</h6>

                                </Col>
                            </Row>
                        </Col>
                    </Col>
                    <Col lg='4' className='eventRightCont'>
                        <h1>About {event.Title}</h1>
                        <p>{event.paragraph}</p>
                        <Link to={event.link}><EmptyButton group={this.props.group} buttonText='See the details!' /></Link>
                    </Col>
                </Row>)}

                <ModalGateway>
                    {modalIsOpen ? (
                        <Modal onClose={this.toggleModal}  >
                            <Carousel onClick={this.toggleModal} currentIndex={selectedIndex} views={this.props.images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </Container>)
    }
}

export default withRouter(Events);