import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path = '/' component = { Main } />
        </Switch>
      </main>
    </div>
  );
}

export default App;
