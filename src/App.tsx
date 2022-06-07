import Landing from "./pages/Landing";
import Experiment from "./pages/Experiment";
import Instructions from "./pages/Instructions";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { User } from "./interfaces/user";
import { useState } from "react";
import './App.css';

function App() {

  const [user, setUser] = useState<User>({
    age: "",
    gender: "",
    location: "",
    specialty: "",
    mammo_number: "",
    screening_number: "",
    years: "",
    setting: "",
    program: "",
    models: ""
  })

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing setUser={setUser} />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/experiment" element={<Experiment user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
