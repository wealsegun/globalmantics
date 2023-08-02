import { useEffect, useState } from "react";

const useHouses = () => {
    const [allHouses, setAllHouses] = useState([]);

    useEffect(() => {
        const fetchHouse = async () => {
          const rsp = await fetch("./houses.json");
          const houses = await rsp.json();
          setAllHouses(houses);
        };
        fetchHouse();
      }, []);
      return allHouses;
}

export default useHouses;