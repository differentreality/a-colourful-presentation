import React from 'react';
import Events from '../../Events'
import gitNasia from '../../../../Photos/gitNasia.JPG'
import git101ateith from '../../../../Photos/git101ateith.JPG'
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

const images = [
    { src: gitNasia, caption: 'caption caption caption' },
    { src: git101ateith, caption: 'caption caption caption' },
]

const GitEvents = () =>  <Events group='workshop' images={images} data={gitWorkshops}/>

export default withRouter(GitEvents);