import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setUseOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setUseOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setUseOnlineStatus(true);
        })
    })
    
    return onlineStatus;
}

export default useOnlineStatus;