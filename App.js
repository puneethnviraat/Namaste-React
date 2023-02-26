import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";
import Header from "./src/Components/Header";


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
