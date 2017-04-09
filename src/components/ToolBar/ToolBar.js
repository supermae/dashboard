import React, { PureComponent } from 'react';

import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

import NewFilter from './NewFilter';
import Emitter from '../../Emitter';

const toolBar = {
  height: '100vh',
  padding: 20,
  width: 400,
  margin: 0
};

const buttons = {
  marginRight: 5
};


const dividerStyle = {
  marginTop: 10
};

const buttonGroup = {
  marginTop: 10
};


class ToolBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      addNewFilter: false
    };

    // Bind functions
    this.addFilter = this.addFilter.bind(this);
  }

  handleRangeChange(event, value) {
    /**
     * Dispatch a event to get zoom on map
     */
    Emitter.emit('maps.zoom', value);
  }

  addFilter() {
    this.setState({ addNewFilter: true });
  }

  render() {
    return (
      <Paper style={toolBar} zDepth={2}>
        <div>
          Zoom:
          <Slider
            min={1}
            max={20}
            step={1}
            onChange={this.handleRangeChange}
            defaultValue={12} />
          {
            this.state.addNewFilter
            ? <NewFilter />
            : false
          }
        </div>

        <Divider style={dividerStyle} />

        <div style={buttonGroup}>
          <RaisedButton label="Atualizar" primary={true} style={buttons}/>
          <FlatButton label="Adicionar filtros" style={buttons} onClick={this.addFilter}/>
        </div>
      </Paper>
    );
  }
}

export default ToolBar;
