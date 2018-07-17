import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component {
    constructor(props) {
    super(props);

  }
  componentDidMount() {
    const mapOptions = {
        center: { lat: 40.751282, lng: -73.983990 },
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

export default BusinessMap;
