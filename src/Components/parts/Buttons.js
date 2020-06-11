import React from 'react';
import { Col } from 'react-bootstrap';

const DualButtons = (props) => {
    
    const slidesButton = props.firstLink 
    ? (
        <a rel="noopener noreferrer" target="_blank" href={props.firstLink}>
          <div className={'myButton myButton--colourless myButton--colourless--' + props.group}>
            {props.firstButtonText}          
          </div>
        </a>
      ) 
    : undefined;
    
    const facebookEventButton = props.secondLink
      ? (
        <a rel="noopener noreferrer" target="_blank" href={props.secondLink}>
          <div className={'myButton myButton--colored myButton--colored--' + props.group} >{props.secondButtonText}</div>
        </a>
        )
      : undefined
  
    return (
      <Col className='dualButtons' xs={12}>
        <div style={{ marginTop: '50px' }}>
            {slidesButton}
            {facebookEventButton}
        </div>
    </Col>)
}

const Button = (props) => {
    return <div className={'myButton myButton--colored myButton--colored--' + props.group
        + (props.modifier
            ? ' myButton--' + props.modifier 
            : "")}>
                    {props.buttonText}
                </div>
}

const EmptyButton = (props) => <div className={'myButton myButton--colourless myButton--colourless--' + props.group}>{props.buttonText}</div>

export { Button, DualButtons, EmptyButton };