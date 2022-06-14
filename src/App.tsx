import Landing from "./pages/Landing";
import Experiment from "./pages/Experiment";
import Instructions from "./pages/Instructions";
import Completion from "./pages/Completion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { User } from "./interfaces/user";
import { useState, useEffect } from "react";
import images from "./util/images";
import './App.css';

function App() {

  const [surenessList, setSurenessList] = useState<number[]>([]);
  const [willingnessList, setWillingnessList] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
  });

  const cacheImages = async (array: any[]) => {
    const promises = await array.map((src) => {
        return new Promise<void>(function (resolve, reject) {
            const img = new Image();

            img.src = src;
            img.onload = function () {
                resolve();
             }
            img.onerror = function () {
                reject();
            }

        });
    });

    await Promise.all(promises);
    setIsLoading(false);
}

useEffect(() => {
    cacheImages(images);
}, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Landing
              setUser={setUser}
            />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/experiment" element={
            <Experiment
              willingnessList={willingnessList}
              surenessList={surenessList}
              setSurenessList={setSurenessList}
              setWillingnessList={setWillingnessList}
              isLoading={isLoading}
              images={images}
            />} />
          <Route path="/completion" element={
            <Completion
              user={user}
              sureness={surenessList}
              willingness={willingnessList}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
