import "./house.css";
import emailIcon from "./Email.png";
import { useState } from "react";
import Inquiry from "./inquiry";
import PropTypes from 'prop-types';


const House = ({ house }) => {
    console.log(house);
    const [inquiryShown, setInquiryShowm] = useState(false);

    const inquiryClick = () => {
        setInquiryShowm(!inquiryShown);
    }
    return (
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
            </div>
            <div className="row">
                <h3 className="col-md-12">{house.address}</h3>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${house.photo}.jpeg`} alt="House" />
                </div>
                <div className="col-md-5">
                    <p className="price">${house.price}</p>
                    <p>{house.description}</p>
                    <img
                        src={emailIcon}
                        height="50"
                        alt="inquiry"
                        onClick={inquiryClick}
                    />
                    {inquiryShown && <Inquiry house={house} />}
                </div>
            </div>
        </div>
    );
}
House.prototype = {
    house: PropTypes.object.isRequired,
}
export default House; 