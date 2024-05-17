import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Link } from 'react-router-dom';

const ListView = ({
  activeProductions,
  setActiveProductions,
  pastProductions,
  setPastProductions,
}) => {
  const [active, setActive] = useState(true);
  const [selectedBorough, setSelectedBorough] = useState("");

  const handleBoroughChange = (event) => {
    setSelectedBorough(event.target.value);
  };

  const filteredActiveProductions = selectedBorough 
    ? activeProductions.filter(({ event_borough }) => event_borough === selectedBorough) 
    : activeProductions;

  const filteredPastProductions = selectedBorough 
    ? pastProductions.filter(({ borough }) => borough === selectedBorough) 
    : pastProductions;

  function formatDateToHumanReadable(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // Month is zero-based, so add 1
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => setActive(!active)} 
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-200"
        >
          See {active ? "Past Filming Locations" : "Recent and Ongoing Production Events"}
        </button>
        <div>
          <label htmlFor="borough-select" className="mr-2">Filter by Borough: </label>
          <select 
            id="borough-select" 
            value={selectedBorough} 
            onChange={handleBoroughChange} 
            className="py-2 px-3 border rounded"
          >
            <option value="">All Boroughs</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Staten Island">Staten Island</option>
          </select>
        </div>
      </div>

      {active ? (
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-bold mb-4">Recent and Ongoing Production Events</h3>
          <Link to="/map" className="text-blue-500 hover:underline">View Map</Link>
          <ul className="mt-4">
            {filteredActiveProductions.map(({event_name, event_borough, event_location, street_closure_type, start_date_time, end_date_time }) => (
              <li key={uuidv4()} className="mb-4 border-b pb-4">
                <div>
                  <h4 className="text-lg font-semibold">({event_borough}) {event_name}</h4>
                  <p><span className="font-bold">Date:</span> {formatDateToHumanReadable(start_date_time)} - {formatDateToHumanReadable(end_date_time)}</p>
                  <p><span className="font-bold">Street Closure:</span> {street_closure_type}</p>
                  {event_location.split(",").map((location) => (
                    <p key={uuidv4()}>{location}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-bold mb-4">Past Filming Locations</h3>
          <Link to="/map" className="text-blue-700 hover:underline">View Map</Link>
          <ul className="mt-4">
            {filteredPastProductions.map(({ subcategoryname, eventid, category, borough, startdatetime, enddatetime, parkingheld }) => (
              <li key={eventid} className="mb-4 border-b pb-4">
                <div>
                  <h4 className="text-lg font-semibold">
                    [{borough}] {category} {subcategoryname !== "Not Applicable" ? ": " + subcategoryname : ""}
                  </h4>
                  <p><span className="font-bold">Date:</span> {formatDateToHumanReadable(startdatetime)} - {formatDateToHumanReadable(enddatetime)}</p>
                  <p>{parkingheld.split(",")[0]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListView;
