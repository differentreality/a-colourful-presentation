import React, { Component } from 'react';
import './styles/App.css';
import Menu from './Components/parts/Menu/Menu';
import './styles/stylesheets/main.scss';
import { Container, Col, Row } from 'react-bootstrap';
import SocialBar from './Components/parts/Menu/SocialBar'
import Home from './Components/pages/Home'
import WorkshopHome from './Components/pages/Categories/WorkshopHome'
import {Router, Route, Switch } from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js';
import history from './history'
class App extends Component {

  constructor() {
    super();
    this.state = {
      SocialBar: <SocialBar />, //emfanisi mono sto desktop
      colour: 'purple'
    };
  }

  

  componentDidMount() {

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }



  resize() {
    window.innerWidth <= 770 ? this.setState({ SocialBar: '' }) : this.setState({ SocialBar: <SocialBar /> })
  }

  
 
  
  render() {
    
    return (
      <Router history={history}>
        <div className="App" >
          <Container fluid='true'>
            <Row>
              <Col>
                <Row>
                  <Menu colour={this.state.colour} />
                  <Col md={{ span: 9, offset: 2 }} xs={12}>
                    {this.state.SocialBar}
                    <Row id='Content'>
                      <Switch>
                        <Route exact path='/' render={(props) => <Home  />} />
                        <Route path='/workshops' render={(props) => <WorkshopHome  />} />
                        <Route path='/talks' render={(props) => <WorkshopHome />} />
                        <Route path='/events' render={(props) => <WorkshopHome />} />
                        <Route path='/stellas-facts' render={(props) => <WorkshopHome />} />
                        <Route path='/contact' render={(props) => <WorkshopHome />} />
                      </Switch>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
