import { Link } from "react-router-dom";
import EventCard from "./EventList";

const events = [
    { id: 1, title: "Lunsj i kantina", location: "Element på Realfagsbygget", date: "20.02.2025", type: "Mat" },
    { id: 2, title: "Quiz", location: "Bror Bar", date: "25.02.2025", type: "Sosialt" },
    { id: 3, title: "Spinning", location: "Sit Portalen", date: "26.02.2025", type: "Trening" },
];

function EventList() {
  return (
    <div style={{ display: "flex", gap: "20px", overflowX: "auto", padding: "20px" }}>
      {events.map((event) => (
        <Link key={event.id} to={`/event/${event.id}`} style={{ textDecoration: "none", color: "black" }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", textAlign: "center" }}>
            <EventCard title={event.title} location={event.location} date={event.date} type={event.type} />
              <button style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "10px" }}>
                Se mer
              </button>
          </div>
          
        </Link>
      ))}
    </div>
  );
}

export default EventList;
