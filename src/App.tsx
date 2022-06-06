import Landing from "./pages/Landing";
import Experiment from "./pages/Experiment";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/experiment" element={<Experiment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
