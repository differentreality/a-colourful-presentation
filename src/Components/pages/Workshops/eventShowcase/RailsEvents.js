import React from 'react';
import Events from '../../Events';
import railspt1_img1 from '../../../../Photos/railspt1ateith/students_getting_ready_for_the_workshop.JPG'
import girlFocusing from '../../../../Photos/railspt2ateith/girl_focusing_on_her_computer.JPG'
import { withRouter } from 'react-router-dom';

const railsWorkshops = [
    {
        Title: 'Intro to Ruby On Rails',
        paragraph: 'An introduction to the Ruby language and the Rails framework. We will explore the structure of a Rails web application, MVC pattern, CRUD actions as well as automations offered by Rails to help developers deliver code faster!',
        date: '13/04/19',
        Level: 'Beginner',
        Place: 'Thessaloniki',
        link: '/workshops/topics/RoR/RoRpt1ateith'
    },
    {
        Title: 'Ruby on Rails part2',
        paragraph: 'Diving into the magic of Rails, learning useful Ruby and Rails methods, and developing our own web application.',
        date: '05/05/19',
        Level: 'Beginner',
        Place: 'Thessaloniki',
        link: '/workshops/topics/RoR/RoRpt2ateith'
    }
]


//1 for each event
const images = [railspt1_img1, girlFocusing]

const RailsEvents = () => <Events group='workshop' topic='RoR' images={images} data={railsWorkshops} />

export default withRouter(RailsEvents);
