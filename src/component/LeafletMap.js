import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafletMap = ({ lat, lng }) => {
  // Menggunakan useRef untuk mendapatkan referensi ke elemen peta
  const mapRef = useRef(null);

  useEffect(() => {
    // Memastikan peta dimuat setelah komponen di-render
    if (mapRef.current) {
      // Setel titik tengah peta sesuai dengan nilai lat dan lng yang diterima dari props
      mapRef.current.setView([lat, lng], 13);
    }
  }, [lat, lng]);

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={16}
      scrollWheelZoom={false} 
      style={{ height: '400px', width: '100%' }}
      ref={mapRef}
    >
      <TileLayer
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

      {/* Menambahkan marker pada titik tengah sesuai dengan lat dan lng */}
      <Marker position={[lat, lng]} draggable={false}>
      <Popup>Lokasi Acara</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
