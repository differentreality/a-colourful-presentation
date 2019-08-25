import React from 'react';
import Events from '../../Events'
import gitNasia from '../../../../Photos/git101ateith/gitNasia.JPG'
import git101ateith from '../../../../Photos/git101ateith/git101ateith.JPG'
import { withRouter } from 'react-router-dom';

const gitWorkshops = [
    {

        Title: 'Git 101',
        paragraph: "A comprehensive introduction to git basic usage. If you code, it's a must. ",
        date: '06/05/19',
        Level: 'Beginner',
        Place: 'Thessaloniki',
        link: '/workshops/topics/git/git101'
    },
]

const images = [gitNasia,git101ateith]

const GitEvents = () =>  <Events group='workshop'  topic='git' images={images} data={gitWorkshops}/>

export default withRouter(GitEvents);
