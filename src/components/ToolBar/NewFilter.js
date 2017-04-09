import React, { PureComponent } from 'react';

// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
// import Badge from 'material-ui/Badge';
import Dialog from 'material-ui/Dialog';
import {
  RadioButton,
  RadioButtonGroup
} from 'material-ui/RadioButton';

// import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
// import Divider from 'material-ui/Divider';

const filterStyle = {
  marginTop: 5,
  marginBottom: 5
};

const modalStyle = {
  display: 'flex',
  justifyContent: 'space-around'
};

const rangeNumber = {
  textAlign: 'center',
  fontSize: 100
};

class NewFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startValue: 0,
      endValue: 100,
      open: false
    };
  }

  handleStartAgeChange = (event, startValue) => this.setState({ startValue });
  handleEndAgeChange = (event, endValue) => this.setState({ endValue });

  handleDialogClose = () => this.setState({ open: false });

  selectFilter(filterMethod) {
    switch (filterMethod) {
      case 'age':
        this.setState({ open: true, filterName: 'Idade da gestante' });
        return;
      case 'unit':
        this.setState({ open: true, filterName: 'Unidade de saúde' });
        return;
      case 'range':
        this.setState({ open: true, filterName: 'Período de gestação' });
        return;
      default:
        return;
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleDialogClose} />,

      <RaisedButton
        label="Confirmar"
        primary={true}
        onTouchTap={this.handleDialogClose} />,
    ];

    return (
      <div>
        <RadioButtonGroup name="selectFilter">
          <RadioButton
            value="age"
            style={filterStyle}
            label="Idade da gestante"
            onClick={this.selectFilter.bind(this, 'age')} />

          <RadioButton
            value="unit"
            style={filterStyle}
            label="Unidade de saúde"
            onClick={this.selectFilter.bind(this, 'unit')} />

          <RadioButton
            value="range"
            style={filterStyle}
            label="Período de gestação"
            onClick={this.selectFilter.bind(this, 'range')} />

          <RadioButton
            value="robson"
            style={filterStyle}
            label="Grupo de Robson"
            onClick={this.selectFilter.bind(this, 'robson')} />
        </RadioButtonGroup>

        { /* START modal */}
        <Dialog
          title={this.state.filterName}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleDialogClose}
          autoScrollBodyContent={true}>

          { /* START select dates */}
          <div style={modalStyle}>
            <div>
              <h1 style={rangeNumber}>{this.state.startValue}</h1>
              <Slider
                min={0}
                step={5}
                max={100}
                value={this.state.startValue}
                onChange={this.handleStartAgeChange.bind(this)}/>
            </div>
            <div>
              <h1 style={rangeNumber}>{this.state.endValue}</h1>
              <Slider
                min={this.state.startValue}
                step={5}
                max={100}
                value={this.state.endValue}
                onChange={this.handleEndAgeChange.bind(this)}/>
            </div>
          </div>
          { /* END select dates */}
        </Dialog>
        { /* END modal */}
      </div>
    );
  }
}

export default NewFilter;
