import { Link } from "react-router-dom";

const RestaurantCard = ({ resData: {info } }) => {
    const { name, image, cuisine, rating } = info || {};
    return (
        <Link to={"/restaurant/" + info.resId}>
            <div className="card">
                <img src={ image?.url } alt="Spicy Treat" />
                <h3>{ name }</h3>
                <p>{cuisine?.map(c => c.name).join(", ")}</p>
                <p className="rating">⭐ { rating?.aggregate_rating }</p>
            </div>
        </Link>
    );
}

export default RestaurantCard;