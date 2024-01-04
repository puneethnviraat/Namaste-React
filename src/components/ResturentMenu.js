import React, { useEffect, useState } from 'react';
import { API_MENU_URL, CDN_URL } from '../utils/config';
import { useParams } from 'react-router-dom';
import noImage from '../images/no-image.png';

const ResturentMenu = () => {
  const { id } = useParams();
  const [menus, setmenus] = useState([]);
  const [resinfo, setresinfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(API_MENU_URL + id);
    const json = await data.json();
    const resinfo = json.data.cards[0].card.card.info;
    // const menus=json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[5].card.card.itemCards;
    const menus = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    setmenus(menus);
    setresinfo(resinfo);
  };
  return (
    <div className="resturent-menu">
      <div className="resturent-info">
        <div>
          <h1>{resinfo.name}</h1>
          <p>
            {resinfo.areaName},{resinfo.locality},
          </p>
          <p>{resinfo.city}</p>
          <h4> {resinfo.costForTwoMessage}</h4>
          <h2> {resinfo.cuisines}</h2>
          <h4> &#9733;&#9733;&#9733;&#9733;&#9734;{resinfo.avgRatingString}</h4>
        </div>
        <div>
          <img
            src={CDN_URL + resinfo.cloudinaryImageId}
            width={300}
            height={200}
          />
        </div>
      </div>

      {menus.map((item, index) => (
        <div key={index} className="menu-categories">
          <h3>{item.card?.card?.title}</h3>
          {item.card?.card?.itemCards?.map((itemname, i) => (
            <div key={itemname.card.info.id} className="menu-card">
              <img
                src={
                  itemname.card?.info?.imageId
                    ? CDN_URL + itemname.card?.info?.imageId
                    : noImage
                }
                width={150}
                height={150}
              />
              <p>
                <b> {itemname.card.info.name}</b>
              </p>
              <p>
                {' '}
                <i class="fa fa-inr" aria-hidden="true"></i>
                {itemname.card.info.price / 100}{' '}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ResturentMenu;
