import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Button } from '../../Components/parts/Buttons';
class Home extends Component {

    render() {
        return (
            <Container fluid='true' className='home'>
                <Row>
                    <Col className='leftContent' md='6'>
                        <h1 className='leftContent__title'>Stella Rouzi</h1>
                        <h3 className='leftContent__subtitle'>Event Organizer
                    <br />
                            Ruby on Rails Dev
                    <br />
                            GSoC Mentor
                    </h3>
                    </Col>
                    <Col className='rightContent' md='6'>
                        <p className='rightContent__paragraph'>
                            Meeting new people, sharing ideas,
                        <br />
                            exploring the world,
                        <br />
                            contributing!
                    </p>
                    </Col>
                </Row>
                <Row className='homeCTA'>
                    <Col md='6'>
                        <span className='home__latest'>Latest</span><Button group='workshop' secondButtonText='Git 101' />
                    </Col>

                    <Col md='6'>
                        <h1 className='home__scrollAction'>Scroll and Roll!</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;