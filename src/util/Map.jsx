import React, {useState,useEffect} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import PageLoader from './Loader/Loader';

function Map(props) {
    const [latitude,setLatitude] = useState(null);
    const [longitude,setLongitude] = useState(null);
    const [loaded,setLoaded] = useState(false);

    useEffect(() => {
        Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_KEY}`);
        Geocode.fromAddress(props.address).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              setLatitude(lat);
              setLongitude(lng);
            },
            (error) => {
              console.error(error);
            }
          );
          setLoaded(true);
    },[props.address])

  
    const mapStyles = {        
      height: "22rem",
      width: "100%",
      margin: "auto"
    };
    
    const defaultCenter = {
      lat: latitude, 
      lng: longitude
    }
    return (
        <div className="m-auto">
            {loaded ? 
                <LoadScript
                    googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_KEY}`}>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={defaultCenter}
                    >
                        <Marker position={defaultCenter}/>
                    </GoogleMap>
                </LoadScript>
            : <PageLoader/>}
        </div>
    )
  }
  export default Map;