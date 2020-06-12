import React from 'react';
import {TalkEventDetails} from '../../DetailedEvent';
import poster from '../../../../Photos/mli/Presentation-MLI_Technology-in-labor_Stella_Rouzi.png'

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
        title:'Technology effects on labor',
        date:'12/06/2020',
        details: "Παρουσίαση στο μάθημα Κοινωνία της Πληροφορίας",
        group:'talk',
        topic:'MSc',
        poster:poster,
        slides:'https://drive.google.com/file/d/1KBwDdEj8Bm6pVZPAyeU8ScArDhTFLa1S/view?usp=sharing',

        links:[LinkArray],
        images,
        imageCaptions
    }


const MliTechnologyInLabor = (props)=><TalkEventDetails mobile={props.mobile} group={eventData.group} data={eventData}/>

export default MliTechnologyInLabor;
