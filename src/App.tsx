import { useState, useEffect } from "react";
import "./App.css";
import { getVehicles } from "./services/swapi.service";
import NavBar from "./components/NavBar/NavBar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Vehicles from "./components/Vehicles/Vehicles";
import FormCheckout from "./components/FormCheckout/FormCheckout";
import Home from "./components/Home/Home";

function App() {
  const [vehicles, setVehicles] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVehicles();
      setVehicles(data.results);
    };
    fetchData();
  }, []);
  console.log(vehicles);

  return (
    <>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/checkout" element={<FormCheckout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
