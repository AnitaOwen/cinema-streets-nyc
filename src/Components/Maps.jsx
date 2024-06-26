import { useState, useEffect} from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps"
import axios from "axios"

import Markers from "./Markers";
import Places from "./Places";
import Buttons from "./Buttons";

const Maps = () => {
  const { VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, VITE_MAP_ID } = import.meta.env;
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState("restaurant");

  const fetchPlaces = async (type) => {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
      {
        params: {
          key: VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          radius: 5000,
          location: " 48.864716,2.349014",
          type, // Forward query parameters from the client to the Google Maps API
        },
      }
    );
    setPlaces(response.data.results);
    console.log(response.data);
  };

  useEffect(() => {
    fetchPlaces(type);
  }, [type]);

  return (
    <APIProvider apiKey={VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <header>
        <h1>Nearby Places</h1>
        <h2 style={{ marginBottom: "20px" }}>
          {type.slice(0, 1).toUpperCase() + type.slice(1)}s
        </h2>
      </header>
      <main style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Places places={places} />
        <section>
          <Buttons setType={setType} />

          <Map
            mapId={VITE_MAP_ID}
            style={{ width: "100vw", height: "100vh" }}
            defaultCenter={{ lat: 48.864716, lng: 2.349014 }}
            defaultZoom={13.5}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          />

          <Markers places={places} />
        </section>
      </main>
    </APIProvider>
  );
};

export default Maps;
