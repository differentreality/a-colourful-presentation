import React, { Component } from 'react';
import './styles/App.css';
import { DualButtons } from './Components/parts/Buttons';
import Menu from './Components/parts/Menu/Menu';
import './styles/stylesheets/main.scss';
import { Container, Col, Row } from 'react-bootstrap';
import SocialBar from './Components/parts/Menu/SocialBar'
import Home from './Components/pages/Home'
import WorkshopHome from './Components/pages/Categories/WorkshopHome'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
      <Router>
      <div className="App" >
        <Container fluid='true'>
          <Row>
            <Col>
              <Row>
                <Menu colour={this.state.colour} />
                <Col md={{ span: 9, offset: 2 }} xs={12}>
                  {this.state.SocialBar}
                  <Row>
                    <Switch>
                      <Route  exact path='/' component={Home} />
                      <Route  path='/workshops' component={WorkshopHome} />
                      <Route  path='/talks' component={WorkshopHome} />
                      <Route  path='/events' component={WorkshopHome} />
                      <Route  path='/stellas-facts' component={WorkshopHome} />
                    </Switch>
                    {/* <DualButtons group='workshop' firstButtonText='Learn More' secondButtonText='Browse Workshops' />
                    <DualButtons group='talk' firstButtonText='Learn More' secondButtonText='Browse Talks' />
                    <DualButtons group='event' firstButtonText='Learn More' secondButtonText='Browse Events' />
                    <DualButtons group='stella' firstButtonText='Learn More' secondButtonText="Browse Stella's Facts" />
                    <div style={{ marginTop: '50px' }}>
                      <div className={'myButton myButton--colored myButton--colored--calltoAction'} >Book an Event!</div>
                    </div> */}
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
