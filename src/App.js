import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Login from './Components/Login/Login';
import List from './Components/List/List';
import Edit from './Components/Edit/Edit';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/list' component={List} />
        <Route exact path='/add' component={Edit} />
        <Route exact path='/' component={Login} />
      </Switch>
    </>
  );
}

export default App;
