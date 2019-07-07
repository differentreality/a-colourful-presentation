import React, { Component  } from 'react';
import { Col } from 'react-bootstrap';

var colours = [
    {
        'id' : 'stellafacts',
        'name' : 'Grape',
        'code' : '#9B4EA1'
    },
    {
        'id' : 'contact',
        'name' : 'Plum',
        'code' : '#4e4376'
    },
    {
        'id' : 'talks',
        'name' : 'Pomegranate',
        'code' : '#FF0844'
    },
    {
        'id' : 'workshops',
        'name' : 'Blueberry',
        'code' : '#9B4EA1'
    },
    {
        'id' : 'events',
        'name' : 'Grapefruit',
        'code' : '#FF9A7D'
    }
]

//TODO: analoga me to router,allakse xroma & periexomeno
class SidebarMenu extends Component  {

    constructor() {
        super();
        this.state = {
          isOpen : false
        };
      }

      
      clicked = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
          }));
        }


        render(){
            return (
                <Col className='sideMenu' xs={1}>
                    <Col className='sideMenu__insideBorderContent' xs={12}>
                        <h5>LOGO</h5>
                            <a className='v-link'  onClick={this.clicked}>
                                 {this.state.isOpen? <span className='fade-in v-link__text'>CLOSE</span> : <span className='puff-in-center v-link__text'>MENU</span>}
                                <div className='v-link__v-lines'>
                                    <div className={this.state.isOpen? 'v-link__v-line-1 v-link__v-line-1--closed' : 'v-link__v-line-1'}/>
                                    <div className={this.state.isOpen? 'v-link__v-line-2 v-link__v-line-2--closed' : 'v-link__v-line-2'}/>
                                </div>
                            </a>
                    </Col>

                    <Col className='sideMenu__outofBorderContent sideMenu__outofBorderContent-stella' xs={12}>
                            <div className='sideMenu__outofBorderContent__colourBubble-stella'/>{/*colourBubble based on router*/}
                            <span className='sideMenu__outofBorderContent__colourCode'>{colours[0].code}</span>
                            <span className='sideMenu__outofBorderContent__colourName'>{colours[0].name}</span>
                    </Col>
                </Col>
            );
        }
}

export default SidebarMenu;