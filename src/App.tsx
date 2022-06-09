import Landing from "./pages/Landing";
import Experiment from "./pages/Experiment";
import Instructions from "./pages/Instructions";
import Completion from "./pages/Completion";
import Information from "./pages/Information";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { User } from "./interfaces/user";
import { useState } from "react";
import './App.css';

function App() {

  const [surenessList, setSurenessList] = useState<number[]>([]);
  const [willingnessList, setWillingnessList] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
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
    models: "",
    email: ""
  })


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
          <Landing 
            setUser={setUser} 
            checked={checked}
          />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/experiment" element={
            <Experiment
              willingnessList={willingnessList}
              surenessList={surenessList}
              setSurenessList={setSurenessList}
              setWillingnessList={setWillingnessList}
            />} />
          <Route path="/completion" element={
            <Completion
              user={user}
              sureness={surenessList}
              willingness={willingnessList}
            />
          } />
          <Route path="/information" element={
            <Information
              setChecked={setChecked}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
