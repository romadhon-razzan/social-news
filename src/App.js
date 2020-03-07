import React from 'react';
import { Provider } from 'react-globally';
import Routes from './Routes';
import 'bulma/css/bulma.css'

const initialState = {
  data:'',
  isAuth: false,
  loading: false,
  isLogout: false
}

export default function App() {
  return (
    <Provider globalState={initialState}>
      <Routes />
    </Provider>
  );
}