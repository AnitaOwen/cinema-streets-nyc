import LandingPage from "./Components/LandingPage";
import ListView from "./Components/ListView";
import MapView from "./Components/MapView";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const API = import.meta.env.VITE_ACTIVE_URL;
  const PAST_API = import.meta.env.VITE_PAST_PRODUCTIONS_URL;

  const [activeProductions, setActiveProductions] = useState([]);
  const [pastProductions, setPastProductions] = useState([]);

  useEffect(() => {
    fetch(`${API}`).then((res) => {
      res.json().then((data) => setActiveProductions(data));
    });
  }, []);

  const fetchPastProductions = async () => {
    try {
      let allPastProductions = [];
      for (let i = 0; i < 5; i++) {
        const data = await fetch(
          `${PAST_API}?eventtype=Shooting%20Permit&$offset=${i * 1000}&$order=eventid`
        ).then((res) => res.json());
        // console.log(data);
        allPastProductions = allPastProductions.concat(data);
        // console.log(allPastProductions);
      }
      setPastProductions(allPastProductions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchPastProductions();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<MapView />} />
        <Route
          path="/list"
          element={
            <ListView
              activeProductions={activeProductions}
              setActiveProductions={setActiveProductions}
              setPastProductions={setPastProductions}
              pastProductions={pastProductions}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
