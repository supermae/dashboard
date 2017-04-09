import React, { Component } from 'react';

import PinIcon from '../../../public/images/pin.png';

const pin = {
  width: 30
};

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img style={pin} src={PinIcon} alt="Google Maps Pin"/>
      </div>
    );
  }
}

export default Maps;
