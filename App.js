import React from "react";
import ReactDOM from "react-dom/client";

// import ziggyLogo from "ziggy_logo.png"

//react element
const reactHeading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React by nagaraju nali",
);

console.log(reactHeading);
//JSX => React.createElement => React Element (js object) => HTML(DOM)
const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="0">
    Namaste React by nagaraju nali
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

const ParagraphComponent = () => (
    <p className="paragraph">   
        This is a paragraph component in react functional component
    </p>
);

// react component
// class based component: old way of writing code
// function based component: modern way of writing code


//This is called component composition, where we are using one component inside another component

const HeadingComponent = () => (
  
    <div className="container">
        <h1 className="heading">Namste react this is a react functional component</h1>
        <ParagraphComponent/>
    </div>

);

// root.render(<HeadingComponent />);

/**
 * HeaderComponent
 *  logo
 *  nav items
 * BodyComponent
 *  searchcomponenent
 *  restro container
 *      resturant card  
 *          - img
 *          - name of resturant
 *          - star rating
 *          - cusines
 *          - time for delivery
 * FooterComponent
 *  - copyrithg
 *  - address
 *  - links
 *  - contact
 */

const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>

                </ul>
            </div>

        </header>
    )
}

const restroObj = [
  {
    id: 1,
    restroName: "Meghana Foods",
    cusine: "Biryani, Andhra, Chinese",
    rating: "4.7",
    deliveryTime: "32 Mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/3/15/8c6d8db6-2cdb-47c8-9d5c-efcbf8c09b90.jpg",
  },
  {
    id: 2,
    restroName: "Empire Restaurant",
    cusine: "North Indian, Biryani, Kebabs",
    rating: "4.5",
    deliveryTime: "35 Mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/1/10/3bb0cb8d-cdc8-4fb6-a34d-61d97521116b.jpg",
  },
  {
    id: 3,
    restroName: "Truffles",
    cusine: "Burgers, American, Desserts",
    rating: "4.8",
    deliveryTime: "28 Mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/2/11/f6fd45d5-d91f-4a57-bd4d-56b89c0b47d3.jpg",
  },
  {
    id: 4,
    restroName: "CTR Malleshwaram",
    cusine: "South Indian, Breakfast",
    rating: "4.6",
    deliveryTime: "25 Mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/4/8/d4d9e9f5-9cb6-44aa-a48b-e8cb8d3fb7a7.jpg",
  },
  {
    id: 5,
    restroName: "The Pizza Bakery",
    cusine: "Pizza, Italian",
    rating: "4.7",
    deliveryTime: "30 Mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/5/6/8d1cb8d9-fba2-4e4f-9e26-87c3f0b98563.jpg",
  },
  {
    id: 6,
    restroName: "Leon Grill",
    cusine: "Fast Food, Wraps, Burgers",
    rating: "4.4",
    deliveryTime: "27 Mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/1/22/7bdb53c0-cb8e-42cb-b2d5-62d6efecf6f8.jpg",
  },
  {
    id: 7,
    restroName: "A2B - Adyar Ananda Bhavan",
    cusine: "South Indian, Sweets",
    rating: "4.5",
    deliveryTime: "24 Mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/2/7/873a8d52-3c4c-489f-aaf2-1739fd65fd82.jpg",
  },
  {
    id: 8,
    restroName: "Burger Seigneur",
    cusine: "Burgers, Fast Food",
    rating: "4.6",
    deliveryTime: "29 Mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/6/4/9e70a8c2-bd53-45fd-bdd0-9af52bfb4d7b.jpg",
  },
  {
    id: 9,
    restroName: "Polar Bear",
    cusine: "Ice Cream, Desserts",
    rating: "4.5",
    deliveryTime: "18 Mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/3/28/2cb2a7c4-fcb8-47d7-a1c8-dff80d78cb79.jpg",
  },
  {
    id: 10,
    restroName: "Sri Udupi Park",
    cusine: "South Indian, North Indian",
    rating: "4.4",
    deliveryTime: "26 Mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/2/18/e3eb7b72-7348-4b7b-95f2-f0d8ebd8d95b.jpg",
  },
];



// const restroObj = {
//     id: 1,
//     restroName: "Meghana Foods",
//     cusine: "Biryani, Andhra, Chinese",
//     rating: "4.7",
//     deliveryTime: "32 Mins",
//     image:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/3/15/8c6d8db6-2cdb-47c8-9d5c-efcbf8c09b90.jpg",
//     costForTwo: 40000,
//   }

const RestroCard = (props) => {
    console.log(props);
    const {restroData} = props;
    const {restroName, cusine, rating, deliveryTime, image} = restroData;

    return (
        <div className="restro-card">
            <img  className="restro-img" alt="restro-img" src={restroData.image}/>
            <h3>{restroName}</h3>
            <h4>{cusine}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}
const BodyComponent = () => {
    return (
        <main className="body">
            <div className="search">
                <input type="search" className="search-restro"/>
                <button className="search-restro-btn">Search</button>
            </div>
            <div className="restro-container">
                {
                    restroObj.map((restro) => <RestroCard key={restro.id} restroData={restro}/>)
                }
            </div>
        </main>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    )
}

root.render(<AppLayout/>)

