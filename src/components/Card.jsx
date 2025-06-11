import "./Card.css";

function Card({ title, date, location, description, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
}

export default Card;