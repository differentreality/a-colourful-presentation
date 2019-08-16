import React from 'react'
import { Heart, Tool, Git, Version, Cog, MVC, Ruby, HtmlTag} from '../../../svg/topics/topicsSvg';
import Topics from '../Topics'

const wshopContent = [
    {
        primarySvg: Git,
        Title: 'Git',
        paragraph: 'Version control and code collaboration. Get more productive, more organized and improve the collaboration with teammates.',
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
        paragraph: 'A human-friendly language and a powerful framework for web development',
        svg1: HtmlTag,
        svg1Text: 'Web App',
        svg2: Cog,
        svg2Text: 'Framework',
        svg3: MVC,
        svg3Text: 'M.V.C.',
        buttonText:'Browse Ruby on Rails',
        link:'/workshops/topics/ror'
    }
]

const WorkshopTopics=()=><Topics group='workshop' data={wshopContent} />

export default WorkshopTopics;
