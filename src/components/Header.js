import { useState, useEffect } from "react";

import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    console.log("header Rendered");

    const onlineStatus = useOnlineStatus();

    //if no dependency array => useeffect called on every render
    //if dependency array is empty = [] => useEffect is called on initial render(just once)
    //if dependency array is [btnName] => called everytime btnNameReact is updated
    useEffect(() => {
        console.log('use effect called')
    }, []);
    
    return (
        <header className="header flex justify-between bg-yellow-800 shadow-2xl">
            <div className="logo-container">
                <img className="logo w-28 h-auto" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="/>
            </div>
            <div className="nav-items">
                <ul className="flex">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "💚" : "❤️"}
                    </li>
                    <li className="px-4">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">
                            About US
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">
                            Contact US
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">
                            Grocery
                        </Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" onClick={() => {btnName === 'Login' ? setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>

        </header>
    )
}

export default Header;