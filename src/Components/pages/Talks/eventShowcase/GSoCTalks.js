import React from 'react';
import Events from '../../Events'
import GSoCateith1 from '../../../../Photos/gsocateith/GSoCateith1.JPG';
import { withRouter } from 'react-router-dom';
const GSoCTalksData = [
    {
        Title: 'What is GSoC?',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        date: '06/03/19',
        Level: 'Beginner',
        Place: 'Ateith',
        link: '/talks/topics/gsoc/gsocateith'
    }
]

const images = [
    { src: GSoCateith1, caption: 'caption caption caption' },
]

const GSoCTalks = () =>  <Events group='talk' topic='GSoC' images={images} data={GSoCTalksData}/>

export default withRouter(GSoCTalks);