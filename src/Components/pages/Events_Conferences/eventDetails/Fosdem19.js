import React from 'react';
import {TalkEventDetails} from '../../DetailedEvent';
import git101poster from '../../../../Photos/git101ateith/git101poster.jpg'
import gitMpratsa from '../../../../Photos/git101ateith/gitMpratsa.JPG';
import gitPeople from '../../../../Photos/git101ateith/gitPeople.JPG';
import gitStella from '../../../../Photos/git101ateith/gitStella.JPG';
import gitNasia from '../../../../Photos/git101ateith/gitNasia.JPG';
import { Git } from '../../../../svg/topics/topicsSvg';



const LinkArray = {title:'Title',
    links:[
    {
        url: 'sadaaa',
        text: 'test test test'
    },
    {
        url: 'sadaaa',
        text: 'test'
    },
    {
        url: 'sadaaa',
        text: 'test'
    }]
}

const images = [git101poster,
 gitNasia,
 gitMpratsa,
 gitPeople,
 gitStella]

 const imageCaptions=['lorem','lorem','lorem','lorem','lorem']

const eventData = 
    {
        title:'git101',
        date:'06/05/2019',
        details:'lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem',
        group:'event',
        topic:'git',
        poster:images[0].src,
        slides:'https://docs.google.com/presentation/d/1EQo6aQmxGQ-HV1Q7ZTpbSTBzhoIwOmkffHM9r6ji5lM/edit?usp=sharing',
        socialEvent:'https://www.facebook.com/events/455650285188880/',
        links:[LinkArray,LinkArray,LinkArray],
        svg:Git,
        images,
        imageCaptions,
    }


const Fosdem19 = (props)=><TalkEventDetails mobile={props.mobile} group={eventData.group} data={eventData}/>

export default Fosdem19;