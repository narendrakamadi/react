import RestaurantCard from "../components/RestaurantCard";
import resData from "../utils/Data";
import Search from "./Search";
import { useState } from "react";

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