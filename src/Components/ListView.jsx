import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const ListView = ({
  activeProductions,
  setActiveProductions,
  pastProductions,
  setPastProductions,
}) => {
  const [active, setActive] = useState(true);
  return (
    <div>
      <button onClick={() => setActive(!active)}>See {active ? "Past Production Events" : "Recent and Ongoing Production Events"}</button>
      <div style={{ background: "palegoldenrod" }}>
        {active && (
          <ul>
            {activeProductions.map(({event_name, event_borough, event_location, street_closure_type, start_date_time, end_date_time }) => (
              <li key={uuidv4()} style={{ marginBottom: '10px' }}>
                <div>
                  <h4>({event_borough}) {event_name}</h4>
                  <p><span>Start Date:</span> {start_date_time}</p>
                  <p><span>End Date:</span> {end_date_time}</p>
                  <p>Street Closure: {street_closure_type}</p>
                  {event_location.split(",").map((location) => (
                    <p key={uuidv4()}>{location}</p>
                  ))}
                </div>
              </li> 
            ))}
          </ul>
        )}
      </div>
      
      <div style={{ background: "limegreen" }}>
        {!active && (
          <ul>
          {pastProductions.map(({ subcategoryname, eventid, category, borough, startdatetime, enddatetime, parkingheld }) => (
            <li key={eventid} style={{ marginBottom: '10px' }}>
              <div>
                <h4>
                [{borough}] {category} {subcategoryname !== "Not Applicable" ? ": " + subcategoryname : ""} 
                </h4>
                <p><span>Start Date:</span> {startdatetime}</p>
                <p><span>End Date:</span> {enddatetime}</p>
                <p>{parkingheld.split(",")[0]}</p>
              </div>
            </li>
          ))}
          </ul>
        )}
        
      </div>
    </div>
  );
};

export default ListView;
