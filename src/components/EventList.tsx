//klasse som henter alle events fra firebase og viser de i en liste
//todo: lage firebaseconfig 

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import EventCard from "./EventCard";

const events = [
  { id: 1, title: "Lunsj i kantina", location: "Element på Realfagsbygget", date: "20.02.2025", type: "Mat" },
  { id: 2, title: "Quiz", location: "Bror Bar", date: "25.02.2025", type: "Sosialt" },
  { id: 3, title: "Spinning", location: "Sit Portalen", date: "26.02.2025", type: "Trening" },
];

function EventList() {
  return (
    <div className="flex flex-wrap gap-5 p-5 justify-start items-start">
      {events.map((event) => ( 
        <EventCard key={event.id} title={event.title} location={event.location} date={event.date} type={event.type} />
      ))}
    </div>
  );
}

export default EventList;
