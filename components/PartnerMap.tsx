"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image from "next/image";

type School = {
  name: string;
  coords: [number, number];
  description: string;
  image: string;
};

const schools: School[] = [
  {
    name: "Example School",
    coords: [37.4275, -122.1697],
    description: "A short description of this school.",
    image: "/schools/example.jpg",
  },
];

const pinIcon = L.divIcon({
  html: `<svg width="28" height="36" viewBox="0 0 28 36">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="#534AB7"/>
    <circle cx="14" cy="14" r="6" fill="white"/>
  </svg>`,
  className: "",
  iconSize: [28, 36],
  iconAnchor: [14, 36],
  popupAnchor: [0, -38],
});

export default function PartnerMap() {
  return (
    <MapContainer
      center={[20, 15]}
      zoom={2}
      scrollWheelZoom={false}
      style={{ height: "480px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap &copy; CARTO"
      />
      {schools.map((school) => (
        <Marker key={school.name} position={school.coords} icon={pinIcon}>
          <Popup>
            <div style={{ width: "200px" }}>
              <Image
                src={school.image}
                alt={school.name}
                width={200}
                height={110}
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
              <h3 style={{ fontSize: "15px", fontWeight: 500, margin: "8px 0 4px" }}>
                {school.name}
              </h3>
              <p style={{ fontSize: "13px", color: "#555", margin: 0 }}>
                {school.description}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
