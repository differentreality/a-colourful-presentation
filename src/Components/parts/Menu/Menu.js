import React, { PureComponent, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-bootstrap';



class LogoMenu extends Component {

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

const SidebarMenu = (props) => {

    var colours = [
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

    //check an ekane render, redirect 404
    return (!props.arNum)? null:<Col className='sideMenu' xs={1}>
        <Col className='sideMenu__insideBorderContent' xs={12}>
            <LogoMenu />
        </Col>

        <Col className={'sideMenu__outofBorderContent sideMenu__outofBorderContent-'+colours[props.arNum].id} xs={12}>
            <div className={'sideMenu__outofBorderContent__colourBubble-'+colours[props.arNum].id} />
            <span className='sideMenu__outofBorderContent__colourCode'>{colours[props.arNum].code} </span>
            <span className='sideMenu__outofBorderContent__colourName'>{colours[props.arNum].name}</span>
        </Col>
    </Col>
}


const MobileHeader = () => {
    return <Col className='mobileHeader' xs={12}>
        <Col xs={10} id='mobileHeader-bordered'>
            <LogoMenu />
        </Col>
    </Col>
}

class Menu extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            menu: <SidebarMenu />,
            colourNum : 2
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    groupColour = (url) => ({
        '/workshops': 3,
        '/talks': 2,
        '/contact': 1,
        '/stellas-facts': 0,
        '/events': 4
    })[url]

    resize() {
        window.innerWidth <= 770 ? this.setState({ menu: <MobileHeader /> }) : this.setState({ menu: <SidebarMenu arNum={this.groupColour(this.props.location.pathname)} /> })
    }



    render() {
        return (
            this.state.menu
        );
    }
}

export default withRouter(Menu);
 