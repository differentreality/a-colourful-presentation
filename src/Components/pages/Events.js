import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { EmptyButton } from '../parts/Buttons'
import store from '../../store';
import { Link } from 'react-router-dom';
import { BreadCrumbsLevel2, EventBreadCrumbsLevel1 } from '../parts/BreadCrumbs'
import FsLightbox from 'fslightbox-react';

class Events extends Component {
    state = { toggler: false, slide: 0 }

    componentDidMount() {
        this.updateStore();
        this.setState({
            gradientColour: this.gradientColourImage(this.props.group),
        })

    }

    openLightboxOnSlide = (number) => {
        this.setState(prevState =>
            ({
                toggler: !prevState.toggler,
                slide: number,
            })
        );
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
        const toggler = this.state.toggler;
        const slide = this.state.slide;

        return (
            <Container className='fade-in' fluid='true'>

                {/*Events do not have topics,so there's no extra link*/}
                {this.props.group === 'event' ? <EventBreadCrumbsLevel1 group={this.props.group} />
                    : <BreadCrumbsLevel2 group={this.props.group} topic={this.props.topic} />}


                {this.props.data.map((event, id) => <Row className='eventCont' key={id}>
                    <Col lg='8' className='eventLeftCont'>
                        <h1 className='eventLeftCont__Title'>{event.Title}</h1>
                        <div onClick={() => this.openLightboxOnSlide(id+1)} style={{
                            backgroundImage: `${this.state.gradientColour},url(${this.props.images[id]})`
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

                <FsLightbox
                    toggler={toggler}
                    slide={slide}
                    sources={this.props.images}
                    type='image'
                />
            </Container>)
    }
}

export default withRouter(Events);