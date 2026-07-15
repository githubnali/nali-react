import { useState, useEffect } from "react";

import { Link } from "react-router";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    console.log("header Rendered");

    //if no dependency array => useeffect called on every render
    //if dependency array is empty = [] => useEffect is called on initial render(just once)
    //if dependency array is [btnName] => called everytime btnNameReact is updated
    useEffect(() => {
        console.log('use effect called')
    }, []);
    
    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About US
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact US
                        </Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {btnName === 'Login' ? setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>

        </header>
    )
}

export default Header;