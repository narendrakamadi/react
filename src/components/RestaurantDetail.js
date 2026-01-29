import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantDetail = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId); // this is custom hook

    // this is because useRestaurantMenu hook is null initially
    if (!resInfo) {
        return <div>Loading...</div>;
    } else {
        console.log(resInfo);
    }

    return (
        <div className="restaurant-page">
            {/* Restaurant Banner */}
            <div className="restaurant-header">
                <img
                    className="restaurant-image"
                    src={ resInfo.gallery[0] }
                    alt="Restaurant"
                />

                <div className="restaurant-info">
                    <h1 className="restaurant-name">{ resInfo.name }</h1>
                    <p className="restaurant-cuisines">{ resInfo.amenities.join(", ") }</p>
                    <p className="restaurant-cuisines">{ resInfo?.description }</p>

                    <div className="restaurant-meta">
                        <span>⭐ { resInfo?.rating }</span>
                        <span>⏱ 30 mins</span>
                        <span>₹400 for two</span>
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <div className="menu-section">
                { resInfo.menu.map((category) => (
                    <div key={ category.category }>
                        <h2 className="menu-title">{ category.category }</h2>
                        { category.items.map((item) => (
                            <div className="menu-item" key={item.id}>
                                <div>
                                    <h3>{ item.name }</h3>
                                    <p className="menu-price">₹{ item.price }</p>
                                    <p className="menu-desc">
                                        { item.bestSeller && <span>🌟 Best Seller! </span> }
                                        { item.isVeg ? "Veg" : "Non-Veg" }
                                    </p>
                                </div>
                                <button className="add-btn">ADD</button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="menu-section">
                <h3>Address: </h3>
                <p className="restaurant-cuisines">{ resInfo?.contact?.address }</p>
                <p className="restaurant-cuisines">{ resInfo?.contact?.phone }</p>
            </div>

        </div>
    );
};

export default RestaurantDetail;
