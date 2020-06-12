import React from 'react';
import Events from '../../Events'
import gsocTalk01 from '../../../../Photos/gsocateith/students_sitting_on_their_desks_smilling.JPG';
import mli_labor from '../../../../Photos/mli/Presentation-MLI_Technology-in-labor_Stella_Rouzi.png'
import mli_ecmr from '../../../../Photos/mli/presentation_eCMR_MLI.png'
import { withRouter } from 'react-router-dom';
const Data = [
    {
      Title: 'Τεχνολογία και επιπτώσεις στην αγορά εργασίας',
      paragraph: 'Εργασία εξαμήνου',
      date: 'Παρασκευή 12/06/2020',
      Place: 'Online',
      link: '/talks/topics/master/MliTechnologyInLabor'
     },
     {
      Title: 'Ηλεκτρονική Φορτωτική (eCMR)',
      paragraph: 'Εργασία εξαμήνου',
      date: 'Σάββατο 13/06/2020',
      Place: 'Online',
      link: '/talks/topics/master/eCMR'
     }
]

const images = [mli_labor, mli_ecmr]

const GSoCTalks = () =>  <Events group='talk' topic='master' images={images} data={Data}/>

export default withRouter(GSoCTalks);
