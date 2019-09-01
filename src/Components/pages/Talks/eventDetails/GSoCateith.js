import React from 'react';
import {TalkEventDetails} from '../../DetailedEvent';
import poster from '../../../../Photos/gsocateith/poster/gsoc_ateith_poster.jpg'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../../../Photos/git101ateith/', false, /\.(png|jpe?g|svg|JPE?G)$/));




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

const imageCaptions=['lorem','lorem','lorem','lorem','lorem']

const eventData =
    {
        title:'What is Google Summer of Code?',
        date:'06/03/2019',
        details:'Overall information about the program, typical requirements, who is eligible to participate, and how you can make it happen for yourself!',
        group:'talk',
        topic:'GSoC',
        poster:poster,
        slides:'https://drive.google.com/open?id=1FJ86IQZ_OSM_hkaCXJNp7quS4qiTrK5Z',
        socialEvent:'https://www.facebook.com/events/327352731237624/',
        links:[LinkArray],
        images,
        imageCaptions
    }


const GSoCateith = (props)=><TalkEventDetails mobile={props.mobile} group={eventData.group} data={eventData}/>

export default GSoCateith;
