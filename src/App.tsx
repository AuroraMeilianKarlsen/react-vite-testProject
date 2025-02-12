import './App.css'
import EventCard from './assets/EventCard'



const events = [
  { title: "Lunsj i kantina", location: "Element på Realfagsbygget", date: "20.02.2025", type: "Mat" },
  { title: "Quiz", location: "Bror Bar", date: "25.02.2025", type: "Sosialt" },
  { title: "Spinning", location: "Sit Portalen", date: "26.02.2025", type: "Trening" },
];


function App() {
  return (
    <div style={{ display: "flex", gap: "20px", overflowX: "auto", padding: "20px" }}>
      {events.map((event, index) => (
        <EventCard key={index} title={event.title} location={event.location} date={event.date} type={event.type} />
      ))}
    </div>
  );
}


export default App
