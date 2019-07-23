import React from 'react';
import { withRouter } from 'react-router-dom';
import { Facebook, Instagram, Github, Gitlab, LinkedIn } from '../../../svg/Social/SocialSvg';
import { Col } from 'react-bootstrap';

const SocialBar = (props) => {
    var social = [
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

    const groupColour = (url) => {
        return (/(\/workshops.*)/g).test(url) ? 'workshopSvgGradient':
        (/(\/talks.*)/g).test(url) ? 'talkSvgGradient':
        (/(\/events.*)/g).test(url) ? 'eventSvgGradient':
        (/(\/stellas-facts.*)/g).test(url) ? 'stellaSvgGradient':
        (/(\/contact.*)/g).test(url) ? 'contact' : 'contactSvgGradient'
    }

    return <Col className='socialCol' xl={{ span: 5, offset: 7 }} lg={{ span: 6, offset: 6 }} md={{ span: 7, offset: 5 }}  >

        {social.map((smedia, i) => <a rel="noopener noreferrer" key={i} target="_blank" href={smedia.link}><smedia.icon group={groupColour(props.location.pathname)} /></a>)}
    </Col>
}

export default withRouter(SocialBar);