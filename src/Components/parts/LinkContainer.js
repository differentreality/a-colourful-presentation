import React from 'react';
import { Col } from 'react-bootstrap';
import { CallToActionSvg, DownloadSvg } from '../../svg/CallToActionSvg'
class LinkContainer extends React.Component {



    render() 
    {
        return <Col xs='8' sm='6' md='4' lg='3' xl='2' className='LinkContainer'>
            <ul className={'LinkList-' + this.props.group}>
                <li className={'LinkList__Title-' + this.props.group}>{this.props.title}</li>
                {this.props.Links.map((link, id) =>
                    <li key={id} className='LinkList__ListItem'>
                        <a className='LinkList__Link'  rel="noopener noreferrer" target="_blank" href={link.url}>
                            <span className='LinkList__Text'>{link.text}</span>
                            {this.props.group === 'download' ? <DownloadSvg /> : <CallToActionSvg />}
                        </a>
                    </li>
                )}
            </ul>
        </Col>
    }
}

class StageContainer extends React.Component {
    render() {
        return <Col xs='8' sm='6' md='5' lg='3' xl='2' className='StageContainer'>
            <div className='StageList'>
                <h3 className='StageList__Title'>{this.props.title}</h3>
                <p className='StageList__Text'>{this.props.text}</p>
            </div>
        </Col>
    }
}
export { LinkContainer, StageContainer };