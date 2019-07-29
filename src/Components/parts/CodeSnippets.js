import React from 'react';

import { Container } from 'react-bootstrap';

const Docker = <div>
        <div>
            {/* eslint-disable-next-line*/}
            <span className='codeSnippet__code-Comment'>// install Docker</span>
            <a href=' https://docs.docker.com/docker-for-windows/install/' className='codeSnippet__code-Link'> https://docs.docker.com/docker-for-windows/install/</a>
        </div>       
        <div>        
            {/* eslint-disable-next-line*/}
            <span className='codeSnippet__code-Comment'>// Create a new Folder </span>
            <span className='codeSnippet__code-Command'>mkdir </span>
            <span className='codeSnippet__code-Input'>rails_workshop && </span>
            <span className='codeSnippet__code-Command'>cd </span>
            <span className='codeSnippet__code-Input'>rails_workshop </span>
        </div>
        <div>
            <span className='codeSnippet__code-Command'>docker run </span> 
            <span className='codeSnippet__code-Input'>-ti -v "$PWD":/rails_workshop --name rails_workshop -p 3000:3000 ruby bash</span>
        </div>
        <div>
            <span className='codeSnippet__code-Command'>cd </span> 
            <span className='codeSnippet__code-Input'>rails_workshop </span>
        </div>
        <div>
            <span className='codeSnippet__code-Command'>gem </span> 
            <span className='codeSnippet__code-Input'>install rails --version 5.0.0 </span>
             {/* eslint-disable-next-line*/} 
            <span className='codeSnippet__code-Comment'>//This may take a while!</span>
        </div>
    </div>

const CodeSnippet=()=><Container className= 'codeSnippet'>
    <h2 className='codeSnippet__Title'>Using Docker</h2>
    <code>
        {Docker}
    </code>
</Container>

export default CodeSnippet;