import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {id: "heading-one", className: 'heading-zero'}, "Hello Namste React from React JS");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

/**
 * 
 * 
 * <div id="parent">
 *   <div id="child">
 *      <h1></h1>
 *      <h2></h2>
 *   </div>
 * <div id="child2">
 *      <h3></h3>
 *      <h4></h4>
 *   </div>
 * </div>
 */

const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "Hello I am h1 tag from child div by nagaraju nali"), React.createElement("h2", {}, "Hello I am h2 tag from child div")]), 

        React.createElement("div", {id: "child2"}, 
        [React.createElement("h3", {}, "Hello I am h3 tag from child div"), React.createElement("h4", {}, "Hello I am h4 tag from child div")]),
    ]
    
)

root.render(parent)

// to keep the code clean and redable we will be use the JSX and modern way of writing the code
//JSX
