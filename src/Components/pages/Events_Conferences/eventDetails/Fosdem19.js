import React from 'react';
import {TalkEventDetails} from '../../DetailedEvent';
import git101poster from '../../../../Photos/git101poster.jpg'
import gitMpratsa from '../../../../Photos/gitMpratsa.JPG';
import gitPeople from '../../../../Photos/gitPeople.JPG';
import gitStella from '../../../../Photos/gitStella.JPG';
import gitNasia from '../../../../Photos/gitNasia.JPG';
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

const images = [{ src: git101poster, caption: 'caption caption caption' },
{ src: gitNasia, caption: 'caption caption caption' },
{ src: gitMpratsa, caption: 'caption caption caption' },
{ src: gitPeople, caption: 'caption caption caption' },
{ src: gitStella, caption: 'caption caption caption' }
]

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
        cheatsheet,
        codeSnippets:[codesnippets,codesnippets],
        images,
        downloadLinks
    }


const Fosdem19 = (props)=><TalkEventDetails mobile={props.mobile} group={eventData.group} data={eventData}/>

export default Fosdem19;