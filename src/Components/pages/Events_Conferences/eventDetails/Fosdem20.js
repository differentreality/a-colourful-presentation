import React from 'react';
import {TalkEventDetails} from '../../DetailedEvent';
import git101poster from '../../../../Photos/git101ateith/git101poster.jpg'
import gitMpratsa from '../../../../Photos/git101ateith/gitMpratsa.JPG';
import gitPeople from '../../../../Photos/git101ateith/gitPeople.JPG';
import gitStella from '../../../../Photos/git101ateith/gitStella.JPG';
import gitNasia from '../../../../Photos/git101ateith/gitNasia.JPG';
import fosdem_banner from '../../../../Photos/fosdem/fosdem_banner.png'
import { Git } from '../../../../svg/topics/topicsSvg';



const LinkArray = {title:'Title',
    links:[]
}

const images = [fosdem_banner]

 const imageCaptions=['','','','','']

const eventData =
    {
        title:'FOSDEM20',
        date:'1-2 Feb. 2020',
        details:'A free event for software developers to meet, share ideas and collaborate.',
        group:'event',
        topic:'FOSDEM',
        poster:images[0].src,
        slides:'',
        socialEvent:'',
        links:[LinkArray],
        svg:Git,
        images,
        imageCaptions,
    }


const Fosdem20 = (props)=><TalkEventDetails mobile={props.mobile} group={eventData.group} data={eventData}/>

export default Fosdem20;
