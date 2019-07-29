import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

//styles
import './styles/stylesheets/main.scss';
import './styles/App.css';

//components
import Menu from './Components/parts/Menu/Menu';
import { Container, Col, Row } from 'react-bootstrap';
import SocialBar from './Components/parts/Menu/SocialBar'

//pages
import Home from './Components/pages/Home'
import Topics from './Components/pages/Topics'
import Events from './Components/pages/Events'
import CategoryNavigation from './Components/pages/CategoryNavigation'
import DetailedEvent from './Components/pages/DetailedEvent'
class App extends Component {

  constructor() {
    super();
    this.state = {
      mobile: false,
      SocialBar: <SocialBar />,
      color: 'stella'
    };
  }



  componentDidMount() {

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }


  //mobile view
  resize() {
    window.innerWidth <= 770 ? this.setState({ SocialBar: '', mobile: true }) : this.setState({ SocialBar: <SocialBar />, mobile: false })
  }






  render() {

    return (
      <React.StrictMode>
      <Provider store={store}>
        <Router history={history}>
          <div className="App" >
            <Container fluid='true'>
              <Row>
                <Col>
                  <Row>
                    <Menu mobile={this.state.mobile} />
                    <Col md={{ span: 9, offset: 2 }} xs={12}>
                      {this.state.SocialBar}
                      <Row id='Content'>
                        <Switch>
                          <Route exact path='/' render={() => <Home />} />
                          <Route exact path='/workshops' render={() => <CategoryNavigation />} />
                          <Route exact path='/talks' render={() => <CategoryNavigation />} />
                          <Route exact path='/events' render={() => <CategoryNavigation />} />
                          <Route exact path='/stellas-facts' render={() => <CategoryNavigation />} />
                          <Route exact path='/contact' render={() => <CategoryNavigation />} />
                          <Route exact path='/workshops/topics' render={() => <Topics group='workshop' />} />
                          <Route exact path='/talks/topics' render={() => <Topics group='talk' />} />
                          <Route exact path='/workshops/topics/git' render={() => <Events group='workshop' />} />
                          <Route exact path='/workshops/topics/git/:Event' render={() => <DetailedEvent mobile={this.state.mobile} group='workshop' />} />
                        </Switch>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </Router>
      </Provider>
      </React.StrictMode>
    );
  }
}

export default App;
