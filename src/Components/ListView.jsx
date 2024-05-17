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
      <button onClick={() => setActive(!active)}>See {active ? "Past" : "Current"} Filming Locations</button>
      <div style={{ background: "palegoldenrod" }}>
        {active && (
          <ul>
            {activeProductions.map(({event_name}) => (
              <li key={uuidv4()}>{event_name}</li> 
            ))}
          </ul>
        )}
      </div>
      
      <div style={{ background: "limegreen" }}>
        {!active && (
          <ul>
          {pastProductions.map(({ eventtype, eventid, category }) => (
            <li key={eventid}>{eventtype} : {category}</li>
          ))}
          </ul>
        )}
        
      </div>
    </div>
  );
};

export default ListView;
