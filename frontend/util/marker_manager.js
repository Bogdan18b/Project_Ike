import React from 'react';

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    debugger
    businesses.forEach(business => {
      let myLatLong = new google.maps.LatLng(business.latitude, business.longitude);
      let marker = new google.maps.Marker({
        position: myLatLong,
        title: business.name
      });
      debugger
      this.markers[business.id] = marker;
      marker.setMap(this.map);
      debugger
    });

  }

}

export default MarkerManager;
