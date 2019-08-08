import React from 'react'
import { Gsoc, Globe, Student, OpenSource } from '../../../svg/topics/topicsSvg';
import Topics from '../Topics'

const talkContent = [
    {
        primarySvg: Gsoc,
        Title: 'Google Summer of Code',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        svg1: OpenSource,
        svg1Text: 'Open Source Community',
        svg2: Student,
        svg2Text: 'For Students',
        svg3: Globe,
        svg3Text: 'Remote',
        buttonText: 'Browse GSoC',
        link: '/talks/topics/gsoc'
    }
]

const TalkTopics=()=><Topics group='talk' data={talkContent} />

export default TalkTopics;
