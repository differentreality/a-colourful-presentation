import React from 'react';
import {WorkshopDetailedEvent} from '../../DetailedEvent';
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

const LinkArray = {title:'Useful Resources',
    links:[
    {
        url: 'https://docs.google.com/document/d/1kIxuhbnrw0elo-dYsc3UzYIbbowqogbWtAqUuw50JoI/edit?usp=sharing',
        text: 'Notes'
    },
    {
        url: 'https://guides.rubyonrails.org/routing.html',
        text: 'More about routing'
    },
    {
        url: 'https://guides.rubyonrails.org/active_record_querying.html',
        text: 'Talk with the DB from Rails'
    }]
}


const images = [
    rorpt2poster,
    railspt2_img2,
    railspt2_img3,
    railspt2_img4,
    railspt2_img5
]
const stages = [
    'eat guacamole and cheese','drink water','sleep late sleep late'
]

const imageCaptions = ['lorem','lorem','lorem','lorem','lorem']

const eventData =
    {
        title:'Ruby on Rails part2',
        date:'05/05/2019',
        details:'Diving into the magic of Rails, learning useful Ruby and Rails methods, and developing our own web application.',
        group:'workshop',
        topic:'RoR',
        poster:images[0],
        slides:'https://drive.google.com/file/d/1sGbshBw8I-FivU5bp4pxhN0ToSTc4PNK/view?usp=sharing',
        socialEvent:'https://www.facebook.com/events/388372688425553/',
        links:[LinkArray],
        svg:Git,
        cheatsheet,
        codeSnippets:[codesnippets,codesnippets],
        images,
        imageCaptions,
        downloadLinks,
        stages

    }


const Ror1ateith = (props)=><WorkshopDetailedEvent mobile={props.mobile} group='workshop' data={eventData}/>

export default Ror1ateith;
