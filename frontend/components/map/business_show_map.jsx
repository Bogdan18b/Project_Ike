import React from "react";
import PropTypes from "prop-types";

class BusinessMap extends React.Component {
  componentDidMount() {
    let { latitude, longitude } = this.props.business;
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 15
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    let myLatLng = new google.maps.LatLng(latitude, longitude);
    let marker = new google.maps.Marker({
      position: myLatLng,
      title: this.props.business.name,
      label: {
        text: "•",
        color: "white",
        fontSize: "26px",
        fontWeight: "bold"
      }
    });
    marker.setMap(this.map);
  }

  render() {
    return (
      <div id="business-map-container" ref={map => (this.mapNode = map)} />
    );
  }
}

BusinessMap.propTypes = {
  business: PropTypes.shape({
    id: PropTypes.number,
    businessTypeId: PropTypes.number,
    address: PropTypes.string,
    name: PropTypes.string,
    website: PropTypes.string,
    hours: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    reviewIds: PropTypes.arrayOf(PropTypes.number),
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    photoURL: PropTypes.string,
    rating: PropTypes.number
  })
};

export default BusinessMap;
