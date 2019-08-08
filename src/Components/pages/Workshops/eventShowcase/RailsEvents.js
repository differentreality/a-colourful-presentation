import React from 'react';
import Events from '../../Events';
import railspt1_img1 from '../../../../Photos/railspt1ateith/railspt1_img1.JPG'
import Rorateithpt2_3 from '../../../../Photos/railspt2ateith/Rorateithpt2_3.JPG'
import { withRouter } from 'react-router-dom';

const railsWorkshops = [
    {
        Title: 'Intro to Ruby On Rails',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        date: '13/04/19',
        Level: 'Beginner',
        Place: 'Thessaloniki',
        link: '/workshops/topics/ror/rorpt1ateith'
    },
    {
        Title: 'Ruby on Rails part2',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        date: '05/05/19',
        Level: 'Beginner',
        Place: 'Thessaloniki',
        link: '/workshops/topics/ror/rorpt2ateith'
    }
]


//1 for each event
const images = [railspt1_img1, Rorateithpt2_3]

const RailsEvents = () => <Events group='workshop' topic='RoR' images={images} data={railsWorkshops} />

export default withRouter(RailsEvents);