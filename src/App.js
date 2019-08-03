import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

import history from './history'
import {connect} from 'react-redux'
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
import GitEvents from './Components/pages/eventShowcase/GitEvents'
import RailsEvents from './Components/pages/eventShowcase/RailsEvents'
import CategoryNavigation from './Components/pages/CategoryNavigation'
import {Git101} from './Components/pages/eventDetails/events/git101'
import Ror1ateith from './Components/pages/eventDetails/events/Ror1ateith'
import Ror2ateith from './Components/pages/eventDetails/events/Ror2ateith'
import About from './Components/pages/About'
import MenuContainer from './Components/pages/MenuContainer'
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
    this.setState({isMenuOpen:store.getState().isMenuOpen})
    this.myRef = React.createRef()
  }

  

  //mobile view
  resize() {
    window.innerWidth <= 770 ? this.setState({ SocialBar: '', mobile: true }) : this.setState({ SocialBar: <SocialBar />, mobile: false })
  }




  render() {
    return (
      <React.StrictMode>
      <Provider store={store}>
        <Router history={history} >
          <ScrollToTop/>
          <div className={"App"+(this.props.isMenuOpen?'-openMenu':'')} >
            <Container ref={this.myRef} fluid='true'>
              <Row>
                <Col>
                  <Row>
                    <Menu mobile={this.state.mobile} />
                    <Col md={{ span: 9, offset: 2 }} xs={12}>
                      {this.state.SocialBar}
                      <Row id='Content'>
                      {this.props.isMenuOpen?<MenuContainer mobile={this.state.mobile}/>:
                        <Switch>
                          <Route exact path='/' render={() => <Home />} />
                          <Route exact path='/workshops' render={() => <CategoryNavigation />} />
                          <Route exact path='/talks' render={() => <CategoryNavigation />} />
                          <Route exact path='/events' render={() => <CategoryNavigation />} />
                          <Route exact path='/stellas-facts' render={() => <CategoryNavigation />} />
                          <Route exact path='/stellas-facts/about' render={() => <About mobile={this.state.mobile}/>} />
                          <Route exact path='/contact' render={() => <CategoryNavigation />} />
                          <Route exact path='/workshops/topics' render={() => <Topics group='workshop' />} />
                          <Route exact path='/talks/topics' render={() => <Topics group='talk' />} />
                          <Route exact path='/workshops/topics/git' render={() => <GitEvents />} />
                          <Route exact path='/workshops/topics/ror' render={() => <RailsEvents />} />
                          <Route exact path='/workshops/topics/git/git101' render={() => <Git101 mobile={this.state.mobile} group='workshop' />} />
                          <Route exact path='/workshops/topics/ror/rorpt1ateith' render={() => <Ror1ateith mobile={this.state.mobile} group='workshop' />} />
                          <Route exact path='/workshops/topics/ror/rorpt2ateith' render={() => <Ror2ateith mobile={this.state.mobile} group='workshop' />} />


                        </Switch>}
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





const mapStateToProps=(reducer) => {
  return ({color:reducer.color,isMenuOpen:reducer.isMenuOpen});
}
export default connect(mapStateToProps)(App);
