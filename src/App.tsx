import Landing from "./pages/Landing";
import Experiment from "./pages/Experiment";
import Instructions from "./pages/Instructions";
import Completion from "./pages/Completion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { User } from "./interfaces/user";
import { useState } from "react";
import images from "./util/images";
import scores from "./util/scores";
import { v4 as uuid } from 'uuid';
import './App.css';

function App() {

  const [surenessList, setSurenessList] = useState<number[]>([]);
  const [willingnessList, setWillingnessList] = useState<number[]>([]);
  const [user, setUser] = useState<User>({
    id: uuid(),
    age: "",
    gender: "",
    location: "",
    specialty: "",
    mammo_number: "",
    screening_number: "",
    years: "",
    setting: "",
    program: "",
    models: "",
    email: ""
  });
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Landing
              setUser={setUser}
              id={user.id}
            />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/experiment" element={
            <Experiment
              willingnessList={willingnessList}
              surenessList={surenessList}
              setSurenessList={setSurenessList}
              setWillingnessList={setWillingnessList}
              images={images}
              scores={scores}
            />} />
          <Route path="/completion" element={
            <Completion
              user={user}
              sureness={surenessList}
              willingness={willingnessList}
              images={images}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
