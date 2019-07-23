import React, { PureComponent, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import history from '../../../history'



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

    var pickedColour = colours.filter(category => category.id === props.colourCategory)

    return <Col className='sideMenu' xs={1}>
        <Col className='sideMenu__insideBorderContent' xs={12}>
            <LogoMenu />
        </Col>

        <Col className={'sideMenu__outofBorderContent sideMenu__outofBorderContent-' + pickedColour[0].id} xs={12}>
            <div className={'colourBubble-' + pickedColour[0].id} />
            <span className='sideMenu__outofBorderContent__colourCode'>{pickedColour[0].code}</span>
            <span className='sideMenu__outofBorderContent__colourName'>{pickedColour[0].name}</span>
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
            menu: <SidebarMenu colourCategory={this.groupColour(this.props.location.pathname)} />,
            colourNum: 0
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        history.listen( location =>  {
            this.setState({ menu: <SidebarMenu colourCategory={this.groupColour(location.pathname)} />})
            this.resize();
        })
    }

    

    groupColour = (url) => {
        return (/(\/workshops.*)/g).test(url) ? 'workshop':
        (/(\/talks.*)/g).test(url) ? 'talk':
        (/(\/events.*)/g).test(url) ? 'event':
        (/(\/stellas-facts.*)/g).test(url) ? 'stella':
        (/(\/contact.*)/g).test(url) ? 'contact' : 'contact'

    }

    resize() {
        window.innerWidth <= 770 ? this.setState({ menu: <MobileHeader /> }) : this.setState({ menu: <SidebarMenu colourCategory={this.groupColour(this.props.location.pathname)} /> })
    }


    

    render() {

        

        return (
            this.state.menu
        );
    }
}

export default withRouter(Menu);
