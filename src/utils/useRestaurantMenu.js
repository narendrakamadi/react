import { useState, useEffect } from "react";
import DetailData from "../utils/DetailData";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const data = DetailData[resId];
        setResInfo(data);
    }, [resId]);

    return resInfo;
};

export default useRestaurantMenu;