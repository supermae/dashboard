import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import Emitter from '../../Emitter';
import Pin from './Pin';

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
                style={{zIndex: 99999}}
                lat={pin.coordinates.latitude}
                lng={pin.coordinates.longitude}
                pinName={pin.name}
                totalMothers={pin.totalMothers}
                onMousemove={this.showMoreInformation}/>
            );
          })
        }
      </GoogleMapReact>
    );
  }
}

export default Maps;
