import { useParams } from "react-router-dom";

const events = [
    { id: 1, title: "Lunsj i kantina", location: "Element på Realfagsbygget", date: "20.02.2025", type: "Mat", description: "Beskrivelse av event", organizer: "ansvarlig brukers navn" },
    { id: 2, title: "Quiz", location: "Bror Bar", date: "25.02.2025", type: "Sosialt", description: "Beskrivelse av event", organizer: "ansvarlig brukers navn"},
    { id: 3, title: "Spinning", location: "Sit Portalen", date: "26.02.2025", type: "Trening", description: "Beskrivelse av event", organizer: "ansvarlig brukers navn" },
];

function EventPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  if (!event) return <h2>Arrangement ikke funnet</h2>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>{event.title}</h1>
      <p><strong>Type:</strong> {event.type}</p>
      <p><strong>Klokkeslett:</strong> {event.date}</p>
      <p><strong>Sted:</strong> {event.location}</p>
      <p><strong>Dato:</strong> {event.date}</p>
      <p><strong>Beskrivelse:</strong> {event.description}</p>
      <p><strong>Arrangør:</strong> {event.organizer}</p>
    </div>
  );
}

export default EventPage;
