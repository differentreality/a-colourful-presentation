import React from 'react';
import {TalkEventDetails} from '../../DetailedEvent';
import poster from '../../../../Photos/gsoc19/gsoc_2019_poster.png'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../../../Photos/gsoc19/', false, /\.(png|jpe?g|svg|JPE?G)$/));




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
        title:'How to be part of Google Summer of Code?',
        date:'04/12/2019',
        details:'A presentation by mentees for students who want to particate in GSoC',
        group:'talk',
        topic:'GSoC',
        poster:poster,
        slides:'#',
        socialEvent:'https://www.facebook.com/events/424817748186720',
        links:[LinkArray],
        images,
        imageCaptions
    }


const GSoC2019 = (props)=><TalkEventDetails mobile={props.mobile} group={eventData.group} data={eventData}/>

export default GSoC2019;
