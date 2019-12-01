import React from 'react';
import Events from '../../Events'
import gsocTalk01 from '../../../../Photos/gsocateith/students_sitting_on_their_desks_smilling.JPG';
import gsoc19 from '../../../../Photos/gsoc19/gsoc2019_banner.png'
import { withRouter } from 'react-router-dom';
const GSoCTalksData = [
    {
      Title: 'How to be part of Google Summer of Code',
      paragraph: 'A presentation by mentees for students who want to particate in GSoC',
      date: 'Wed 4/12/19',
      Level: 'Beginner',
      Place: 'KEDEA - 3is Septemvriou (red building)',
      link: '/talks/topics/GSoC/GSoC2019'
     },
    {
        Title: 'What is GSoC?',
        paragraph: 'Overall information about the program, typical requirements, who is eligible to participate, and how you can make it happen for yourself!',
        date: '06/03/19',
        Level: 'Beginner',
        Place: 'Ateith',
        link: '/talks/topics/GSoC/gsocateith'
    }
]

const images = [gsoc19, gsocTalk01]

const GSoCTalks = () =>  <Events group='talk' topic='GSoC' images={images} data={GSoCTalksData}/>

export default withRouter(GSoCTalks);
