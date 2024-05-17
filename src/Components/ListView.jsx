import { v4 as uuidv4 } from "uuid";

const ListView = ({
  activeProductions,
  setActiveProductions,
  pastProductions,
  setPastProductions,
}) => {
  console.log(activeProductions);
  return (
    <div>
      <div style={{ background: "palegoldenrod" }}>ListView</div>
      <ul>
        {activeProductions.map(({ event_name }) => (
          <li key={uuidv4()}>{event_name}</li>
        ))}
      </ul>
      {/* button for the past filiming locations/ productions */}
      <button>See Past Filming Locations</button>
    </div>
  );
};

export default ListView;
