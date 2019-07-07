import React, { Component } from 'react';
import { Col } from 'react-bootstrap';


class MobileHeader extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }


    clicked = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }


    render() {
        return (<Col id='mobileHeader' xs={12}>
            <Col xs={8} id='mobileHeader-bordered'>
                <Col xs={2}>
                    <a onClick={this.clicked}>
                        {this.state.isOpen ? <span className='fade-in v-link__text'>CLOSE</span> : <span className='puff-in-center v-link__text'>MENU</span>}
                        <div className='v-link__v-lines'>
                            <div className={this.state.isOpen ? 'v-link__v-line-1 v-link__v-line-1--closed' : 'v-link__v-line-1'} />
                            <div className={this.state.isOpen ? 'v-link__v-line-2 v-link__v-line-2--closed' : 'v-link__v-line-2'} />
                        </div>
                    </a>
                </Col>
            </Col>
        </Col>
        );
    }
}

export default MobileHeader;