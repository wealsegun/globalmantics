// import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/houseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouses";
import HouseContext from "../contexts/houseContext";

function App() {
  // const [allHouses, setAllHouses] = useState([]);
  // useEffect(() => {
  //   const fetchHouse = async () => {
  //     const rsp = await fetch("./houses.json");
  //     const houses = await rsp.json();
  //     setAllHouses(houses);
  //   };
  //   fetchHouse();
  // }, []);

  // const featuredHouse = useMemo(() => {
  //   if (allHouses.length) {
  //     const randomIndex = Math.floor(Math.random() * allHouses.length);
  //     return allHouses[randomIndex];
  //   }
  // }, [allHouses]);

  const allHouses = useHouses([]);
  const featuredHouse = useFeaturedHouse(allHouses);
  console.log(allHouses);
  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle="Providing houses all over the world" />
          <HouseFilter />
          <Routes>
            <Route path="/searchresults/:country" element={<SearchResults />} />
            <Route path="/house/:id" element={<HouseFromQuery />} />
            <Route path="/" element={<FeaturedHouse house={featuredHouse} />} />
          </Routes>
        </div>
      </HouseContext.Provider>
    </Router>
  );
}

export default App;
