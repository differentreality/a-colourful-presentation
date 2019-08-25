import React from 'react';
import Events from '../../Events'
import GSoCateith1 from '../../../../Photos/gsocateith/GSoCateith1.JPG';
import { withRouter } from 'react-router-dom';
const GSoCTalksData = [
    {
        Title: 'What is GSoC?',
        paragraph: 'Overall information about the program, typical requirements, who is eligible to participate, and how you can make it happen for yourself!',
        date: '06/03/19',
        Level: 'Beginner',
        Place: 'Ateith',
        link: '/talks/topics/GSoC/gsocateith'
    }
]

const images = [GSoCateith1]

const GSoCTalks = () =>  <Events group='talk' topic='GSoC' images={images} data={GSoCTalksData}/>

export default withRouter(GSoCTalks);
