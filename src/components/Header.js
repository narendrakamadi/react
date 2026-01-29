import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header Rendered!");

    useEffect(() => {
        console.log("useEffect called");
    }, []);

    return (
        <header className="header">
            <div className="logo"><Link to="/">🍔 FoodVilla</Link></div>
            <nav className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/grocery">Grocery</Link>
                <a href="#">Cart</a>
                <a href="#" onClick={() => {
                    btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                }}>{ btnNameReact }</a>
            </nav>
        </header>
    );
}

export default Header;