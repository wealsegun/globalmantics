import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";

function App() {
  const [allHouses, setAllHouses] = useState([]);
  useEffect(() => {
    const fetchHouse = async () => {
      const rsp = await fetch("./houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouse();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  // console.log("Featured House => " + featuredHouse)
  return (
    <Router>
      <div className="container">
        <Header
          subtitle="Providing houses all over the world"
          // title="Globalmantics"
        />
        <Routes>
          <Route path="/" element={<FeaturedHouse house={featuredHouse} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
