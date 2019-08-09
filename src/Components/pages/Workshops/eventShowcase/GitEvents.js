import React from 'react';
import Events from '../../Events'
import gitNasia from '../../../../Photos/git101ateith/gitNasia.JPG'
import git101ateith from '../../../../Photos/git101ateith/git101ateith.JPG'
import { withRouter } from 'react-router-dom';

const gitWorkshops = [
    {
       
        Title: 'Git 101',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        date: '06/05/19',
        Level: 'Beginner',
        Place: 'Thessaloniki',
        link: '/workshops/topics/git/git101'
    }
]

const images = [gitNasia,git101ateith]

const GitEvents = () =>  <Events group='workshop'  topic='git' images={images} data={gitWorkshops}/>

export default withRouter(GitEvents);