import { useState } from "react";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    
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
                    <button className="login-btn" onClick={() => {btnName === 'Login' ? setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>

        </header>
    )
}

export default Header;