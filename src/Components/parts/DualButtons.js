import React from 'react';
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap';

const DualButtons = (props) =>
{
    return <Col md={{span:4}}>
            <div style={{marginTop:'50px'}}>
        <Button className={'noborder '+props.group}>{props.firstButtonText}</Button> <span className='verticalLine'/> <Button className={'colored '+props.group} >{props.secondButtonText}</Button>
      </div>
      
        </Col>
}

export default DualButtons;