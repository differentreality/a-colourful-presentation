import React from 'react';
import {WorkshopDetailedEvent} from '../../DetailedEvent'
import railspt1_img2 from '../../../../Photos/railspt1ateith/railspt1_img2.JPG'
import railspt1_img3 from '../../../../Photos/railspt1ateith/railspt1_img3.JPG'
import railspt1_img4 from '../../../../Photos/railspt1ateith/railspt1_img4.JPG'
import railspt1_img5 from '../../../../Photos/railspt1ateith/railspt1_img5.JPG'
import rorpt1poster from '../../../../Photos/railspt1ateith/rorpt1poster.jpg'

import { Ruby } from '../../../../svg/topics/topicsSvg';

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

const images = [rorpt1poster,railspt1_img2,railspt1_img3,railspt1_img4,railspt1_img5]
const imageCaptions = ['lorem','lorem','lorem','lorem','lorem']

const eventData = 
    {
        title:'Intro to Ruby On Rails',
        date:'06/05/2019',
        details:'lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem',
        group:'workshop',
        topic:'RoR',
        poster:images[0],
        slides:'https://docs.google.com/presentation/d/1EQo6aQmxGQ-HV1Q7ZTpbSTBzhoIwOmkffHM9r6ji5lM/edit?usp=sharing',
        socialEvent:'https://www.facebook.com/events/455650285188880/',
        links:[LinkArray,LinkArray,LinkArray],
        svg:Ruby,
        cheatsheet,
        codeSnippets:[codesnippets,codesnippets],
        images,
        imageCaptions,
        downloadLinks
    }


const Ror1ateith = (props)=><WorkshopDetailedEvent mobile={props.mobile} group='workshop' data={eventData}/>

export default Ror1ateith;