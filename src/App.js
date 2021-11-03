import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Register from './components/Register';
import QrGenerator from './components/QrGenerator';
import QrReader from './components/QrReader';
import Nav from './components/Nav';

const App = () => {
  return (
    <>
    <Nav/>
      <Switch>
        <Route exact path="/" component={Register}/>
        <Route exact path="/generator" component={QrGenerator}/>
        <Route exact path="/reader" component={QrReader}/>
      </Switch>
    </>
  )
}

export default App
