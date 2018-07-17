import React from 'react';

class BusinessMap extends React.Component {
    constructor(props) {
    super(props);

  }
  componentDidMount() {
    let lat = this.props.business.latitude;
    let lng = this.props.business.longitude;
    const mapOptions = {
        center: { lat, lng},
        zoom: 15
      };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    let myLatLong = new google.maps.LatLng(this.props.business.latitude, this.props.business.longitude);
    let marker = new google.maps.Marker({
      position: myLatLong,
      title: this.props.business.name,
      label: {
      text: "!",
      color: "white",
      fontSize: "26px",
      fontWeight: "bold"
      }
    });
    marker.setMap(this.map);

  }

  render() {
    return <div id='business-map-container' ref={ map => this.mapNode = map }/>;
  }

}

export default BusinessMap;
