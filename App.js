import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/your-puneeth-logo.png";
import resturentDataImport from "./Data.json";
import { FcBusinessman } from "react-icons/fc";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resturentData = resturentDataImport;
const ResturentCard = ({ name, area, avgRating, cloudinaryImageId }) => {
  return (
    <div className="ResturentCard">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>{area}</p>
      <p>
        <b> {avgRating}</b> stars
      </p>
    </div>
  );
};
const Body = () => {
  return (
    <div className="resurentsHolder container">
      {resturentData.data.map((resturent) => {
        return <ResturentCard {...resturent.data} key={resturent.data.id} />;
      })}
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer">
<p>This is the React app for practice...</p>
    </div>
  );
  
};

const Applayout = () => {
  return (
    <div className="">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
