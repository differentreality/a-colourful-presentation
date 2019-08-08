import React from 'react';
import Events from '../../Events';
import gitNasia from '../../../../Photos/git101ateith/gitNasia.JPG'
import git101ateith from '../../../../Photos/git101ateith/git101ateith.JPG'
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
    gitNasia,
    git101ateith
]

const Conferences = () =>  <Events group='event' images={images} data={conferenceArchives}/>

export default withRouter(Conferences);