import React from 'react';
import { withGlobalState } from 'react-globally';
import Toolbar from './components/Toolbar';
import Home from './scenes/Home';
import SignUp from './scenes/SignUp';
import SignIn from './scenes/SignIn';
import CreateNews from './scenes/CreateNews';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NewsManager from './scenes/NewsManager';
import 'bulma/css/bulma.css'

const Routes = (props) => {
  return (
    <BrowserRouter>
      {
        props.globalState.isAuth ?
          (
            <Toolbar isLogin={true} />
          ) : (
            <Toolbar isLogin={false} />
          )
      }
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/masuk"><SignIn /> </Route>
        <Route exact path="/daftar"> <SignUp /> </Route>
        <Route exact path="/buat-berita"> <CreateNews /> </Route>
        <Route exact path="/ubah-berita/:newsId"> <CreateNews /> </Route>
        <Route exact path="/kelola-berita"> <NewsManager /> </Route>
        <Route exact path="/beranda"> <Home /> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default withGlobalState(Routes)