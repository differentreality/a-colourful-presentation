import React from 'react';
import {  Col } from 'react-bootstrap';
import {CallToActionSvg,DownloadSvg} from '../../svg/CallToActionSvg'

const LinkContainer = (props) =>

    <Col xs='8' sm='6' md='4' lg='3' xl='3'  className='LinkContainer'>
        <ul className={'LinkList-'+props.group}>
            <li className={'LinkList__Title-'+props.group}>{props.title}</li>
            {props.Links.map((link, id) =>
                    <li className='LinkList__ListItem'>
                    <a className='LinkList__Link' key={id} href={link.url}>
                        <span className='LinkList__Text'>{link.text}</span>
                        {props.group==='download'?<DownloadSvg/>:<CallToActionSvg />}
                    </a>
                    </li>
                )}

        </ul>
    </Col>

const StageContainer = (props) =>


<Col xs='8' sm='6' md='5' lg='3' xl='2' className='StageContainer'>
    <ul className='StageList'>
        <li className='StageList__Title'>{props.title}</li>
        <li className='StageList__Text'>{props.text}</li>
    </ul>
</Col>

export {LinkContainer,StageContainer};