import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './components/counter/counter.jsx';
import Landing from './components/landing/Landing';
import NavBar from './components/navBar/NavBar';
import ShoppingCounter from './components/shoppingCounter'

function App() {

  return (
    <>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/counter' component={Counter}/>
        <Route exact path='/' component={ShoppingCounter} />
      </Switch>
    </>
  );
}

export default App;
