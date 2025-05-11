import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [-21.77527338391288, -43.35045510620284];

export const MapaIgreja = () => {
  return (
    <div className="bg-gray-100 flex flex-col">
      <div className="h-64 w-full">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>IGREJA BATISTA</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="bg-black text-white p-4 flex justify-around shrink-0">
        <div className="text-center">
          <p className="font-bold">CONTATO</p>
          <p>📞 (32) 3215-9276</p>
        </div>
        <div className="text-center">
          <p className="font-bold">ENDEREÇO</p>
          <p>R. Barão de São Marcelino, 426 - Passos, MG</p>
        </div>
      </div>
    </div>
  );
};
