import logo from "./GloboLogo.png";
// import { Component } from "react";

// class Header extends Component {
//     render() {
//         return (
//             <header className="row">
//                 <div className="col-md-5">
//                     <img src={logo} className="logo" alt="logo" />
//                     <h2>{this.props.title}</h2>
//                 </div>
//                 <div className="col-md-7 mt-5 subtitle"> {this.props.subtitle}</div>
//             </header>
//         )
//     }
// }
const Header = ({ subtitle, title }) => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo" />
            <h2>{title}</h2>
        </div>
        <div className="col-md-7 mt-5 subtitle"> {subtitle}</div>
    </header>
);

export default Header; 