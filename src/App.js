import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";

import Shimmer from "./components/Shimmer";

// // import ziggyLogo from "ziggy_logo.png"

// //react element
// const reactHeading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React by nagaraju nali",
// );

// console.log(reactHeading);
// //JSX => React.createElement => React Element (js object) => HTML(DOM)
// const jsxHeading = (
//   <h1 id="heading" className="head" tabIndex="0">
//     Namaste React by nagaraju nali
//   </h1>
// );

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(jsxHeading);

// const ParagraphComponent = () => (
//     <p className="paragraph">   
//         This is a paragraph component in react functional component
//     </p>
// );

// // react component
// // class based component: old way of writing code
// // function based component: modern way of writing code


// //This is called component composition, where we are using one component inside another component

// const HeadingComponent = () => (
  
//     <div className="container">
//         <h1 className="heading">Namste react this is a react functional component</h1>
//         <ParagraphComponent/>
//     </div>

// );

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}


const appRouter = createBrowserRouter( [

    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path: '/resturants/:resId',
                element: <ResturantMenu/>
            }
            
        ],
        errorElement: <Error/>
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


/**
 * server side routing - call the about page request will go and sends the page
 * client side routing - already have the code for about us and just change the component
 */

//chunking - code splitting - dynamic bundiling - lazy loading/on demand loading - dynamic import