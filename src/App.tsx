import Landing from "./pages/Landing";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
