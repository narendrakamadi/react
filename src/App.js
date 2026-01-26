import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            {/*<Search />*/}
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);