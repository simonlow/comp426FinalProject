import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const Map = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"
  };
  const defaultCenter = {
    lat: 35.91208, lng: -79.05122
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDUhmjtswNovU3BzLPiOg-ZCMO9Mb1SdkY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default Map;