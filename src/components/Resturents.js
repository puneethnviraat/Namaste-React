import React, { useEffect, useState } from 'react';
import ResList from '../utils/DataFile';
import { CDN_URL } from '../utils/config';
const ResturentCard = ({
  name,
  areaName,
  cuisines,
  cloudinaryImageId,
  avgRating,
}) => {
  return (
    <div className="resturent-card">
      <img src={CDN_URL + cloudinaryImageId} width={300} height={200} />
      <h3>{name}</h3>
      <p>{avgRating}</p>
      <p> {cuisines.join(', ')}</p>
      <p>{areaName}</p>
    </div>
  );
};

const Resturents = () => {
  const [ResturentsList, setResturentsList] = useState(ResList);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
const data=await fetch(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.2958104&lng=76.6393805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
)

const json = await data.json();
setResturentsList(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants)
  }
  return (
    <div>
      <div className="filter-row">

        <button
          className="btn btn-primary"
          onClick={() => {
            const FilteredResturentsList = ResturentsList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setResturentsList(FilteredResturentsList);
          }}>
          Highly rated
        </button>
      </div>
      <div className="resturent-list">
        {ResturentsList.map((resturent) => {
          return <ResturentCard {...resturent.info} key={resturent.info.id} />;
        })}
      </div>
    </div>
  );
};
export default Resturents;
