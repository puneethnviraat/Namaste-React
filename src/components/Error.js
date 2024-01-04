import React from "react";
import { useRouteError } from 'react-router-dom'
const Error =()=>{
const err = useRouteError();

  return(
    <div>
      <h1>OOPS!!!!</h1>
      <h3>Page not found</h3>
      <p>{err.message} and {err.statusText}</p>
    </div>
  )
}

export default Error;