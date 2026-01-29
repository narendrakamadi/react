import RestaurantCard from "../components/RestaurantCard";
import resData from "../utils/Data";
import Search from "./Search";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurants, setRestaurants] = useState(resData);
    const [searchText, setSearchText] = useState("");
    const handleTopRatedClick = () => {
        const filtered = resData.filter(
            (restaurant) =>
                restaurant.info?.rating?.aggregate_rating > 4
        );
        setRestaurants(filtered);
    }

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        const filtered = resData.filter(
            (restaurant) => restaurant.info?.name?.toLowerCase().includes(value.toLowerCase())
        );
        setRestaurants(filtered);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (<h1 style={{margin: 265, textAlign: "center"}}>Looks like you're offline!! Please check your internet connection; </h1>)
    }

    return (
        <div>
            <Search
                searchText={searchText}
                onSearchChange={handleSearchChange}
                onTopRatedClick={handleTopRatedClick}
            />
            <main className="card-container">
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
                ))}
            </main>
        </div>
    );
}

export default Body;