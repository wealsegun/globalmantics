import { useParams } from "react-router";
import House from "./house";
import { useContext } from "react";
import HouseContext from "../contexts/houseContext";

const HouseFromQuery = () => {
    const allHouses = useContext(HouseContext);
    console.log(allHouses);
    const {id} = useParams();
    const house = allHouses.find(h => h.id === parseInt(id));
    if(!house) return <div>House not found.</div>;
    return <House house={house}/>;
    
}
 
export default HouseFromQuery;