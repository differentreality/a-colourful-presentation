import React from 'react';
import {WorkshopDetailedEvent} from '../../DetailedEvent';
import AllGit19_101_poster from '../../../../Photos/allgit2019/allgit_2019_poster.png'
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
        title:'allGit 101',
        date:'08/12/2019',
        details:'An introduction to git basic commands and workflows, with an after-flavor of GitHub',
        group:'workshop',
        topic:'git',
        poster:AllGit19_101_poster,
        slides:'',
        socialEvent:'',
        links:[],
        svg:Git,
        cheatsheet,
        codeSnippets:[codesnippets,codesnippets],
        images,
        imageCaptions,
        downloadLinks,
        stages
    }

const AllGit2019_101 = (props)=><WorkshopDetailedEvent mobile={props.mobile} group='workshop' data={eventData}/>

export default AllGit2019_101;
