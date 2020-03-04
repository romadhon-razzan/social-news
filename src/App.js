import React from 'react';
import Home from './scenes/Home';
import SignUp from './scenes/SignUp';
import SignIn from './scenes/SignIn';
import CreateNews from './scenes/CreateNews';
import 'bulma/css/bulma.css'
import './App.css';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <Home isAuth={false} /> </Route>
        <Route exact path="/masuk"><SignIn /> </Route>
        <Route exact path="/daftar"> <SignUp /> </Route>
        <Route exact path="/create-news"> <CreateNews /> </Route>
        {localStorage.getItem('token') != '' ?
          (<Route exact path="/home"> <Home isAuth={true} /> </Route>)
          :
          (
            <Route exact path="/home"> <Home isAuth={false} /> </Route>
          )
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
