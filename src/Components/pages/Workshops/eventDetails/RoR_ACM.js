import React from 'react';
import {WorkshopDetailedEvent} from '../../DetailedEvent'
import poster from '../../../../Photos/ror_acm/ror_acm_banner.jpg'

import { Ruby } from '../../../../svg/topics/topicsSvg';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../../../Photos/ror_acm/', false, /\.(png|jpe?g|svg|JPE?G)$/));


const codesnippet_docker=<div>
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


const codesnippet_rails=<div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// Create a Rails web application</span>
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
    <span className='codeSnippet__code-Command'>rails new </span>
    <span className='codeSnippet__code-Input'> schedule -T</span>
</div>
<div>
    <span className='codeSnippet__code-Command'>cd </span>
    <span className='codeSnippet__code-Input'>schedule </span>
</div>
<div>
    <span className='codeSnippet__code-Comment'>edit Gemfile and add </span>
    <span className='codeSnippet__code-Command'>gem </span>
    <span className='codeSnippet__code-Input'> 'haml-rails' </span>
</div>


<div>
    <span className='codeSnippet__code-Command'>bundle install </span>
     {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// This may take a while!</span>
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
        title:'Architectural pattern',
        commands: [{command: 'MVC', use:'Model View Controller'}]
    },
    {
        title:'Get started!',
        commands: [
          {
            command: 'rails server',
            use:'start the rails server to serve your application'
          }
        ]
    },
    {
        title:'Basic actions',
        commands: [
          {
            command: 'CRUD',
            use:'Create Read Update Destroy'
          }
        ]
    },

    {
        title:'Try Rails stuff',
        commands: [
          {
            command:'rails console',
            use:'Fire up the rails console'
          }
        ]
    },

    {
        title:'yeet',
        commands: [
          {
            command:'git pull',
            use:'updates the local project'
          }
        ]
    }
]

const LinkArrayRuby = { title:'Ruby',
    links:[
    {
        url: 'https://ruby.github.io/TryRuby/',
        text: 'Learn Online!'
    },
    ]
}

const LinkArrayRails = { title:'Rails',
    links:[
    {
        url: 'https://guides.rubyonrails.org/',
        text: 'Official guides'
    },
    ]
}

const LinkArrayWorkshop = { title:'Workshop',
    links:[
    {
      url: 'https://paiza.cloud/signup',
      text: 'Coding Platform'
    },
    {
        url: 'http://events.stellarouzi.com/#/workshops/topics/RoR/RoR_ACM',
        text: 'This page!'
    },
    ]
}

const imageCaptions = ['lorem','lorem','lorem','lorem','lorem']

const stages = [
    'eat guacamole and cheese','drink water','sleep late sleep late'
]
const eventData =
    {
        title:'Intro to Ruby On Rails',
        date:'13 & 16 December 2019, 16:00 - 19:00',
        details:'Create a fully functional web application in under 5 minutes. Let Rails work its magic for you, and get started with your our own web application. We will be building a web application for uploading notes for academic courses.',
        group:'workshop',
        topic:'RoR',
        poster:poster,
        slides:'',
        socialEvent:'https://www.facebook.com/events/2479975785560737',
        links:[LinkArrayRuby,LinkArrayRails,LinkArrayWorkshop],
        svg:Ruby,
        cheatsheet,
        codeSnippets:[codesnippet_docker,codesnippet_rails],
        images,
        stages,
        imageCaptions,
        downloadLinks
    }


const RorAcm = (props)=><WorkshopDetailedEvent mobile={props.mobile} group='workshop' data={eventData}/>

export default RorAcm;
