import React, { Component } from "react";

class GoogleMap extends Component {
  //https://reactjs.org/docs/react-component.html
  componentDidMount() {
    //find map property in refs, and render
    //used for 3rd party library that doesnt know react

    //https://developers.google.com/maps/documentation/javascript/tutorial
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    //ref in react allows the system to refence to html element made to the page
    return <div ref="map" />;
  }
}

export default GoogleMap;
