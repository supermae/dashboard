import React, { PureComponent } from 'react';

import AppBar from 'material-ui/AppBar';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends PureComponent {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppBar
          title="Painel geral"
          showMenuIconButton={false}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
