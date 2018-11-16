import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Card from './Card';
import { Link } from 'react-router-dom';
import MainBody from './MainBody';


function App(){
  return (
    <div>
      <style global jsx>{`
        font-family: Helvetica;
        body {
          background-color: #fafafa;
        }
      `}</style>
      <Switch>
        <Route exact path='/' component={Navbar} />
        <Route path='/card' component={Card} />
      </Switch>
      <MainBody/>
    </div>
  );
}


export default App;
