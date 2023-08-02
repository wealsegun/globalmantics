import { useParams } from "react-router";
import SearchResultsRow from "./search-results-row";
import { useContext } from "react";
import HouseContext from "../contexts/houseContext";

const SearchResults = () => {
    const allHouses = useContext(HouseContext);
    const { country } = useParams();
    const filteredHouses = allHouses.filter(c => c.country === country);

    return (
        <div className="mt-2">
            <h4>Results for {country}: </h4>
            <table className="table table-hover">
                <tbody>
                    {
                        filteredHouses.map(h => (
                            <SearchResultsRow key={h.id} house={h} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default SearchResults;