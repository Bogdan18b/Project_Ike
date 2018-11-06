import React from 'react';
import MarkerManager from '../../util/marker_manager';
import PropTypes from 'prop-types';

class BusinessMap extends React.Component {

    componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps) {
        let center;
        if (!this.props.businesses[0]) {
          center = {
            lat: 40.751282,
            lng: -73.983990
          };
        } else {
          center = {
            lat: this.props.businesses[0].latitude,
            lng: this.props.businesses[0].longitude,
          };
        }
        const mapOptions = {
            center,
            zoom: 13
          };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
      }
    }

  componentDidMount() {
    let center;
    if (!this.props.businesses[0]) {
      center = {
        lat: 40.751282,
        lng: -73.983990
      };
    } else {
      center = {
        lat: this.props.businesses[0].latitude,
        lng: this.props.businesses[0].longitude,
      };
    }
    const mapOptions = {
        center,
        zoom: 15
      };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  render() {
    return <div id='map-container' ref={ map => this.mapNode = map }/>;
  }

}

BusinessMap.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object)
}

export default BusinessMap;
