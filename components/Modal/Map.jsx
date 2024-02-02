import React from 'react'
import { Popup } from 'react-leaflet'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import "leaflet/dist/leaflet.css"
import Image from 'next/image'
import L from 'leaflet';
function Map({restaurant}) {
    const icon =new L.icon({ 
        iconUrl: "https://snappfood.ir/static/images/pin.svg",
        iconSize: [50, 75]
     });
  return (
    <MapContainer center={[restaurant.latitude, restaurant.longitude]} scrollWheelZoom={true} zoom={13} style={{ height: 96, position:"relative" }} >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[restaurant.latitude, restaurant.longitude]} icon={icon}>

        </Marker>
        
    </MapContainer>
  )
}

export default Map