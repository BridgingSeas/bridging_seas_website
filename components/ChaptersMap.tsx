
"use client";

import dynamic from "next/dynamic";

const chapters = [
  {
    geocode: [2.2014693, 102.2440483] as [number, number],
    popUp: "Payfong Middle School",
  },
  {
    geocode: [33.33082, 126.827722] as [number, number],
    popUp: "Pyoseon High School — Pyoseon High School is an IB World School in Jeju dedicated to nurturing creative global citizens through a holistic education. We actively promote our local heritage by producing English guidebooks and videos about Pyoseon's traditions, while also hosting virtual cultural exchange programs with students in the U.S. Moving forward, we are committed to acting as a bridge between our community and the world, growing together as leaders who turn vision into reality.",
  },
  {
    geocode: [33.433575, 126.425658] as [number, number],
    popUp: "Jeju Foreign Language High School - Hello, we are the Bridging Seas Jeju Foreign Language High School chapter. Our school is the only foreign language high school in Jeju, where students grow as global leaders through learning diverse languages and cultures. Through Bridging Seas activities, we aim to communicate with the world, broaden our global perspective, and build meaningful connections. Thank you.",
  },
  {
    geocode: [1.3428, 103.8434] as [number, number],
    popUp: "Raffles Girls' School",
  },
  {
    geocode: [1.3469, 103.8435] as [number, number],
    popUp: "Raffles Institution",
  },
  {
    geocode: [-27.233611, 153.0230563] as [number, number],
    popUp: "The Lakes College - The Lakes College is the first Australian school to establish a chapter in the Southern hemisphere. We hope to connect and unify Asian youth across the world and strengthen their bond through Bridging Seas.",
  },
  {
    geocode: [40.7178, -74.0138] as [number, number],
    popUp: "Stuyvesant High School",
  },
  {
    geocode: [39.32678, -77.33921] as [number, number],
    popUp: "Urbana High School",
  },
  {
    geocode: [38.3929662, -121.43023] as [number, number],
    popUp: "Franklin High School",
  },
  {
    geocode: [37.779205, -122.287277] as [number, number],
    popUp: "Alameda Community Learning Center",
  },
];

const ChaptersMap = dynamic(
  async () => {
    const { Icon } = await import("leaflet");
    const { MapContainer, Marker, Popup, TileLayer } = await import("react-leaflet");

    const customIcon = new Icon({
      iconUrl: "/leaflet/marker-icon.png",
      iconRetinaUrl: "/leaflet/marker-icon-2x.png",
      iconSize: [25, 41],
    });

    return function Map() {
      return (
        <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} className="h-[450px] w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {chapters.map((marker) => (
            <Marker key={marker.popUp} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MapContainer>
      );
    };
  },
  { ssr: false }
);

export default ChaptersMap;