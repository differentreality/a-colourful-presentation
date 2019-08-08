import React from 'react';
import { Link } from 'react-router-dom';


const BreadCrumbsLevel1 = (props) => <h3 className={'breadCrumbs-' + props.group}>
    <Link to='/Categories'>Categories</Link> / topics
</h3>

const BreadCrumbsLevel2 = (props) => <h3 className={'breadCrumbs-' + props.group}>
    <Link to='/Categories'>Categories</Link> /
    <Link to={'/' + props.group + 's/topics'}> topics</Link> / {props.topic}
</h3>

const BreadCrumbsLevel3 = (props) => <h3 className={'breadCrumbs-' + props.group}>
    <Link to='/Categories'>Categories</Link> /
    <Link to={'/' + props.group + 's/topics'}> topics</Link> /
    <Link to={'/' + props.group + 's/topics/' + props.topic}> {props.topic} </Link> / {props.title}
</h3>

const EventBreadCrumbsLevel1 = (props) => <h3 className={'breadCrumbs-' + props.group}>
    <Link to='/Categories'>Categories</Link> / archive
</h3>

const EventBreadCrumbsLevel3 = (props) => <h3 className={'breadCrumbs-' + props.group}>
    <Link to='/Categories'>Categories</Link> /
    <Link to={'/' + props.group + 's/archive'}> archive</Link> / {props.title}
</h3>

const SingleBreadCrumbs = (props) => <h3 className={'breadCrumbs-' + props.group}>
    <Link to='/Categories'>Categories</Link> / {props.title}
</h3>
export { BreadCrumbsLevel1, BreadCrumbsLevel2, BreadCrumbsLevel3, EventBreadCrumbsLevel1, EventBreadCrumbsLevel3, SingleBreadCrumbs }