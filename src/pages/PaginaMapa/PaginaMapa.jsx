import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./styles.css"

const PaginaMapa = () => {




    return (
        <div>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="h-[600px] w-screen z-10">
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}></Marker>
            </MapContainer>
            <div className="bg-black h-[300px] text-white flex items-center justify-center gap-[40px]">
                <div className="w-[612px] h-[140px] flex flex-col items-center justify-center border border-solid border-white ">
                    <h1>Contato</h1>
                    <p>☎️(32) 3215-9276</p>
                </div>
                <div className="w-0 h-[170px] border border-white"></div>
                <div className="w-[612px] h-[140px] flex flex-col items-center justify-center border border-solid border-white ">
                    <h1>Endereço</h1>
                    <p>🏠R. Barão de São Marcelino, 426 - Passos, Juiz de Fora</p>
                </div>
            </div>
        </div>
    )
}

export default PaginaMapa