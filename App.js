import React from "react";
import ReactDOM from "react-dom/client"
import logo from './assets/your-puneeth-logo.png';
import { FcBusinessman } from "react-icons/fc";

// nested header element using JSX
const title1= React.createElement("h1",{style:{color:"red"}},"Test divle 1");
const title2= React.createElement('h2', {id:"testdivne"},"test divne Two this is for testing");
const title3= React.createElement(
    "h3",{},"This is the assingment three did for Namaste react project.."
    );
    const TitleComponent1= React.createElement(
        "div",{className:"title"},[title1,title2,title3]      
        )
    
// nested header element using functional component
const TitleComponent2=()=>{
    
    return(
        <div className="title" >
            {TitleComponent1}
        <h1>Test divle 2</h1>
        <h2>test divne Two this is for testing of functional component</h2>
        <h3>This is the assingment three did for Namaste react project..</h3>
        </div>
    )
}
const TitleComponent3=()=>{
    
    
    return(
        <div className="title" >
            <div>
            <img className="logo" src={logo} alt="" />

            </div>
        <div >
        <input className="search" type="text" placeholder="Search here"/>
        </div>
    <div>
    <FcBusinessman style={{ fontSize: "2.5em" }}/> User name
    </div>
        </div>
    )
}

//New header component using functional component



    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<TitleComponent3 />);

