import React from 'react';
import Events from '../../Events';
import gitNasia from '../../../../Photos/git101ateith/gitNasia.JPG'
import git101ateith from '../../../../Photos/git101ateith/git101ateith.JPG'
import fosdem_banner from '../../../../Photos/fosdem/fosdem_banner.png'

import { withRouter } from 'react-router-dom';
const conferenceArchives = [
    {
        Title: 'FOSDEM20',
        paragraph: 'A free event for software developers to meet, share ideas and collaborate.',
        date: '1-2 Feb. 2020',
        Place: 'Brussels',
        link: '/events/archive/FOSDEM20'
    },
    {
        Title: 'FOSDEM19',
        paragraph: 'A free event for software developers to meet, share ideas and collaborate.',
        date: '02-03/02/19',
        Place: 'Brussels',
        link: '/events/archive/FOSDEM19'
    },

]

const images = [
    fosdem_banner,
    gitNasia,
    git101ateith
]

const Conferences = () =>  <Events group='event' images={images} data={conferenceArchives}/>

export default withRouter(Conferences);
