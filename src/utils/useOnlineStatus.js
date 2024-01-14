import { useState,useEffect } from "react";
const useOnlineStatus=()=>{
const [OnlineStatus, setOnlineStatus]=useState(true);
useEffect(() => {
  window.addEventListener("online", (event) => {
    return setOnlineStatus(true);
  });
  window.addEventListener("offline", (event) => {
    return setOnlineStatus(false);
  });
}, [])


return OnlineStatus;
}
export default useOnlineStatus;