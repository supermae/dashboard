import React, { PureComponent } from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import Login from './components/Login';
import Base from './components/Base';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Base} />
        </main>
      </Router>
    );
  }
}

export default App;
