import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import store from '../../../store';
import anime from 'animejs/lib/anime.es.js';
import {Link } from 'react-router-dom';


class MenuButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen:this.props.isMenuOpen
        };
    }

    componentDidMount()
    {
        
    }
    updateStore = () => {
        store.dispatch(
            { type: 'trigger_Menu', payload: { isMenuOpen: this.state.isOpen}}
        )
    }
    clicked = () => {
        this.setState(prevState => 
            ({
                isOpen: !prevState.isOpen
            }),
            this.updateStore)
    }

    homeClick=()=>
    {
        this.setState( 
            ({
                isOpen: false
            }),
            this.updateStore)
    }

    render() {
        return (
            <div className='menuButtons'>
                <Link to='/' onClick={this.homeClick} className='menu__logo'>HOME</Link>
                <span className={'v-link'+(this.props.isMenuOpen?'-white':'')} onClick={this.clicked}>
                    {this.props.isMenuOpen ? <span className='fade-in v-link__text'>CLOSE</span> : <span className='puff-in-center v-link__text'>MENU</span>}
                    <div className='v-link__v-lines'>
                        <div className={this.props.isMenuOpen ? 'v-link__v-line-1 v-link__v-line-1--closed' : 'v-link__v-line-1'} />
                        <div className={this.props.isMenuOpen ? 'v-link__v-line-2 v-link__v-line-2--closed' : 'v-link__v-line-2'} />
                    </div>
                </span>
            </div>
        );
    }
}


class SidebarMenu extends Component {

componentDidMount()
{
    this.loadAnimations();
}

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


    loadAnimations=()=>
    {
        anime.timeline({
            targets:'.menuButtons',
            opacity:[0,1],
            delay:2500,
            easing:'linear',
            duration:1000
        })
        .add({
            targets:'.sideMenu__outofBorderContent',
            opacity:[0,1],
            easing:'linear',
            duration:1000
        })
    }
    render() {
        const pickedColour = this.colours.filter(category => category.id === this.props.colourCategory)
        
        return (

            <Col className={'slide-in-top sideMenu'+(this.props.isMenuOpen?'-white':'')} xs={1}>
                <Col className='sideMenu__insideBorderContent' xs={12}>
                    <MenuButton isMenuOpen={this.props.isMenuOpen}/>
                </Col>
                <Col className={'sideMenu__outofBorderContent sideMenu__outofBorderContent-' + (this.props.isMenuOpen?'white':pickedColour[0].id)} xs={12}>
                    <div className={'colourBubble-' + pickedColour[0].id} />
                    <span className='sideMenu__outofBorderContent__colourCode'>{pickedColour[0].code}</span>
                    <span className='sideMenu__outofBorderContent__colourName'>{pickedColour[0].name}</span>
                </Col>
            </Col>)
    }
}


class MobileHeader extends React.PureComponent {
        componentDidMount()
        {
            anime({
                targets:'.menuButtons',
                opacity:[0,1],
                delay:2500,
                easing:'linear',
                duration:1000
            });
        }
        render(){
    return <Col className={'slide-in-left mobileHeader'+(this.props.isMenuOpen?'-white':'')} xs={12}>
        <Col xs={10} className='mobileHeader__bordered'>
            <MenuButton isMenuOpen={this.props.isMenuOpen}/>
        </Col>
    </Col>}
}


const Menu = (props) => {

    return (props.mobile) ? <MobileHeader isMenuOpen={props.isMenuOpen}/> : <SidebarMenu isMenuOpen={props.isMenuOpen} colourCategory={(props.color)} />
}

const mapStateToProps = (reducer) => {
    return ({ color: reducer.color,isMenuOpen:reducer.isMenuOpen });
}




export default withRouter(connect(mapStateToProps)(Menu));
