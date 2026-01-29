import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">About FoodVilla</h1>
            <div style={{ display: "flex" }}>
                <div><UserClass name={"Narendra Kamadi"} location={"Pune, Maharashtra"} /></div>
                <div>
                    <p className="page-text">
                        Welcome to <strong>FoodVilla</strong> — your go-to destination for
                        delicious food delivered fast and fresh. We connect food lovers with
                        the best restaurants in town, all in just a few clicks.
                    </p>
                    <p className="page-text">
                        At FoodVilla, we believe food is more than just a meal — it’s an
                        experience. From local favorites to trending cuisines, our platform
                        brings variety, quality, and convenience right to your doorstep.
                    </p>
                    <div className="highlight-box">
                        <h3>Why Choose FoodVilla?</h3>
                        <ul>
                            <li>🍕 Wide range of restaurants & cuisines</li>
                            <li>🚀 Fast & reliable delivery</li>
                            <li>💳 Secure & easy payments</li>
                            <li>⭐ Trusted by thousands of food lovers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;