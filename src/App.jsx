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

  // function getAllTrulyActiveProductions(){
  //   const today = new Date()
  //   return activeProductions.filter((production) => new Date(production.end_date_time) >= today)
  // }

  useEffect(() => {
    fetch(`${API}?event_type=Production Event&$order=end_date_time DESC`)
      .then((res) => res.json())
      // .then((data) => setActiveProductions(getAllTrulyActiveProductions(data)))
      .then((data) => setActiveProductions(data))
      .catch((error) =>
        console.error("Error fetching current productions:", error)
      );
  }, []);

  const fetchPastProductions = async () => {
    try {
      let allPastProductions = [];
      for (let i = 0; i < 5; i++) {
        const data = await fetch(
          `${PAST_API}?eventtype=Shooting%20Permit&$offset=${
            i * 1000
          }&$order=enddatetime DESC`
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
              // setActiveProductions={setActiveProductions}
              // setPastProductions={setPastProductions}
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
