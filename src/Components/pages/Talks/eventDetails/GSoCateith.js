import React from 'react';
import {TalkEventDetails} from '../../DetailedEvent';
import gsoc_ateith_poster from '../../../../Photos/gsocateith/gsoc_ateith_poster.jpg'
import GSoCateith2 from '../../../../Photos/gsocateith/GSoCateith2.JPG';
import GSoCateit3 from '../../../../Photos/gsocateith/GSoCateith3.JPG';
import GSoCateit4 from '../../../../Photos/gsocateith/GSoCateith4.JPG';
import GSoCateith5 from '../../../../Photos/gsocateith/GSoCateith5.JPG';






const LinkArray = {title:'Title',
    links:[
      {
        url: 'https://summerofcode.withgoogle.com/',
        text: 'Official Page'
      },
      {
        url: 'https://summerofcode.withgoogle.com/organizations/',
        text: 'Organizations'
      },
      {
        url: 'https://discordapp.com/channels/319063243136040962/319063243136040962',
        text: 'Discord channel for Greek students'
      }
    ]
}

const images = [gsoc_ateith_poster,
GSoCateith2,
GSoCateit3,
GSoCateit4,
GSoCateith5
]

const imageCaptions=['lorem','lorem','lorem','lorem','lorem']

const eventData =
    {
        title:'What is Google Summer of Code?',
        date:'06/03/2019',
        details:'Overall information about the program, typical requirements, who is eligible to participate, and how you can make it happen for yourself!',
        group:'talk',
        topic:'GSoC',
        poster:images[0],
        slides:'https://drive.google.com/open?id=1FJ86IQZ_OSM_hkaCXJNp7quS4qiTrK5Z',
        socialEvent:'https://www.facebook.com/events/327352731237624/',
        links:[LinkArray],
        images,
        imageCaptions

    }


const GSoCateith = (props)=><TalkEventDetails mobile={props.mobile} group={eventData.group} data={eventData}/>

export default GSoCateith;
