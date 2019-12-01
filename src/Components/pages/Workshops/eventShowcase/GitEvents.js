import React from 'react';
import Events from '../../Events'
import gitNasia from '../../../../Photos/git101ateith/A_girl_is_showing_her_swag_at_the_camera_and_a_boy_behind_her_is_smilling.JPG'
import git101ateith from '../../../../Photos/git101ateith/students_behind_computers_focusing_on_git_tasks.JPG'
import { withRouter } from 'react-router-dom';

const gitWorkshops = [
    {
      Title: 'All git! Part 1',
      paragraph: 'Hands on the #1 tool of every development team.',
      date: '08/12/19',
      Level: 'Beginner',
      Place: 'KEDEA - 3is Septemvriou',
      link: '/workshops/topics/git/AllGit2019_101'
    },
    {
      Title: 'All git! Part 2',
      paragraph: 'Hands on the #1 tool of every development team.',
      date: '15/12/19',
      Level: 'Intermediate',
      Place: 'KEDEA - 3is Septemvriou',
      link: '/workshops/topics/git/AllGit2019_102'
    },
    {

        Title: 'Git 101',
        paragraph: "A comprehensive introduction to git basic usage. If you code, it's a must. ",
        date: '06/05/19',
        Level: 'Beginner',
        Place: 'Thessaloniki',
        link: '/workshops/topics/git/git101'
    },
]

const images = [gitNasia, gitNasia, git101ateith]

const GitEvents = () =>  <Events group='workshop'  topic='git' images={images} data={gitWorkshops}/>

export default withRouter(GitEvents);
