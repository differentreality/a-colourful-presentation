import React from 'react';
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap';

const DualButtons = (props) =>
{
    return <Col xs={12}>
            <div style={{marginTop:'50px'}}>
        <div className={'myButton myButton--colourless myButton--colourless--'+props.group}>{props.firstButtonText}</div> 
        <span className='verticalLine'/> 
        <div className={'myButton myButton--colored myButton--colored--'+props.group} >{props.secondButtonText}</div>
      </div>
      
        </Col>
}

export default DualButtons;