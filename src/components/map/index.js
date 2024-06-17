import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export const MapContainer = (props) => {
  const onMarkerClick = (e) => {
    console.log(e)
  }
  return (
    <Map 
      google={props.google} 
      zoom={14}
      initialCenter={{
          lat: 40.09895,
          lng: -74.89908
      }}
    >

      <Marker onClick={onMarkerClick}
              name={'Current location'} />
    </Map>
  );
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBmGmeot5jcjdaJTvfCmQPfzeoG_pABeWo')
})(MapContainer)