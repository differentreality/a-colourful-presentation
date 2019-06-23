import React from 'react';
import './styles/App.css';
import DualButtons from './Components/parts/DualButtons';
import Button from 'react-bootstrap/Button';
import './styles/stylesheets/main.scss';

function App() {
  return (
    <div className="App">
    <DualButtons group='workshop' firstButtonText='Learn More' secondButtonText='Browse Workshops'/>
    <DualButtons group='talk' firstButtonText='Learn More' secondButtonText='Browse Talks'/>
    <DualButtons group='event' firstButtonText='Learn More' secondButtonText='Browse Events'/>
    <DualButtons group='stella' firstButtonText='Learn More' secondButtonText="Browse Stella's Facts"/>
    <div style={{marginTop:'50px'}}>
       <Button className={'colored calltoAction'} >Book an Event!</Button>
      </div>
    </div>
  );
}

export default App;
