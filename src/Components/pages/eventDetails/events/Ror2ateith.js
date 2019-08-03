import React from 'react';
import {WorkshopDetailedEvent} from '../DetailedEvent';
import railspt2_img2 from '../../../../Photos/railspt2ateith/Rorateithpt2_1.JPG'
import railspt2_img3 from '../../../../Photos/railspt2ateith/Rorateithpt2_2.JPG'
import railspt2_img4 from '../../../../Photos/railspt2ateith/Rorateithpt2_3.JPG'
import railspt2_img5 from '../../../../Photos/railspt2ateith/Rorateithpt2_4.JPG'
import rorpt2poster from '../../../../Photos/railspt2ateith/rorpt2poster.jpg'

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


const images = [
    { src: rorpt2poster, caption: 'caption caption caption' },
    { src: railspt2_img2, caption: 'caption caption caption' },
    { src: railspt2_img3, caption: 'caption caption caption' },
    { src: railspt2_img4, caption: 'caption caption caption' },
    { src: railspt2_img5, caption: 'caption caption caption' }
]

const eventData = 
    {
        title:'Ruby on Rails part2',
        date:'05/05/2019',
        details:'lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem',
        group:'workshop',
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


const Ror1ateith = (props)=><WorkshopDetailedEvent mobile={props.mobile} group='workshop' data={eventData}/>

export default Ror1ateith;