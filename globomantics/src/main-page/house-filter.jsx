import { useContext } from "react";
import {useNavigate} from "react-router-dom";
import HouseContext from "../contexts/houseContext";

const HouseFilter = () => {
    const allHouses = useContext(HouseContext);
    const history = useNavigate();
    const countries = allHouses ? Array.from(new Set(allHouses.map((h) => h.country))) : [];
    // console.log(allHouses);
    // console.log(countries);
    countries.unshift(null);

    const onSearchChange  =(e) => {
         const country = e.target.value;
         console.log(country);
         history("/searchresults/" + country);
    }
    return (
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Looking for your dream house in country:
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" onChange={onSearchChange}>
                    {countries.map((h) => (
                        // console.log(h);
                        <option key={h} value={h}>{h}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default HouseFilter;