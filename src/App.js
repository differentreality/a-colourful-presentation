import React, { Component } from 'react';
import './styles/App.css';
import { DualButtons } from './Components/parts/Buttons';
import Menu from './Components/parts/Menu/Menu';
import './styles/stylesheets/main.scss';
import { Container, Col, Row } from 'react-bootstrap';
import anime from 'animejs/lib/anime.es.js';
import SocialBar from './Components/parts/Menu/SocialBar'
import Home from './Components/pages/Home'
import WorkshopHome from './Components/pages/Categories/WorkshopHome'
import { Papyrus } from './svg/Contact'
class App extends Component {

  constructor() {
    super();
    this.state = {
      SocialBar: <SocialBar />, //emfanisi mono sto desktop
      colour: 'purple'
    };
  }

  componentDidMount() {
    anime({

      targets: '.svgFam__topLeft',
      translateX: {
        value: -150
      },
      translateY: {
        value: -150
      },
      easing: 'linear',
      complete: function () {
        anime({
          targets: '.svgFam__topLeft',
          rotate: {
            value: 360,
            duration: 10000,
            loop: true,
          },
          loop: true,
          easing: 'linear'
        });
      }
    })

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }



  resize() {
    window.innerWidth <= 770 ? this.setState({ SocialBar: '' }) : this.setState({ SocialBar: <SocialBar /> })
  }

  render() {
    return (
      <div className="App" >
        <Container fluid='true'>
          <Row>
            <Col>
              <Row>
                <Menu colour={this.state.colour} />
                <Col md={{ span: 9, offset: 2 }} xs={12}>
                  {this.state.SocialBar}
                  <Row>
                    <WorkshopHome />
                    <DualButtons group='workshop' firstButtonText='Learn More' secondButtonText='Browse Workshops' />
                    <DualButtons group='talk' firstButtonText='Learn More' secondButtonText='Browse Talks' />
                    <DualButtons group='event' firstButtonText='Learn More' secondButtonText='Browse Events' />
                    <DualButtons group='stella' firstButtonText='Learn More' secondButtonText="Browse Stella's Facts" />
                    <div style={{ marginTop: '50px' }}>
                      <div className={'myButton myButton--colored myButton--colored--calltoAction'} >Book an Event!</div>
                    </div>
                    <Papyrus />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
