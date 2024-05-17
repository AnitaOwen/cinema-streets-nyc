import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import ListView from './Components/ListView';
import MapView from './Components/MapView';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import About from './Components/About';

const App = () => {
  const API = import.meta.env.VITE_ACTIVE_URL;
  const PAST_API = import.meta.env.VITE_PAST_PRODUCTIONS_URL;

  const [activeProductions, setActiveProductions] = useState([]);
  const [pastProductions, setPastProductions] = useState([]);

  useEffect(() => {
    fetch(`${API}?event_type=Production Event&$order=end_date_time DESC`)
      .then((res) => res.json())
      .then((data) => setActiveProductions(data))
      .catch((error) => console.error('Error fetching current productions:', error));
  }, [API]);

  const fetchPastProductions = async () => {
    try {
      let allPastProductions = [];
      for (let i = 0; i < 5; i++) {
        const data = await fetch(
          `${PAST_API}?eventtype=Shooting%20Permit&$offset=${i * 1000}&$order=enddatetime DESC`
        ).then((res) => res.json());
        allPastProductions = allPastProductions.concat(data);
      }
      setPastProductions(allPastProductions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPastProductions();
  }, [PAST_API]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/map" element={<MapView />} />
          <Route
            path="/list"
            element={
              <ListView
                activeProductions={activeProductions}
                pastProductions={pastProductions}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
