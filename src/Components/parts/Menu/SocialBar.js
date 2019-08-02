import React from 'react';
import { withRouter } from 'react-router-dom';
import { Facebook, Instagram, Github, Gitlab, LinkedIn } from '../../../svg/Social/SocialSvg';
import { Col } from 'react-bootstrap';
import {connect} from 'react-redux'
import anime from 'animejs/lib/anime.es.js';

class SocialBar extends React.PureComponent
{
    social = [
        {
            'link': 'https://www.facebook.com/differentreality',
            'icon': Facebook
        },
        {
            'link': 'https://www.instagram.com/differentrealitystella/',
            'icon': Instagram
        },
        {
            'link': 'https://linkedin.com/in/differentreality',
            'icon': LinkedIn
        },
        {
            'link': 'https://gitlab.com/differentreality',
            'icon': Gitlab
        },
        {
            'link': 'https://github.com/differentreality',
            'icon': Github
        }
    ]

     groupColour = (group) => {
        return group==='workshop' ? 'workshopSvgGradient':
        group==='talk' ? 'talkSvgGradient':
        group==='event' ? 'eventSvgGradient':
        group==='stella' ? 'stellaSvgGradient':
        group==='contact' ? 'contactSvgGradient' : 'stellaSvgGradient'
    }

    componentDidMount()
    {
        this.showcaseAnimation();
    }
    showcaseAnimation=()=>
    {
        anime.timeline()
        .add({
            targets: '.socialCol__link',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: function (el, i) {
                return 450 * (i + 1)
            }
        })
    }

    render(){
    return <Col className='socialCol fade-in' xl={{ span: 5, offset: 7 }} lg={{ span: 6, offset: 6 }} md={{ span: 7, offset: 5 }}  >

        {this.social.map((smedia, i) => <a rel="noopener noreferrer" key={i} className='socialCol__link' target="_blank" href={smedia.link}><smedia.icon group={(this.props.isMenuOpen?'menuOpenGradient':this.groupColour(this.props.color))} /></a>)}
    </Col>}
}

const mapStateToProps=(reducer) => {
    return ({color:reducer.color,isMenuOpen:reducer.isMenuOpen});
}

export default withRouter(connect(mapStateToProps)(SocialBar));