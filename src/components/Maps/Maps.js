import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import Pin from './Pin';
import Emitter from '../../Emitter';

const mapsCanvas = {
  position: 'relative',
  height: 500,
  width: 800
};

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-23.5380309, -46.646406899999995],
      zoom: 12
    };

    this.showMoreInformation.bind(this);
  }

  componentWillMount() {
    Emitter.on('maps.zoom', (zoom) => this.setState({ zoom }));
  }

  onMapChange = ({ center, zoom }) => {
    this.setState({
      center,
      zoom
    });
  }

  showMoreInformation() {
    window.alert('Aqui');
  }

  render() {
    return (
      <GoogleMapReact
        style={mapsCanvas}
        bootstrapURLKeys={{ key: 'AIzaSyDcwaes5UiQQMx0r_sp-JmQay97KUgvDZE' }}
        center={this.state.center}
        zoom={this.state.zoom}>

        {
          this.props.pins.map((pin, index) => {
            return (
              <Pin
                key={index}
                lat={pin.coordinates.latitude}
                lng={pin.coordinates.longitude}
                onClick={this.showMoreInformation} />
            );
          })
        }
      </GoogleMapReact>
    );
  }
}

export default Maps;
