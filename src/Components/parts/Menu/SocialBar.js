import React from 'react';
import Facebook from '../../../svg/Social/Facebook';
import Instagram from '../../../svg/Social/Instagram';
import Github from '../../../svg/Social/Github';
import Gitlab from '../../../svg/Social/Gitlab';
import LinkedIn from '../../../svg/Social/LinkedIn';
import { Col } from 'react-bootstrap';

// TODO: analoga me to router,allakse xroma
const SocialBar = () => {
    var social = [
        {
            'link' : 'https://www.facebook.com/differentreality',
            'icon' : Facebook
        },
        {
            'link' : 'https://www.instagram.com/differentrealitystella/',
            'icon' : Instagram
        },
        {
            'link' : 'https://linkedin.com/in/differentreality',
            'icon' : LinkedIn
        },
        {
            'link' : 'https://gitlab.com/differentreality',
            'icon' : Gitlab
        },
        {
            'link' : 'https://github.com/differentreality',
            'icon' : Github
        }
    ]
    return <Col className='socialCol' xl={{ span: 5, offset: 7 }} lg={{ span: 6, offset: 6 }} md={{ span:7, offset: 5 }}  >

    {social.map((smedia)=><a rel="noopener noreferrer" target="_blank" href={smedia.link}><smedia.icon/></a>)}
    </Col>
}

export default SocialBar;