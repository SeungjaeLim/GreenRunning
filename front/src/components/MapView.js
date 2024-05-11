// src/components/MapView.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView() {
    const position = [37.535558663, 126.974149586];  // Adjust with the correct coordinates

    return (
        <MapContainer center={position} zoom={13} style={{ 
            height: '300px', 
            width: '100%',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            marginBottom: '20px'
        }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    A simple popup example.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapView;
