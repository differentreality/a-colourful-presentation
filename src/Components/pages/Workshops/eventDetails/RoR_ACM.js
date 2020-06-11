import React from 'react';
import {WorkshopDetailedEvent} from '../../DetailedEvent'
import poster from '../../../../Photos/ror_acm/ror_acm_banner.jpg'

import { Ruby } from '../../../../svg/topics/topicsSvg';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../../../Photos/ror_acm/', false, /\.(png|jpe?g|svg|JPE?G)$/));

const codesnippet_basics=<div>
  <div> <span className='codeSnippet__code-Comment'>Serve your application </span> </div>
  <div>
    <span className='codeSnippet__code-Command'>rails s</span>
    <span className='codeSnippet__code-Comment'>erver</span>
  </div>
  <div> <span className='codeSnippet__code-Comment'>Use rails console </span> </div>
  <div>
    <span className='codeSnippet__code-Command'>rails c</span>
    <span className='codeSnippet__code-Comment'>onsole</span>
  </div>
  <div>
    <span className='codeSnippet__code-Comment'>Create new entity (all MVC structure)</span>
  </div>
  <div>
    <span className='codeSnippet__code-Command'>rails g scaffold </span>
    <span className='codeSnippet__code-Input'> User name:string address:text</span>
  </div>
  <div>
    <span className='codeSnippet__code-Comment'>Apply changes to database</span>
  </div>
  <div>
    <span className='codeSnippet__code-Command'>rails db:migrate</span>
  </div>
  <div>
    <span className='codeSnippet__code-Comment'>Add new gems</span>
    <span className='codeSnippet__code-Comment'>Add gem names in Gemfile and run</span>
  </div>
  <div>
    <span className='codeSnippet__code-Command'>bundle install</span>
  </div>
</div>


const codesnippet_new_entity=<div>
<div>
    <span className='codeSnippet__code-Comment'>Create a new rails project </span>
</div>
<div>
    <span className='codeSnippet__code-Command'>rails g scaffold </span>
    <span className='codeSnippet__code-Input'> Course name:string description:text semester:integer</span>
</div>

<div> <span className='codeSnippet__code-Comment'>Add new attribute color to Course model </span> </div>
<div>
  <span className='codeSnippet__code-Command'>rails g migration </span>
  <span className='codeSnippet__code-Input'>AddColorToCourses color:string</span>
</div>
<div> <span className='codeSnippet__code-Comment'>Apply changes to database </span> </div>
<div> <span className='codeSnippet__code-Command'>rails db:migrate</span> </div>

</div>

const codesnippet_rails=<div>
<div>
    {/* eslint-disable-next-line*/}
    <span className='codeSnippet__code-Comment'>// Create a new rails project </span>
</div>
<div>
    <span className='codeSnippet__code-Command'>rails new </span>
    <span className='codeSnippet__code-Input'> learning -T</span>
</div>
<div>
    <span className='codeSnippet__code-Command'>cd </span>
    <span className='codeSnippet__code-Input'>learning </span>
</div>
<div>
    <span className='codeSnippet__code-Comment'>// Optionally use HAML</span>
</div>
<div>
    <span className='codeSnippet__code-Comment'>Add the following line inside file Gemfile</span>
</div>
<div>
    <span className='codeSnippet__code-Command'>gem </span>
    <span className='codeSnippet__code-Input'>'haml-rails'</span>
</div>
<div>
    <span className='codeSnippet__code-Comment'>// Add RSPEC for testing </span>
</div>
<div>
    <span className='codeSnippet__code-Command'>gem </span>
    <span className='codeSnippet__code-Input'>'rspec'</span>
</div>
<div><span className='codeSnippet__code-Comment'>Apply the changes of Gemfile </span></div>

<div><span className='codeSnippet__code-Command'>bundle install </span></div>
<div><span className='codeSnippet__code-Comment'>Start the rails server </span></div>
<div><span className='codeSnippet__code-Command'>rails s </span></div>
</div>

const downloadLinks=[]

const cheatsheet=[
    { title: 'MVC',
      commands: [
        {
          command: 'Model',
          use: 'Represents the entities of the application and is directly connected to the database'
        },
        { command: 'View',
          use: 'View files hold the HTML code that creates the content we serve on the browser'
        },
        { command: 'Controller',
          use: 'Glues everything together, calls the model, performs actions on the entities, redirects appropriately'
        }
      ]
    },
    {
        title:'Key Concepts',
        commands: [
          {
            command: 'CRUD',
            use: 'Default actions - Create Read Update Destroy'
          },
          {
            command: 'DRY',
            use: "Don't Repeat Yourself"
          }
        ]
    },
    {
        title:'Get started!',
        commands: [
          {
            command: 'rails server',
            use:'start the rails server to serve your application'
          },
          {
            command: 'rails console',
            use: 'Fire up the rails console and try rails stuff!'
          }
        ]
    }
  ]

const LinkArrayBasics = { title:'Learn!',
    links:[
    {
        url: 'https://ruby.github.io/TryRuby/',
        text: 'Ruby Online!'
    },
    {
        url: 'https://guides.rubyonrails.org/',
        text: 'Rails guides'
    },
    ]
}

const LinkArrayMore = {
  title: 'More',
  links: [
    {
        url: 'http://events.stellarouzi.com/#/workshops/topics/RoR/RoR_ACM',
        text: 'This page!'
    },
    {
      url: 'https://events.stellarouzi.com/#/workshops/topics/git/GitZeroToHero',
      text: 'Help with git'
    }
  ]
}

const LinkArrayWorkshop = { title:'Workshop',
    links:[
    {
      url: 'https://paiza.cloud/signup',
      text: 'Coding Platform'
    },
    {
      url: 'https://gitlab.com/LearnWithStella/learning',
      text: 'Repo with code'
    }
    ]
}

const imageCaptions = ['lorem','lorem','lorem','lorem','lorem']

const stages = [
    // 'eat guacamole and cheese','drink water','sleep late sleep late'
]
const eventData =
    {
        title:'Intro to Ruby On Rails',
        date:'13 & 16 December 2019, 16:00 - 19:00',
        details:
        <div> Create a functional web application in under 5 minutes!
        <p> Let Rails work its magic for you, and get started with your our own web application. We will be building a web application for uploading notes to academic courses.</p></div>,
        group:'workshop',
        topic:'RoR',
        poster:poster,
        slides:'https://drive.google.com/file/d/1r-NcsGnHTe34gUiaQZLDT8Tnaw7_CnKs/view?usp=sharing',
        socialEvent:'https://www.facebook.com/events/2479975785560737',
        links:[LinkArrayBasics, LinkArrayWorkshop, LinkArrayMore],
        svg:Ruby,
        cheatsheet,
        codeSnippets:[
          { title: 'Basics',
            codesnippets: codesnippet_basics
          },
          {
            title:'New Rails Application',
            codesnippets: codesnippet_rails
          },
          {
            title: 'Add Entity',
            codesnippets: codesnippet_new_entity
          },

        ],
        images,
        stages,
        imageCaptions,
        downloadLinks
    }


const RorAcm = (props)=><WorkshopDetailedEvent mobile={props.mobile} group='workshop' data={eventData}/>

export default RorAcm;
