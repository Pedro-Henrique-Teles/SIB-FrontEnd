import React from "react";
import { Link } from "react-router-dom";
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
      <div className="bg-black text-white p-4 flex flex-col sm:flex-row items-center justify-around gap-4 shrink-0 border-t border-neutral-800">
        <div className="text-center">
          <p className="font-bold">CONTATO</p>
          <p>📞 (32) 3215-9276</p>
        </div>
        <div className="text-center">
          <p className="font-bold">ENDEREÇO</p>
          <p>R. Barão de São Marcelino, 426 - Passos, MG</p>
        </div>
        <div className="text-center text-xs text-neutral-400 flex flex-col items-center gap-1">
          <div className="flex gap-3">
            <Link to="/termos" className="hover:text-white underline underline-offset-2 transition">
              Termos de Serviço
            </Link>
            <span>•</span>
            <Link to="/privacidade" className="hover:text-white underline underline-offset-2 transition">
              Política de Privacidade
            </Link>
          </div>
          <span>&copy; {new Date().getFullYear()} SIB-JF</span>
        </div>
      </div>
    </div>
  );
};

