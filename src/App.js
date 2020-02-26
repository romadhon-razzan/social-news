import React from 'react';
import Home from './scenes/Home';
import Toolbar from './components/Toolbar';
import SignUp from './scenes/SignUp';
import SignIn from './scenes/SignIn';
import 'bulma/css/bulma.css'
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const isLogin = false;
  return (
    <BrowserRouter>
      <Toolbar isLogin={isLogin} />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/masuk"><SignIn/> </Route>
          <Route exact path="/daftar"> <SignUp/> </Route>
          <Route exact path="/home"> <Home /> </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
