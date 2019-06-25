import React, { Component } from 'react';
import './styles/App.css';
import DualButtons from './Components/parts/DualButtons';
import Menu from './Components/parts/Menu/Menu';
import Button from 'react-bootstrap/Button';
import './styles/stylesheets/main.scss';
import './styles/bootstrap.css'
import { Container, Col, Row } from 'react-bootstrap';

class App extends Component {




  render() {
    return (
      <div className="App">
        <Container fluid='true'>
          <Row>

            <Menu/>
            <Col md={{ span: 9, offset: 2 }} xs={12}>
              <Row>
                <DualButtons group='workshop' firstButtonText='Learn More' secondButtonText='Browse Workshops' />
                <DualButtons group='talk' firstButtonText='Learn More' secondButtonText='Browse Talks' />
                <DualButtons group='event' firstButtonText='Learn More' secondButtonText='Browse Events' />
                <DualButtons group='stella' firstButtonText='Learn More' secondButtonText="Browse Stella's Facts" />
                <div style={{ marginTop: '50px' }}>
                  <Button className={'colored calltoAction'} >Book an Event!</Button>
                </div>
              </Row>


            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
