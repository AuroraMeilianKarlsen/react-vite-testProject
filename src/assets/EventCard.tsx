type EventCardProps = {
    title: string;
    location: string;
    date: string;
    type: string;
  };
  
  function EventCard({ title, location, date, type }: EventCardProps) {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          minWidth: "200px",
          textAlign: "center",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3>{title}</h3>
        <p><strong>Sted:</strong> {location}</p>
        <p><strong>Dato:</strong> {date}</p>
        <p><strong>Type:</strong> {type}</p>
      </div>
    );
  }
  
  export default EventCard;
  