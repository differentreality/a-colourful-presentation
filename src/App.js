import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

import { connect } from 'react-redux'
//styles
import './styles/stylesheets/main.scss';
import './styles/App.css';

//components
import Menu from './Components/parts/Menu/Menu';
import { Container, Col, Row,Modal } from 'react-bootstrap';
import SocialBar from './Components/parts/Menu/SocialBar'

//pages
import Home from './Components/pages/Home'
import GitEvents from './Components/pages/Workshops/eventShowcase/GitEvents'
import RailsEvents from './Components/pages/Workshops/eventShowcase/RailsEvents'
import CategoryNavigation from './Components/pages/CategoryNavigation'
import { Git101 } from './Components/pages/Workshops/eventDetails/git101'
import Ror1ateith from './Components/pages/Workshops/eventDetails/Ror1ateith'
import Ror2ateith from './Components/pages/Workshops/eventDetails/Ror2ateith'
import About from './Components/pages/About'
import notFound404 from './Components/pages/notFound404'
import MenuContainer from './Components/pages/MenuContainer'
import Conferences from './Components/pages/Events_Conferences/eventShowcase/Conferences'
import GSoCTalks from './Components/pages/Talks/eventShowcase/GSoCTalks'
import GSoCateith from './Components/pages/Talks/eventDetails/GSoCateith'
import Fosdem19 from './Components/pages/Events_Conferences/eventDetails/Fosdem19'
import ContactForm from './Components/pages/ContactForm'
import WorkshopTopics from './Components/pages/Workshops/WorkshopTopics'
import TalkTopics from './Components/pages/Talks/TalksTopics'

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
    this.setState({ isMenuOpen: store.getState().isMenuOpen })
    this.myRef = React.createRef()
  }



  //mobile view
  resize() {
    window.innerWidth <= 770 ? this.setState({ SocialBar: '', mobile: true }) : this.setState({ SocialBar: <SocialBar />, mobile: false })
  }




  render() {
    return (
      <Provider store={store}>
        <Router basename='/'  >
          <ScrollToTop />
          <div className={"App" + (this.props.isMenuOpen ? '-openMenu' : '')} >
            <Container ref={this.myRef} fluid='true'>
              <Row>
                <Col>
                  <Row>
                    <Menu mobile={this.state.mobile} />
                    <Col md={{ span: 9, offset: 2 }} xs={12}>
                      {this.state.SocialBar}
                      <Row id='Content'>

                          <Modal dialogClassName='modal-100' show={this.props.isMenuOpen} onHide={this.handleClose}>
                            <Modal.Body>
                              <MenuContainer mobile={this.state.mobile} />
                            </Modal.Body>
                          </Modal>
                          
                        <Switch>
                          <Route  exact path='/' render={() => <Home />} />
                          <Route  exact path='/Categories' render={() => <CategoryNavigation mobile={this.state.mobile} />} />
                          
                          {/*workshops*/}
                          <Route  exact path='/workshops/topics' render={() => <WorkshopTopics />} />
                          <Route  exact path='/workshops/topics/git' render={() => <GitEvents />} />
                          <Route  exact path='/workshops/topics/ror' render={() => <RailsEvents />} />
                          <Route  exact path='/workshops/topics/git/git101' render={() => <Git101 mobile={this.state.mobile} group='workshop' />} />
                          <Route  exact path='/workshops/topics/ror/rorpt1ateith' render={() => <Ror1ateith mobile={this.state.mobile} group='workshop' />} />
                          <Route  exact path='/workshops/topics/ror/rorpt2ateith' render={() => <Ror2ateith mobile={this.state.mobile} group='workshop' />} />

                          {/*talks*/}
                          <Route  exact path='/talks/topics' render={() => <TalkTopics />} />
                          <Route  exact path='/talks/topics/gsoc' render={() => <GSoCTalks />} />
                          <Route  exact path='/talks/topics/gsoc/gsocateith' render={() => <GSoCateith />} />

                          {/*events*/}
                          <Route  exact path='/events/archive' render={() => <Conferences />} />
                          <Route  exact path='/events/archive/fosdem19' render={() => <Fosdem19 />} />

                          {/*about*/}
                          <Route  exact path='/stellas-facts/about' render={() => <About mobile={this.state.mobile} />} />

                          {/*contact*/}
                          <Route  exact path='/contact/form' render={() => <ContactForm />} />
                            
                          {/*not found 404 */}
                          <Route component={notFound404} />
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
    );
  }
}





const mapStateToProps = (reducer) => {
  return ({ color: reducer.color, isMenuOpen: reducer.isMenuOpen });
}
export default connect(mapStateToProps)(App);
