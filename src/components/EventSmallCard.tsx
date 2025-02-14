import { Link } from "react-router-dom";
import EventCard from "./EventList";

//dette er "hjemmesiden" som viser small view av alle eventsene
const events = [
    { id: 1, title: "Lunsj i kantina", location: "Element på Realfagsbygget", date: "20.02.2025", type: "Mat" },
    { id: 2, title: "Quiz", location: "Bror Bar", date: "25.02.2025", type: "Sosialt" },
    { id: 3, title: "Spinning", location: "Sit Portalen", date: "26.02.2025", type: "Trening" },
];

function EventList() {
  return (
    <div style={{ display: "flex", gap: "20px", overflowX: "auto", padding: "20px" }}>
      {events.map((event) => (
        <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", textAlign: "center" }}>
            <EventCard title={event.title} location={event.location} date={event.date} type={event.type} />
            <Link key={event.id} to={`/event/${event.id}`} style={{ textDecoration: "none", color: "black" }}>
              <button style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "10px" }}>
                Se mer
              </button>
            </Link>
          </div>
      ))}
    </div>
  );
}

export default EventList;
