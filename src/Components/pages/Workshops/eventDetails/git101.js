import React from 'react';
import {WorkshopDetailedEvent} from '../../DetailedEvent';
import git101poster from '../../../../Photos/git101ateith/git101poster.jpg'
import gitMpratsa from '../../../../Photos/git101ateith/gitMpratsa.JPG';
import gitPeople from '../../../../Photos/git101ateith/gitPeople.JPG';
import gitStella from '../../../../Photos/git101ateith/gitStella.JPG';
import gitNasia from '../../../../Photos/git101ateith/gitNasia.JPG';
import { Git } from '../../../../svg/topics/topicsSvg';


const codesnippets=<div></div>

const downloadLinks=[
]

const cheatsheet=[]

const stages = [
    // 'eat guacamole and cheese','drink water','sleep late sleep late'
]

const LinkArray = {title:'Titxle',
    links:[]
}

const images = [ git101poster,gitNasia,gitMpratsa,gitPeople, gitStella]
const imageCaptions=['lorem','lorem','lorem','lorem','lorem']
const eventData =
    {
        title:'git101',
        date:'06/05/2019',
        details:'An introduction to git basic commands and workflows, with an after-flavor of GitHub',
        group:'workshop',
        topic:'git',
        poster:images[0],
        slides:'https://docs.google.com/presentation/d/1EQo6aQmxGQ-HV1Q7ZTpbSTBzhoIwOmkffHM9r6ji5lM/edit?usp=sharing',
        socialEvent:'https://www.facebook.com/events/455650285188880/',
        links:[],
        svg:Git,
        cheatsheet,
        codeSnippets:[codesnippets,codesnippets],
        images,
        imageCaptions,
        downloadLinks,
        stages
    }

const Git101 = (props)=><WorkshopDetailedEvent mobile={props.mobile} group='workshop' data={eventData}/>

export {Git101};
