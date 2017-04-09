import React, { PureComponent } from 'react';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Pins from '../data.json';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import ToolBar from './ToolBar/ToolBar';
import Maps from './Maps/Maps';

const mapBox = {
  position: 'relative',
  height: 500,
  width: 800,
  margin: '20px auto'
};

class Base extends PureComponent {

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="container">
          <AppBar
            title="Painel geral"
            showMenuIconButton={false} />

          <div className="content">
            <ToolBar />
            <Paper style={mapBox} zDepth={3}>
              <Maps pins={Pins} />
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Base;
