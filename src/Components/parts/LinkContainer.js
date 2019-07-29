import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import CallToActionSvg from '../../svg/CallToActionSvg'
const LinkContainer = (props) =>


    <Col xs='2' className='LinkContainer'>
        <ul className='LinkList'>
            <li className='LinkList__Title'>{props.title}</li>
            {props.Links.map((link, id) =>
                    <li>
                    <a className='LinkList__Link' key={id} href={link.url}>
                        <span className='LinkList__Text'>{link.text}</span>
                        <CallToActionSvg />
                        </a>
                    </li>
                )}

        </ul>
    </Col>

export default LinkContainer;