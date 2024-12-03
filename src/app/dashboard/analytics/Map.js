import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const locations = [
  { lat: 51.505, lng: -0.09, label: "Land with loan" },
  { lat: 51.515, lng: -0.1, label: "Land without loan" },
  { lat: 51.525, lng: -0.11, label: "Sold land" },
];

const Map = () => {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      // Make sure map is initialized once
      mapRef.current.leafletElement.invalidateSize();
    }
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} className="h-96 w-full" ref={mapRef}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc, index) => (
        <Marker key={index} position={[loc.lat, loc.lng]}>
          <Popup>{loc.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
