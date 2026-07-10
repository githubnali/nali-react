import RestroCard from "./RestroCard";

import restroObj from "../utils/mockData";

import { useState, useEffect } from "react";

const Body = () => {

  //Local State Variable - Super powerful variable
  const [listedResturants, setListedResturants ] = useState(restroObj);

  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8017099&lng=77.7116112&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();

    console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  //normal javascript variable
//   let listedResturants = [
//     {
//       id: 1,
//       restroName: "Meghana Foods",
//       cusine: "Biryani, Andhra, Chinese",
//       rating: 4.7,
//       deliveryTime: "32 Mins",
//       image:
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/3/15/8c6d8db6-2cdb-47c8-9d5c-efcbf8c09b90.jpg",
//     },
//     {
//       id: 3,
//       restroName: "Truffles",
//       cusine: "Burgers, American, Desserts",
//       rating: 4.5,
//       deliveryTime: "28 Mins",
//       image:
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/2/11/f6fd45d5-d91f-4a57-bd4d-56b89c0b47d3.jpg",
//     },
//     {
//       id: 4,
//       restroName: "CTR Malleshwaram",
//       cusine: "South Indian, Breakfast",
//       rating: 2.6,
//       deliveryTime: "25 Mins",
//       image:
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/4/8/d4d9e9f5-9cb6-44aa-a48b-e8cb8d3fb7a7.jpg",
//     },
//     {
//       id: 5,
//       restroName: "The Pizza Bakery",
//       cusine: "Pizza, Italian",
//       rating: 4.7,
//       deliveryTime: "30 Mins",
//       image:
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/5/6/8d1cb8d9-fba2-4e4f-9e26-87c3f0b98563.jpg",
//     },
//   ];

  return (
    <main className="body">
      <div className="filter">
        <button
          className="top-rated-restro"
          onClick={() => {
            console.log("button clicked");
            const filterredList = listedResturants.filter((res) => res.rating > 4);
            console.log(listedResturants);
            setListedResturants(filterredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="restro-container">
        {listedResturants.map((restro) => (
          <RestroCard key={restro.id} restroData={restro} />
        ))}
      </div>
    </main>
  );
};

export default Body;
