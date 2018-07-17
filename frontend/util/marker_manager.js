import React from 'react';

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    businesses.forEach(business => {
      let myLatLong = new google.maps.LatLng(business.latitude, business.longitude);
      let marker = new google.maps.Marker({
        position: myLatLong,
        title: business.name,
      });
      this.markers[business.id] = marker;
      marker.setLabel(`${business.id}`);
      marker.setMap(this.map);
    });

  }

}

export default MarkerManager;
