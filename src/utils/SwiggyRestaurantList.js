import React, { useEffect, useState } from "react";

const SwiggyRestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(
                "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        lat: "18.5468389",
                        lng: "73.9309636",
                        pageType: "SEE_ALL",
                        sortBy: "RELEVANCE"
                    })
                }
            );

            const json = await response.json();

            // 🔍 Safely extract restaurant cards
            const restaurantCards =
                json?.data?.cards
                    ?.find(card => card?.card?.card?.gridElements)
                    ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setRestaurants(restaurantCards);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
            setLoading(false);
        }
    };

    if (loading) {
        return <h2>Loading restaurants...</h2>;
    }

    return (
        <div>
            <h1>Restaurants Near You</h1>
            {restaurants.length === 0 && <p>No restaurants found</p>}
            <ul>
                {restaurants.map((res) => (
                    <li key={res.info.id}>
                        <h3>{res.info.name}</h3>
                        <p>{res.info.cuisines.join(", ")}</p>
                        <p>⭐ {res.info.avgRating}</p>
                        <p>{res.info.areaName}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SwiggyRestaurantList;