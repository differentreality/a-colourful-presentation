import React from 'react';
import {WorkshopDetailedEvent} from '../../DetailedEvent';
import poster from '../../../../Photos/GitZeroToHero/git-zero-hero-poster.png'
import { Git } from '../../../../svg/topics/topicsSvg';

function importAll(r) {
    return r.keys().map(r);
}

const images = [];
// importAll(require.context('../../../../Photos/git101ateith/', false, /\.(png|jpe?g|svg|JPE?G)$/));

const codesnippets=<div></div>

const downloadLinks=[
]

const cheatsheet=[]

const stages = [
    // 'eat guacamole and cheese','drink water','sleep late sleep late'
]

const LinkArray = {title:'Title',
    links:[]
}

const imageCaptions=['lorem','lorem','lorem','lorem','lorem']
const eventData =
    {
        title:'Git: from Zero to Hero!',
        date: '08 & 15 Dec. 2019',
        details: <div><p>Hands on the #1 tool of every development team. </p>
        <p> <b>Git 101 on 8/12 14:30 - 18:00</b> <br />
        An introduction to git basic commands and workflows, with an after-flavor of GitHub<br/>
        - Basic techniques for version control<br/>
        - Collaboration made easier with git<br/>
        - Publish your code on GitHub<br/>
        - Contribute to open sourc projects
        </p>

        <p>
          <b>Git 102 on 15/12 15:00 - 18:00 </b><br/>
          Practicing what we learning and diving into more advanced scenarios.<br/>
          - Workinig with multiple branches, and how to merge them<br/>
          - Conflict resolution<br/>
          - Undo your changes from any state
        </p>
        </div>,
        group:'workshop',
        topic:'git',
        poster:poster,
        slides:'',
        socialEvent:'https://www.facebook.com/events/1405170809644106',
        links:[],
        svg:Git,
        cheatsheet,
        codeSnippets:[codesnippets,codesnippets],
        images,
        imageCaptions,
        downloadLinks,
        stages
    }

const GitZeroToHero = (props)=><WorkshopDetailedEvent mobile={props.mobile} group='workshop' data={eventData}/>

export default GitZeroToHero;
