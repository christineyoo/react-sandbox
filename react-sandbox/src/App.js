import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './components/counter/Counter';
import Landing from './components/landing/Landing';
import NavBar from './components/navBar/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/counter' component={Counter}/>
        <Route exact path='/' component={Landing} />
      </Switch>
    </>
  );
}

export default App;
