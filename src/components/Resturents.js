import React, { useEffect, useState } from 'react';
import { CDN_URL, API_URL } from '../utils/config';
import ShimmerUi from './ShimmerUi';
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
  const [ResturentsList, setResturentsList] = useState([]);
  const [FilteredResturentsList, setFilteredResturentsList] = useState([]);
  const [searchText, setSeachText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setResturentsList(
      json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setFilteredResturentsList(
      json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
  };

  return FilteredResturentsList.length==0?<ShimmerUi/>:(
    
    <div>
      <div className='filter-row'>
                <input
          type="text"
          placeholder="Search by Resturent name..."
          value={searchText}
          onChange={(e) => {
            setSeachText(e.target.value);
          }}
        />
        <button className="btn btn-primary"
          onClick={() => {
            const searchResult = ResturentsList.filter((res) => {
            return  res.info.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredResturentsList(searchResult);
          }}>
          <i className="fa fa-search"></i>
        </button>

        <button
          className="btn btn-light"
          onClick={() => {
            const FilteredResList = ResturentsList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredResturentsList(FilteredResList);
          }} >
          Highly rated
        </button>
        </div>
<div className='clr'></div>

        <div className="resturent-list">
        {FilteredResturentsList.map((resturent) => {
        return <ResturentCard {...resturent.info} key={resturent.info.id} />;
        })}
        </div>
    </div>
  );
};
export default Resturents;
