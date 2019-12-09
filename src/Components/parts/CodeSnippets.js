import React from 'react';

import { Container } from 'react-bootstrap';

const CodeSnippet=(props)=><Container className= 'codeSnippet'>
    <h2 className='codeSnippet__Title'>{props.title}</h2>
    <code>
        {props.code}
    </code>
</Container>

export default CodeSnippet;
