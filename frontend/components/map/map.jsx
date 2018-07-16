import React from 'react';

class BusinessMap extends React.Component {
  ComponentDidMount() {
    const mapOption = {
      center: {
        lat: 40.751282,
        long: -73.983990
      },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div ref={map => this.mapNode = map} id="map-container"></div>
    );
  }

}

export default BusinessMap;
