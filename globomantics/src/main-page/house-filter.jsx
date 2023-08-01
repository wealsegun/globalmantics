import {useHistory} from "react-router-dom";

const HouseFilter = ({ allHouses }) => {
    const history = useHistory();
    const countries = allHouses ? Array.from(new Set(allHouses.map((h) => h.country))) : [];
    countries.unshift();

    const onSearchChange  =(e) => {
         const country = e.target.value;
         history.push("/searchresults/" + country);
    }
    return (
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Looking for your dream house in country:
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" onChange={onSearchChange}>
                    {countries.map((h) => (
                        <option key={h} value={h}>{h}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default HouseFilter;