import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

import App from './App';

// Styles
import './index.css';
import './App.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
