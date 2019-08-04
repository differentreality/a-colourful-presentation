import React from 'react';
import {TalkEventDetails} from '../../DetailedEvent';
import gsoc_ateith_poster from '../../../../Photos/gsocateith/gsoc_ateith_poster.jpg'
import GSoCateith2 from '../../../../Photos/gsocateith/GSoCateith2.JPG';
import GSoCateit3 from '../../../../Photos/gsocateith/GSoCateith3.JPG';
import GSoCateit4 from '../../../../Photos/gsocateith/GSoCateith4.JPG';
import GSoCateith5 from '../../../../Photos/gsocateith/GSoCateith5.JPG';






const LinkArray = [
    {
        url: 'sadaaa',
        text: 'test'
    },
    {
        url: 'sadaaa',
        text: 'test'
    },
    {
        url: 'sadaaa',
        text: 'test'
    }
]

const images = [{ src: gsoc_ateith_poster, caption: 'caption caption caption' },
{ src: GSoCateith2, caption: 'caption caption caption' },
{ src: GSoCateit3, caption: 'caption caption caption' },
{ src: GSoCateit4, caption: 'caption caption caption' },
{ src: GSoCateith5, caption: 'caption caption caption' }
]

const eventData = 
    {
        title:'git101',
        date:'06/05/2019',
        details:'lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem',
        group:'talk',
        topic:'GSoC',
        poster:images[0].src,
        slides:'https://docs.google.com/presentation/d/1EQo6aQmxGQ-HV1Q7ZTpbSTBzhoIwOmkffHM9r6ji5lM/edit?usp=sharing',
        socialEvent:'https://www.facebook.com/events/455650285188880/',
        links:[LinkArray,LinkArray,LinkArray],
        images,
      
    }


const GSoCateith = (props)=><TalkEventDetails mobile={props.mobile} group={eventData.group} data={eventData}/>

export default GSoCateith;