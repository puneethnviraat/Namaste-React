
import React from "react"
import { ReactDOM } from "react-dom/client";
import { createRoot } from 'react-dom/client';
const heading=React.createElement("h1",{id:"heading",className:"heading"},"Helllo wolrd from react!!! ");
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(heading)