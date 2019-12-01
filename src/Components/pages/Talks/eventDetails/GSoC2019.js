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
        details: "To Google Summer of Code (GSoC) είναι η καλύτερη ευκαιρία για φοιτητές να εξασκήσουν και να αναπτύξουν τις δεξιότητές τους στην ανάπτυξη λογισμικού και να συνεισφέρουν στην open source κοινότητα! Την Τετάρτη 2019-12-04 στις 18:00 στο ΚΕΔΕΑ (ΑΜΦ Ι) θα δούμε αναλυτικά τι είναι το GSoC, πώς μπορεί να συμμετέχει κάποιος, και θα μοιραστούμε την εμπειρία μας ως GSoC mentees",
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
