import React, { PropTypes, Component } from 'react';

import Paper from 'material-ui/Paper';

import PinIcon from '../../../public/images/pin.png';

const pin = {
  width: 30
};

const toolTip = {
  height: 'auto',
  width: 250,
  margin: 20
};

const toolTipCard = {
  fontSize: 14,
  padding: 8,
  backgroundColor: '#f4f4f4'
};

const toolTipDesc = {
  fontSize: 12,
  padding: 8,
}


class Pin extends Component {
  static propTypes = {
    $hover: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        { this.props.$hover
          ?
          <Paper style={toolTip} zDepth={3}>
            <h1 style={toolTipCard}>{this.props.pinName}</h1>
            <p style={toolTipDesc}>Total de gestantes: {this.props.totalMothers}</p>
          </Paper>
          : false
        }
        <img style={pin} src={PinIcon} alt="Google Maps Pin"/>
      </div>
    );
  }
}

export default Pin;
