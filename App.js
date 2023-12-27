import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";


// const heading=React.createElement("div",{id:"heading"},[
//   React.createElement("h1",{},"React app 🚀 "),
//   React.createElement("p",{},"test paragraphn one"),
//  React.createElement("p",{},"test paragraph two"),
//  React.createElement("p",{},"test paragraph threeo"),
// ]);
//React Element
const title=(
  <h1>this is react JSX   🚀  </h1>
)

//React component
//class based component - OLD

// functional component - New

const HeadingComponent=()=>{
  
return (<h1>
  {title}
  Namaste React functional component ☺️
  </h1>);
}

const domroot=document.getElementById("root")
const root=createRoot(domroot);
root.render(<HeadingComponent />)