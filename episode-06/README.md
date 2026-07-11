# Namaste React - Episode 06: Exploring the World

## LinkedIn Post (Pointers)

🚀 **Namaste React -- Episode 06: Exploring the World 🌍**

### Here's what I learned

-   🌐 Monolithic vs Microservices Architecture
-   🚀 Why modern applications prefer Microservices
-   🔌 Connecting React applications with External APIs
-   ⚛️ Understanding `useEffect()`
-   📡 Fetching data using Fetch API (`async/await`)
-   🔒 Understanding CORS
-   🔄 Updating React state after API responses
-   ✨ Building Shimmer UI
-   🎯 Conditional Rendering
-   🧠 Why `useState()` is essential
-   🔍 Controlled Components
-   🔎 Search & Filter functionality

### Key Takeaways

-   Connect React with real APIs
-   Master `useEffect()` and Fetch API
-   Understand CORS
-   Improve UX with Shimmer UI
-   Build dynamic applications using `useState`
-   Implement search using controlled components

**Question**

Which concept do you think every React developer should master
first---**useEffect**, **API Fetching**, or **State Management**?

**Hashtags**

#React #ReactJS #JavaScript #Frontend #FrontendDeveloper #WebDevelopment
#NamasteReact #LearningInPublic #100DaysOfCode #Coding #SoftwareEngineer

------------------------------------------------------------------------

# README

## Overview

Episode 06 focuses on connecting React applications with the outside
world using APIs while learning state management, side effects, loading
states, and search functionality.

## Topics Covered

1.  Monolithic vs Microservices
2.  Why Microservices
3.  Connecting React with External APIs
4.  Understanding `useEffect()`
5.  Fetching Data using Fetch API
6.  Understanding CORS
7.  Updating State After API Response
8.  Shimmer UI
9.  Conditional Rendering
10. Why `useState()`
11. Controlled Components
12. Search & Filter Functionality

## Sample Code

``` javascript
useEffect(() => {
  fetchData();
}, []);
```

``` javascript
const fetchData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  setRestaurants(data);
};
```

``` jsx
return isLoading ? <Shimmer /> : <RestaurantList />;
```

``` jsx
const [searchText, setSearchText] = useState("");
<input value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
```

``` javascript
const filteredRestaurants = restaurants.filter((restaurant)=>
  restaurant.name.toLowerCase().includes(searchText.toLowerCase())
);
```

## Key Learnings

-   API Integration
-   React Hooks (`useEffect`, `useState`)
-   Fetch API
-   CORS
-   State Management
-   Shimmer UI
-   Conditional Rendering
-   Controlled Components
-   Search & Filter

## Tech Stack

-   React
-   JavaScript (ES6+)
-   JSX
-   Fetch API
-   React Hooks

## Author

**Nagaraju Nali**\
Frontend Engineer
