import "./App.css";
import Card from "./components/Card";
import { events } from "./data/events";

function App() {
  return (
    <div className="app">
      <h1>📚 Developer Resources Board</h1>
      <div className="card-container">
        {events.map((event) => (
  <Card
    key={event.id}
    title={event.title}
    date={event.date}
    location={event.location}
    description={event.description}
    link={event.link}
    image={event.image}  
  />
))}
      </div>
    </div>
  );
}

export default App;