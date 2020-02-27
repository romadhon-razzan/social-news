import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
var main = {
    backgroundColor: '#E3F2FD'
  }
ReactDOM.render(<div style={main}><App /></div>, document.getElementById('root'));

serviceWorker.unregister();
