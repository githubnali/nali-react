import RestroCard from "./RestroCard";

import Shimmer from "./Shimmer";

import { useState, useEffect } from "react";

import { Link } from "react-router";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  //Local State Variable - Super powerful variable
  const [listedResturants, setListedResturants ] = useState([]);

  const [filteredResturants, setFilteredResturants]  = useState([]);

  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();

    setListedResturants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return <h1>Looks like you are offline please check your interner connection</h1>
  }

  return listedResturants.length === 0 ? <Shimmer/> : (
    <main className="body">
      <div className="filter">
        <div className="search">
            <input type='text' className="search-box" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
            <button className="search-btn" onClick={() => {
              const filteredResturant = listedResturants.filter(
                (res) => res.info.name.toLowerCase().includes(inputValue.toLowerCase())
              );
              setFilteredResturants(filteredResturant);
            }}>search</button>
        </div>
        <button
          className="top-rated-restro"
          onClick={() => {
            console.log("button clicked");
            const filterredList = listedResturants.filter((res) => res.avgRating > 4);
            console.log(listedResturants);
            // setListedResturants(filterredList);
          }}
        >
          Top Rated
        </button>
      </div>
      {listedResturants.length === 0 ? <Shimmer/> : 
      
        <div className="restro-container">
          {filteredResturants.map((restro) => (
            <Link key={restro.info.id} to={"/resturants/" + restro.info.id}>
              <RestroCard restroData={restro.info} />
            </Link>
          ))}
        </div>
      }
    </main>
  );
};

export default Body;
