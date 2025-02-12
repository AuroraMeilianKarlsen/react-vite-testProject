import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventList from "./components/EventSmallCard";
import EventPage from "./components/EventBigCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/event/:id" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
