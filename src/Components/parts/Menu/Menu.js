import React, {  Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import {connect} from 'react-redux';


class MenuButton extends Component {

    constructor(props) {
        super(props);
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
        return (
            <div>
                <span className='menu__logo'>LOGO</span>
                <span className='v-link' onClick={this.clicked}>
                    {this.state.isOpen ? <span className='fade-in v-link__text'>CLOSE</span> : <span className='puff-in-center v-link__text'>MENU</span>}
                    <div className='v-link__v-lines'>
                        <div className={this.state.isOpen ? 'v-link__v-line-1 v-link__v-line-1--closed' : 'v-link__v-line-1'} />
                        <div className={this.state.isOpen ? 'v-link__v-line-2 v-link__v-line-2--closed' : 'v-link__v-line-2'} />
                    </div>
                </span>
            </div>
        );
    }
}


class SidebarMenu  extends Component {


    
    colours = [
        {
            'id': 'stella',
            'name': 'Grape',
            'code': '#9B4EA1'
        },
        {
            'id': 'contact',
            'name': 'Plum',
            'code': '#4e4376'
        },
        {
            'id': 'talk',
            'name': 'Pomegranate',
            'code': '#FF0844'
        },
        {
            'id': 'workshop',
            'name': 'Blueberry',
            'code': '#28a2b7'
        },
        {
            'id': 'event',
            'name': 'Grapefruit',
            'code': '#FF9A7D'
        }
    ]

    
    render() {
    const pickedColour = this.colours.filter(category => category.id === this.props.colourCategory)

    return ( 
    
        <Col className='sideMenu' xs={1}>
            <Col className='sideMenu__insideBorderContent' xs={12}>
                <MenuButton />
            </Col>
            <Col className={'sideMenu__outofBorderContent sideMenu__outofBorderContent-' + pickedColour[0].id} xs={12}>
                <div className={'colourBubble-' + pickedColour[0].id} />
                <span className='sideMenu__outofBorderContent__colourCode'>{pickedColour[0].code}</span>
                <span className='sideMenu__outofBorderContent__colourName'>{pickedColour[0].name}</span>
            </Col>
        </Col>) 
    }
}


const MobileHeader = () => {
    return <Col className='mobileHeader' xs={12}>
        <Col xs={10} id='mobileHeader-bordered'>
            <MenuButton />
        </Col>
    </Col>
}


const Menu = (props) => {

    return (props.mobile) ? <MobileHeader /> : <SidebarMenu colourCategory={(props.color)} />
}

const mapStateToProps=(reducer) => {
    return ({color:reducer.color});
}




export default withRouter(connect(mapStateToProps)(Menu));
