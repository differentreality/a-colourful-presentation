import React from 'react'
import { Heart, Tool, Git, Version, Cog, MVC, Ruby, HtmlTag} from '../../../svg/topics/topicsSvg';
import Topics from '../Topics'

const wshopContent = [
    {
        primarySvg: Git,
        Title: 'Git',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        svg1: Heart,
        svg1Text: 'Contributing',
        svg2: Tool,
        svg2Text: 'Maintenance',
        svg3: Version,
        svg3Text: 'Versioning',
        buttonText:'Browse Git',
        link:'/workshops/topics/git'
    },
    {
        primarySvg: Ruby,
        Title: 'Ruby On Rails',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        svg1: MVC,
        svg1Text: 'M.V.C.',
        svg2: HtmlTag,
        svg2Text: 'Web App',
        svg3: Cog,
        svg3Text: 'Framework',
        buttonText:'Browse Ruby on Rails',
        link:'/workshops/topics/ror'
    }
]

const WorkshopTopics=()=><Topics group='workshop' data={wshopContent} />

export default WorkshopTopics;