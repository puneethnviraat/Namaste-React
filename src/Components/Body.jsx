import { useState } from "react";
import resturentData from "../../Data.json";
import ResturentCard from "./ResturentCard";

const Body = () => {
  const [searchText, setText] = useState("Find Resturent...");
  const [resturents, setFilterResturent] = useState(resturentData);
  function filterData(searchText,resturents){
    if (searchText) {
     return resturents.filter((resturent)=>
     resturent.data.name.includes(searchText))
    } else {
      return resturentData
    }
}
  return (
    <div className="container">
      <div id="search-box">
        <div id="search-form">
          <input
            id="search-text"
            name="Search"
            placeholder={searchText}
            type="text"
           onChange={(e)=>{
            setText(e.target.value);
           }}
          />
          <button id="search-button" type="submit"  onClick={() => {
              //need to filte data
              const data= filterData(searchText,resturents);
              //update the state resturents
              setFilterResturent(data)
              
            }}>
            <span>Search</span>
          </button>
        </div>
      </div>
      <div className="resurentsHolder">
        {resturents.map((resturent) => {
          return <ResturentCard {...resturent.data} key={resturent.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
