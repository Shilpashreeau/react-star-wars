import { getAllstarships } from "./services/sw-api";
import { useState, useEffect } from "react";
import "./App.css";
import StarShipCard from "./components/StarShipCard";

function App() {
  const [starships, setStarships] = useState([]);
  console.log(starships);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllstarships();
      console.log(data);
      setStarships([data]);
    };
    fetchData();
  }, []);

  
  return <StarShipCard starship={starships} />;
}

export default App;
