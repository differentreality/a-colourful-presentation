import React from 'react';
import {WorkshopDetailedEvent} from '../../DetailedEvent';
import git101poster from '../../../../Photos/git101ateith/git101poster.jpg'
import gitMpratsa from '../../../../Photos/git101ateith/gitMpratsa.JPG';
import gitPeople from '../../../../Photos/git101ateith/gitPeople.JPG';
import gitStella from '../../../../Photos/git101ateith/gitStella.JPG';
import gitNasia from '../../../../Photos/git101ateith/gitNasia.JPG';
import { Git } from '../../../../svg/topics/topicsSvg';


const codesnippets=<div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// install Docker</span>
    <a href=' https://docs.docker.com/docker-for-windows/install/' className='codeSnippet__code-Link'> https://docs.docker.com/docker-for-windows/install/</a>
</div>       
<div>        
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// Create a new Folder </span>
    <span className='codeSnippet__code-Command'>mkdir </span>
    <span className='codeSnippet__code-Input'>rails_workshop && </span>
    <span className='codeSnippet__code-Command'>cd </span>
    <span className='codeSnippet__code-Input'>rails_workshop </span>
</div>
<div>
    <span className='codeSnippet__code-Command'>docker run </span> 
    <span className='codeSnippet__code-Input'>-ti -v "$PWD":/rails_workshop --name rails_workshop -p 3000:3000 ruby bash</span>
</div>
<div>
    <span className='codeSnippet__code-Command'>cd </span> 
    <span className='codeSnippet__code-Input'>rails_workshop </span>
</div>
<div>
    <span className='codeSnippet__code-Command'>gem </span> 
    <span className='codeSnippet__code-Input'>install rails --version 5.0.0 </span>
     {/* eslint-disable-next-line*/} 
    <span className='codeSnippet__code-Comment'>//This may take a while!</span>
</div>
</div>

const downloadLinks=[
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

const cheatsheet=[
    {
        title:'yeet',
        command:'git pull',
        use:'updates the local project'},
    {
        title:'yeet',
        command:'git pull',
        use:'updates the local project'
    },
    {
        title:'yeet',
        command:'git pull',
        use:'updates the local project'
    },
    {
        title:'yeet',
        command:'git pull',
        use:'updates the local project'
    },
    {
        title:'yeet',
        command:'git pull',
        use:'updates the local project'
    },
    {
        title:'yeet',
        command:'git pull',
        use:'updates the local project'
    }
]

const stages = [
    'eat guacamole and cheese','drink water','sleep late sleep late'
]   
const LinkArray = {title:'Titxle',
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

const images = [ git101poster,gitNasia,gitMpratsa,gitPeople, gitStella]
const imageCaptions=['lorem','lorem','lorem','lorem','lorem']
const eventData = 
    {
        title:'git101',
        date:'06/05/2019',
        details:'lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem',
        group:'workshop',
        topic:'git',
        poster:images[0],
        slides:'https://docs.google.com/presentation/d/1EQo6aQmxGQ-HV1Q7ZTpbSTBzhoIwOmkffHM9r6ji5lM/edit?usp=sharing',
        socialEvent:'https://www.facebook.com/events/455650285188880/',
        links:[LinkArray,LinkArray,LinkArray],
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