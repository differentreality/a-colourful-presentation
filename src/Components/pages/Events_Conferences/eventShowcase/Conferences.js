import React from 'react';
import Events from '../../Events';
import gitNasia from '../../../../Photos/gitNasia.JPG'
import git101ateith from '../../../../Photos/git101ateith.JPG'
import { withRouter } from 'react-router-dom';
const conferenceArchives = [
    {
        Title: 'Fosdem19',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        date: '02-03/02/19',
        Place: 'Brussels',
        link: '/events/archive/fosdem19'
    }
]

const images = [
    { src: gitNasia, caption: 'caption caption caption' },
    { src: git101ateith, caption: 'caption caption caption' },
]

const Conferences = () =>  <Events group='event' images={images} data={conferenceArchives}/>

export default withRouter(Conferences);