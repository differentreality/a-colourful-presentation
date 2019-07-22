import history from '../../history'
import React, { Component } from 'react';
import { Button } from '../parts/Buttons'
import anime from 'animejs/lib/anime.es.js';
import { withRouter } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { Cog, CogOutline, Pen, Laptop, Tool } from '../../svg/Workshops'
import { Coffee, Idea, IdeaOutline, Smile, Reading } from '../../svg/StellasFacts'
import { Hand, whiteBoard, Microphone, MicrophoneOutlineSvg, Ruby } from '../../svg/Talks'
import { confCard, Beer, Networking, University, UniversityOutline } from '../../svg/Events'
import { Papyrus, PapyrusOutline, QuestionMark, MessageCloud, MessageFolder } from '../../svg/Contact'
class CategoryNavigation extends Component {

    constructor(props) {
        super(props);

        var pointer = 0;
        switch (history.location.pathname) {
            case '/workshops': pointer = 0; break;
            case '/talks': pointer = 1; break;
            case '/events': pointer = 2; break;
            case '/stellas-facts': pointer = 3; break;
            case '/contact': pointer = 4; break;
            default: pointer = 0; break;
        }

        this.state = {
            'Title': null,
            'paragraph': null,
            'topLeft': null,
            'topRight': null,
            'center': null,
            'botLeft': null,
            'botRight': null,
            'group': null,
            'urlPointer': pointer,
            'url': null
        }



    }

    componentWillMount() {
        this.checkPage();
       
    }

    componentDidMount() {
        window.addEventListener('wheel', this.scrollToChangePages)
        this.restartAnimations();

    }





    scrollToChangePages = (e) => {

        if (e.deltaY > 2) {
            this.setState({ scrolled: true });
            this.changePointer('add');
            history.push(this.categoryURLS[this.state.urlPointer]);
            this.checkPage();
            this.restartAnimations();
        }

        if (e.deltaY < -2) {

            this.setState({ scrolled: true });
            this.changePointer('minus');
            history.push(this.categoryURLS[this.state.urlPointer]);
            this.checkPage();
            this.restartAnimations();
        }
        setTimeout(() => this.setState({ scrolled: false }), 1000)
    }

    categoryURLS = ['/workshops', '/talks', '/events', '/stellas-facts', '/contact']
    changePointer = (type) =>
        type === 'add' ?
            this.setState(prevState =>
                (prevState.urlPointer === 4 ?
                    { 'urlPointer': 0, 'url': this.categoryURLS[0] } :
                    { 'urlPointer': prevState.urlPointer + 1, 'url': this.categoryURLS[prevState.urlPointer + 1] })
            ) :
            type === 'minus' ?
                this.setState(prevState =>
                    (prevState.urlPointer === 0 ?
                        { 'urlPointer': 4, 'url': this.categoryURLS[4] } :
                        { 'urlPointer': prevState.urlPointer - 1, 'url': this.categoryURLS[prevState.urlPointer - 1] })) : ''



    rotateAnimation = (classtoAnimate) => {
        anime({
            targets: classtoAnimate,
            rotate: {
                value: 360,
                duration: 15000
            },
            loop: true,
            easing: 'linear'
        });
    };

    topLeft = anime({
        targets: '.svgFam__topLeft',

        complete: () =>
            this.rotateAnimation('.svgFam__topLeft')

        ,
        easing: 'linear'
    })

    topRight = anime({
        targets: '.svgFam__topRight',

        rotate: {
            rotate: {
                value: 360,
                duration: 2000,
                loop: true
            },
        },
        complete: () => this.rotateAnimation('.svgFam__topRight'),
        easing: 'linear'
    });

    botRight = anime({
        targets: '.svgFam__botRight',

        complete: () =>
            this.rotateAnimation('.svgFam__botRight')
        ,
        easing: 'linear'
    });

    botLeft = anime({
        targets: '.svgFam__botLeft',

        complete: () =>
            this.rotateAnimation('.svgFam__botLeft')
        ,
        easing: 'linear'
    });

    center = anime({
        targets: '.svgFam__center',
        translateY: 50,
        loop: true,
        direction: 'alternate',
        duration: 2500,
        easing: 'linear'
    })


    restartAnimations = () => {


        this.topLeft.restart();
        this.topRight.restart();
        this.botLeft.restart();
        this.botRight.restart();

        anime({
            targets: '.svgFam__center',
            translateY: 50,
            loop: true,
            direction: 'alternate',
            duration: 2500,
            easing: 'linear'
        }).restart();


    }

    checkPage = () => {
        this.state.urlPointer === 0 ? this.setState({
            'Title': 'Workshops',
            'paragraph': <p>  Introducing a technology in a hands-on session.<br /><i>Showcase your Laptop Stickers!</i></p>,
            'topLeft': Cog,
            'topRight': Tool,
            'center': Laptop,
            'botLeft': CogOutline,
            'botRight': Pen,
            'group': 'workshop'
        }) :
            this.state.urlPointer === 1 ? this.setState({
                'Title': 'Talks',
                'paragraph': <p> We're talking about tools.<br /><i>We also exchange swag!</i></p>,
                'topLeft': Microphone,
                'topRight': Hand,
                'center': whiteBoard,
                'botLeft': MicrophoneOutlineSvg,
                'botRight': Ruby,
                'group': 'talk'
            }) :
                this.state.urlPointer === 2 ? this.setState({
                    'Title': 'Events',
                    'paragraph': <p>  Conferences & events where I was a coordinator or had an amazing experience meeting new people and
                        learning new things!
                    </p>,
                    'topLeft': University,
                    'topRight': Beer,
                    'center': Networking,
                    'botLeft': UniversityOutline,
                    'botRight': confCard,
                    'group': 'event'
                }) :
                    this.state.urlPointer === 3 ? this.setState({
                        'Title': `Stella's Facts`,
                        'paragraph': <p>Several things about me and the things I enjoy the most.<br/><i>Purple is of course, one of them!</i></p>,
                        'topLeft': Idea,
                        'topRight': Smile,
                        'center': Reading,
                        'botLeft': IdeaOutline,
                        'botRight': Coffee,
                        'group': 'stella'
                    }) : this.setState({
                        'Title': 'Contact',
                        'paragraph': <p>  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>,
                        'topLeft': Papyrus,
                        'topRight': QuestionMark,
                        'center': MessageCloud,
                        'botLeft': PapyrusOutline,
                        'botRight': MessageFolder,
                        'group': 'contact'
                    })
    }


    render() {

        return (
            <Container id='MainNav' className='fade-in' fluid='true'>
                <Row>
                    <Col lg={{ span: 6, order: 'last' }} className='svgFam col-xs-pull-12'>
                        <this.state.topLeft />
                        <this.state.botLeft />
                        <this.state.center />
                        <this.state.topRight />
                        <this.state.botRight />
                    </Col>
                    <Col lg={{ span: 6, order: 'first' }} className='workshopCon col-xs-push-12'>
                        <span className='workshopCon__Title'>{this.state.Title}</span>
                        {this.state.paragraph}
                        <Button group={this.state.group} buttonText='Learn More!' />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(CategoryNavigation);