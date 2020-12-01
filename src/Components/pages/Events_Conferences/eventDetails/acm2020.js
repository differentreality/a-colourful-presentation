import React from 'react';
import {TalkEventDetails} from '../../DetailedEvent';
import poster from '../../../../Photos/mli/presentation_eCMR_MLI.png'

function importAll(r) {
  return r.keys().map(r);
}

const images = [];

const LinkArray = {title: 'Contact me',
                   links: [
                     {
                       url: 'stella.rouzi at gmail dot com',
                       text: 'Email'},
                     { url: 'https://www.facebook.com/differentreality/', text: 'Facebook'},
                     { url: 'https://www.linkedin.com/in/differentreality/', text: 'LinkedIn'}
                    ]}

const imageCaptions=[]

const eventData =
    {
        title:'ACM Speed Mentorship 2020',
        date:'12/12/2020',
        details: <p> Huge fan of open source, and volunteering. I love sharing knowledge - feel free to ask me anything! </p>,
        group:'talk',
        topic:'Mentorship',
        poster: 'poster',
        slides:'',

        links:[LinkArray],
        images,
        imageCaptions
    }


const acm2020 = (props)=><TalkEventDetails mobile={props.mobile} group={eventData.group} data={eventData}/>

export default acm2020;
