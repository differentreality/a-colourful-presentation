import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js';

export default class notFound404 extends Component {

    timeline=anime.timeline();

    animate=()=>this.timeline.add({
                targets: '.notFound__text',
                opacity:[0,1],
                translateY:[-100,200],
                duration:1000,
                easing: "easeInOutQuad",
                delay: function (el, i) {
                    return 150 * (i + 1)
                }
    })


    render() {
        this.animate();
        return (
            <div>
                <h1 className='notFound__text'>What</h1> <h1 className='notFound__text'>you searched for,</h1>
                <h1 className='notFound__text'>doesn't really exist here!</h1>
                <Link to='/'><h1 className='notFound__text'>Go back?</h1></Link>
            </div>
        )
    }
}
