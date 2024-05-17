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
  const [selectedBorough, setSelectedBorough] = useState("")

  const handleBoroughChange = (event) => {
    setSelectedBorough(event.target.value);
  }
  const filteredActiveProductions = selectedBorough ? activeProductions.filter(({ event_borough }) => event_borough === selectedBorough) : activeProductions

  const filteredPastProductions = selectedBorough ? pastProductions.filter(({ borough }) => borough === selectedBorough) : pastProductions

  

  function formatDateToHumanReadable(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // Month is zero-based, so add 1
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  return (
    <div>
      <button onClick={() => setActive(!active)}>See {active ? "Past Filming Locations" : "Recent and Ongoing Production Events"}</button>

      <div>
        <label htmlFor="borough-select">Filter by Borough: </label>
        <select id="borough-select" value={selectedBorough} onChange={handleBoroughChange}>
          <option value="">All Boroughs</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Bronx">Bronx</option>
          <option value="Staten Island">Staten Island</option>
        </select>
      </div>

      <div style={{ background: "yellow" }}>
        {active && (
          <>
          <h3>Recent and Ongoing Production Events</h3>
          <Link to="/map" style={{ color: "red" }}>View Map</Link>
          <ul>
            {filteredActiveProductions.map(({event_name, event_borough, event_location, street_closure_type, start_date_time, end_date_time }) => (
              <li key={uuidv4()} style={{ marginBottom: '10px' }}>
                <div>
                  <h4>({event_borough}) {event_name}</h4>
                  <p><span>Date:</span> {formatDateToHumanReadable(start_date_time)} - {formatDateToHumanReadable(end_date_time)}</p>
                  <p>Street Closure: {street_closure_type}</p>
                  {event_location.split(",").map((location) => (
                    <p key={uuidv4()}>{location}</p>
                  ))}
                </div>
              </li> 
            ))}
          </ul>
          </>
        )}
      </div>
      
      <div style={{ background: "lightgreen" }}>
        {!active && (
          <>
          <h3>Past Filming Locations</h3>
          <Link to="/map" style={{ color: "red" }}>View Map</Link>
          <ul>
          {filteredPastProductions.map(({ subcategoryname, eventid, category, borough, startdatetime, enddatetime, parkingheld }) => (
            <li key={eventid} style={{ marginBottom: '10px' }}>
              <div>
                <h4>
                [{borough}] {category} {subcategoryname !== "Not Applicable" ? ": " + subcategoryname : ""} 
                </h4>
                <p><span>Date:</span> {formatDateToHumanReadable(startdatetime)} - {formatDateToHumanReadable(enddatetime)}</p>
                <p>{parkingheld.split(",")[0]}</p>
              </div>
            </li>
          ))}
          </ul>
          </>
        )}
        
      </div>
    </div>
  );
};

export default ListView;
