import { useEffect,useState } from "react";
import { API_MENU_URL, CDN_URL } from '../utils/config';

const useResturentMenu=(resID)=>{
  const [resinfo, setresinfo] = useState([]);
  const [menus, setmenus] = useState([]);

useEffect(()=>{
  fetchData();
},[]);

const fetchData = async () => {
    const data = await fetch(API_MENU_URL + resID);
    const json = await data.json();
    const resinfo = json.data.cards[0].card.card.info;
    const menus = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    setmenus(menus);
    setresinfo(resinfo);
  };
return [resinfo,menus];
}
export default useResturentMenu;