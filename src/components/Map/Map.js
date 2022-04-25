
import React from 'react'
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
import Geocode from "react-geocode";

import { Descriptions } from 'antd';


const API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;


Geocode.setApiKey(API_KEY);

class Map extends React.Component {
  
  state={
    address:"Unit 24, Space Business Centre",
    city:"Gloucester",
    area:"Olympus Park",
    state:"Quedeley",
    postcode: "GL2 4AL",
    zoom:15,
    height: 400,
    mapPosition: {
      lat:51.830959,
      lng:-2.274816,
    },
    markerPosition: {
      lat:51.830959,
      lng:-2.274816,
    },
  }


  onMarkerDragEnd = (e) => {

    let newLat = e.latLng.lat();
    let newLng = e.latLng.lng();

    Geocode.fromLatLng(newLat, newLng)
    .then(response => {

      const address = response.results[0].formatted_address,
            addressArray =  response.results[0].address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray);

      this.setState({
        address: (address) ? address : '',
        city: (city) ? city : '',
        area: (area) ? area : '',
        state: (state) ? state : '',
        markerPosition: {
          lat: newLat,
          lng: newLng
        },
        mapPosition: {
          lat: newLat,
          lng: newLng
        }
      })

    }
    )
    .catch(error => console.error(error));
  }


  render() {

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
        >
          <Marker
            draggable={false}
            onDragEnd={this.onMarkerDragEnd}
            position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng  }}
          >
            <InfoWindow>
              <div>
                <h3>Unit 24, Space Business Centre, Olympus Park, Quedgeley, Gloucester GL2 4AL</h3>
              </div>
            </InfoWindow>
            </Marker>

        </GoogleMap>
      ));
    return (

    <div id="map" style={{padding:'1rem', margin: '0 auto', maxWidth: 1000}}>
      <h1>GLOSTER MODELS</h1>
    <Descriptions bordered>
    <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
    <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
    <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
    <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
    <Descriptions.Item label="Postcode">{this.state.postcode}</Descriptions.Item>
  </Descriptions>
       




        <MapWithAMarker
  googleMapURL=  {`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
    </div>
    );
  }
 
}

export default Map;