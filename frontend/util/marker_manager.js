import React from "react";

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    businesses.forEach((business, idx) => {
      let myLatLong = new google.maps.LatLng(
        business.latitude,
        business.longitude
      );
      let contentString =
        '<div class="BusinessIndex-map-content">' +
        `<img class="BusinessIndex-map-content-image"src=${
          business.photoURL
        } alt="pic"/>` +
        `<div class="BusinessIndex-map-content-name"><a href="/#/businesses/${
          business.id
        }"> ${business.name}</a>` +
        "</div>" +
        "<div>" +
        "</div>" +
        "</div>";
      let infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      let marker = new google.maps.Marker({
        position: myLatLong,
        title: business.name
      });
      marker.addListener("click", function() {
        infowindow.open(this.map, marker);
      });
      this.markers[business.id] = marker;
      marker.setLabel(`${idx + 1}`);
      marker.setMap(this.map);
    });
  }
}

export default MarkerManager;
