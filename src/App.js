import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import UserDetail from './components/UserDetail/UserDetail';
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/user/:userId">
            <UserDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
