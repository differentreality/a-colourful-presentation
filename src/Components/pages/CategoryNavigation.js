import React, { Component } from 'react';
import { Button } from '../parts/Buttons'
import anime from 'animejs/lib/anime.es.js';
import { withRouter, Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { Cog, CogOutline, Pen, Laptop, Tool } from '../../svg/Workshops'
import { Coffee, Idea, IdeaOutline, Smile, Reading } from '../../svg/StellasFacts'
import { Hand, whiteBoard, Microphone, MicrophoneOutlineSvg, Ruby } from '../../svg/Talks'
import { ConfCard, Beer, Networking, University, UniversityOutline } from '../../svg/Events'
import { Papyrus, PapyrusOutline, QuestionMark, MessageCloud, MessageFolder } from '../../svg/Contact'
import { debounce } from 'lodash';
import store from '../../store';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class CategoryNavigation extends Component {

    constructor(props) {

        super(props);
        this.debouncedScroll = this.debouncedScroll.bind(this);
        this.state = {
            'Title': 'Workshops',
            'paragraph': <p>  Introducing a technology in a hands-on session.<br /><i>Showcase your Laptop Stickers!</i></p>,
            'topLeft': Cog,
            'topRight': Tool,
            'center': Laptop,
            'botLeft': CogOutline,
            'botRight': Pen,
            'group': 'workshop',
            'buttonLink': '/workshops/topics',
            navPointer: 0
        }
        window.addEventListener('wheel', this.debouncedScroll, true)
        window.addEventListener('touchstart', this.startTouch, false);
        window.addEventListener('touchmove', this.moveTouch, false);

        this.updateStore();

    }

    componentWillUnmount() {
        //remove scroll & swipe listeners
        window.removeEventListener('wheel', this.debouncedScroll, true);
        window.removeEventListener('touchstart', this.startTouch, true);
        window.removeEventListener('touchmove', this.moveTouch, true);
    }

    componentDidUpdate() {
        //change theme based on page
        this.updateStore();
    }

    initialX = null;
    startTouch = (e) => {
        this.initialX = e.touches[0].clientX;
    };
    moveTouch = (e) => {
        if (this.initialX === null) {
            return;
        }
        var currentX = e.touches[0].clientX;
        var diffX = this.initialX - currentX;
        // sliding horizontally
        if (diffX > 0) {
            // swiped left
            this.debouncedSwipe('left');
        } else {
            // swiped right
            this.debouncedSwipe('right');
        }
        this.initialX = null;
        this.initialY = null;
        e.preventDefault();
    };
    swipeToChangePages = (swipeDirection) => {
        if (swipeDirection === 'right') {

            //pointer++
            this.changePointer('add');

            //change state
            this.checkPage();

            //replay animations
            this.restartAnimations();
        }

        if (swipeDirection === 'left') {

            //pointer--
            this.changePointer('minus');

            //change state
            this.checkPage();

            //replay animations
            this.restartAnimations();
        }
    }

    scrollToChangePages = (scrollingDirection) => {
        if (scrollingDirection.deltaY > 2) {

            //pointer++
            this.changePointer('add');

            //update state
            this.checkPage();

            //replay animations
            this.restartAnimations();
        }

        if (scrollingDirection.deltaY < -2) {

            //pointer--
            this.changePointer('minus');

            //change state
            this.checkPage();

            //replay animations
            this.restartAnimations();
        }
    }

    //delay between repeatition : 80
    debouncedScroll = debounce((e) => this.scrollToChangePages(e), 80);
    debouncedSwipe = debounce((e, swipeDirection) => this.swipeToChangePages(e, swipeDirection), 80);

    updateStore = () => {

        store.dispatch(
            { type: 'change_Color', payload: { color: this.state.group } }
        );
    }


    changePointer = (type) =>
        type === 'add' ?
            this.setState(prevState =>
                (prevState.navPointer === 4 ?
                    { 'navPointer': 0 } :
                    { 'navPointer': prevState.navPointer + 1 })
            ) :
            type === 'minus' ?
                this.setState(prevState =>
                    (prevState.navPointer === 0 ?
                        { 'navPointer': 4 } :
                        { 'navPointer': prevState.navPointer - 1 })) : ''



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

    svgTopLeftAnimation = anime({
        targets: '.svgFam__topLeft',

        complete: () =>
            this.rotateAnimation('.svgFam__topLeft')

        ,
        easing: 'linear'
    })

    svgTopRightAnimation = anime({
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

    svgBotRightAnimation = anime({
        targets: '.svgFam__botRight',

        complete: () =>
            this.rotateAnimation('.svgFam__botRight')
        ,
        easing: 'linear'
    });

    svgBotLeftAnimation = anime({
        targets: '.svgFam__botLeft',

        complete: () =>
            this.rotateAnimation('.svgFam__botLeft'),
        easing: 'linear'
    });


    svgCenterAnimation = anime({

        complete: () => anime({
            targets: '.svgFam__center',
            translateY: 50,
            loop: true,
            direction: 'alternate',
            duration: 2000,
            easing: 'linear'
        })
    });

    buttonAnimation = () => {
        anime({
            targets: '.myButton',
            opacity: [0, 1],
            duration: 3000,
            easing: 'spring(1, 80, 10, 0)',
        })
    }

    restartAnimations = () => {


        this.svgTopRightAnimation.restart();
        this.svgBotRightAnimation.restart();
        this.svgBotLeftAnimation.restart();
        this.svgCenterAnimation.restart();
        this.svgTopLeftAnimation.restart();
        this.buttonAnimation();
    }

    checkPage = () => {
        this.state.navPointer === 0 ? this.setState({
            'Title': 'Workshops',
            'paragraph': <p>  Introducing a technology in a hands-on session.<br /><i>Showcase your Laptop Stickers!</i></p>,
            'topLeft': Cog,
            'topRight': Tool,
            'center': Laptop,
            'botLeft': CogOutline,
            'botRight': Pen,
            'group': 'workshop',
            'buttonLink': '/workshops/topics'
        }) :
            this.state.navPointer === 1 ? this.setState({
                'Title': 'Talks',
                'paragraph': <p> We're talking about tools.<br /><i>We also exchange swag!</i></p>,
                'topLeft': Microphone,
                'topRight': Hand,
                'center': whiteBoard,
                'botLeft': MicrophoneOutlineSvg,
                'botRight': Ruby,
                'group': 'talk',
                'buttonLink': '/talks/topics'
            }) :
                this.state.navPointer === 2 ? this.setState({
                    'Title': 'Events',
                    'paragraph': <p>  Conferences & events where I was a coordinator or had an amazing experience meeting new people and
                        learning new things!
                    </p>,
                    'topLeft': University,
                    'topRight': Beer,
                    'center': Networking,
                    'botLeft': UniversityOutline,
                    'botRight': ConfCard,
                    'group': 'event',
                    'buttonLink': '/events/archive'
                }) :
                    this.state.navPointer === 3 ? this.setState({
                        'Title': `Stella's Facts`,
                        'paragraph': <p>Several things about me and the things I enjoy the most.<br /><i>Purple is of course, one of them!</i></p>,
                        'topLeft': Idea,
                        'topRight': Smile,
                        'center': Reading,
                        'botLeft': IdeaOutline,
                        'botRight': Coffee,
                        'group': 'stella',
                        'buttonLink': '/stellas-facts/about'
                    }) : this.setState({
                        'Title': 'Contact',
                        'paragraph': <p>  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>,
                        'topLeft': Papyrus,
                        'topRight': QuestionMark,
                        'center': MessageCloud,
                        'botLeft': PapyrusOutline,
                        'botRight': MessageFolder,
                        'group': 'contact',
                        'buttonLink': '/contact/form'
                    })
    }

    updatePointerClick = (num) => {
        this.setState({
            'navPointer': num
        },
            () => {
                this.checkPage();
                this.restartAnimations();
            })
    }




    render() {
        return (
            <Container id='MainNav' className='fade-in' fluid='true'>
                <Row>
                    <Col lg={{ span: 6, order: 'last' }} className='svgFam'>
                        <this.state.topLeft className='topLeft' />
                        <this.state.botLeft className='botLeft' />
                        <this.state.center className='center' />
                        <this.state.topRight className='topRight' />
                        <this.state.botRight className='botRight' />
                    </Col>
                    <Col lg={{ span: 6, order: 'first' }} className='workshopCon'>
                        <h1 className='workshopCon__Title'>{this.state.Title}</h1>
                        <span className='workshopCon__paragraph'>{this.state.paragraph}</span>
                        <Link to={this.state.buttonLink}><Button group={this.state.group} buttonText='Learn More!' /></Link>
                    </Col>
                </Row>


                <Row >
                    <Col className='bubbleGuide' xs='12'>
                        <h6><FontAwesomeIcon icon={faArrowLeft} /> Keep Swiping & Scrolling! <FontAwesomeIcon icon={faArrowRight} /></h6>
                        <span onClick={() => this.updatePointerClick(0)} className={'colourBubble-' + (this.state.group === 'workshop' ? 'workshop' : 'empty')} />
                        <span onClick={() => this.updatePointerClick(1)} className={'colourBubble-' + (this.state.group === 'talk' ? 'talk' : 'empty')} />
                        <span onClick={() => this.updatePointerClick(2)} className={'colourBubble-' + (this.state.group === 'event' ? 'event' : 'empty')}/>
                        <span onClick={() => this.updatePointerClick(3)} className={'colourBubble-' + (this.state.group === 'stella' ? 'stella' : 'empty')} />
                        <span onClick={() => this.updatePointerClick(4)} className={'colourBubble-' + (this.state.group === 'contact' ? 'contact' : 'empty')} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(CategoryNavigation);