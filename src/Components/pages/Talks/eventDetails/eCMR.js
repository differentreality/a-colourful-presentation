import React from 'react';
import {TalkEventDetails} from '../../DetailedEvent';
import poster from '../../../../Photos/mli/presentation_eCMR_MLI.png'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../../../Photos/mli/', false, /\.(png|jpe?g|svg|JPE?G)$/));

const LinkArray = {title: '',
                   links: [
                     {
                       url: 'http://mli.uom.gr/',
                       text: 'Master in Law and Informatics'}]}

const imageCaptions=[]

const eventData =
    {
        title:'Ηλεκτρονική φορτωτική (eCMR)',
        date:'13/06/2020',
        details: "Παρουσίαση στο μάθημα Εμπορικό Δίκαιο",
        group:'talk',
        topic:'MSc',
        poster: poster,
        slides:'https://drive.google.com/file/d/1nhrKXHJgvIizp4-R90dCmufhBmR2JUwQ/view?usp=sharing',

        links:[LinkArray],
        images,
        imageCaptions
    }


const MliECmr = (props)=><TalkEventDetails mobile={props.mobile} group={eventData.group} data={eventData}/>

export default MliECmr;
