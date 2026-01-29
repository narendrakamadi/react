const DetailsData = {
    // 1. Third Place (From your list)
    "22184793": {
        "resId": 22184793,
        "name": "Third Place",
        "tagline": "Eat, Drink, and Unwind.",
        "description": "A minimalist sanctuary in the heart of Koregaon Park. Third Place focuses on high-quality ingredients and a tranquil atmosphere for digital nomads and foodies alike.",
        "gallery": [
            "https://b.zmtcdn.com/data/pictures/3/22184793/3e4ba4e98d9dac40d64cedc7394f3c48_o2_featured_v2.jpg",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24"
        ],
        "amenities": ["Outdoor Seating", "Free Wi-Fi", "Vegan Options", "Work-friendly"],
        "menu": [
            {
                "category": "Signature Bowls",
                "items": [
                    { "id": "tp1", "name": "Mexican Burrito Bowl", "price": 495, "isVeg": true, "bestSeller": true },
                    { "id": "tp2", "name": "Cantonese Dim Sums", "price": 380, "isVeg": false }
                ]
            }
        ],
        "rating": 3.3,
        "contact": { "phone": "+91 20 6601 2233", "address": "1st Floor, Jewel Tower, Lane 5, Koregaon Park, Pune" }
    },

    // 2. QORA (From your list)
    "20099071": {
        "resId": 20099071,
        "name": "QORA - Cocktail Bar & Kitchen",
        "tagline": "Modern Asian & Crafted Cocktails.",
        "description": "A high-energy bar and kitchen known for its sophisticated interiors and experimental Asian fusion menu. Perfect for weekend nights.",
        "gallery": [
            "https://b.zmtcdn.com/data/pictures/1/20099071/9f68f14e284dd7f76086c131870b0718_o2_featured_v2.jpg",
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
        ],
        "amenities": ["Full Bar", "Valet Parking", "Live Music"],
        "menu": [
            {
                "category": "Small Plates",
                "items": [
                    { "id": "q1", "name": "Crystal Truffle Dumplings", "price": 550, "isVeg": true, "bestSeller": true },
                    { "id": "q2", "name": "Salmon Aburi Sushi", "price": 850, "isVeg": false }
                ]
            }
        ],
        "rating": 3.5,
        "contact": { "phone": "+91 20 4400 1122", "address": "Suyojana Society, Lane 8, Koregaon Park, Pune" }
    },

    // 3. Heads Up Rooftop Bar (From your list)
    "21042474": {
        "resId": 21042474,
        "name": "Heads Up Rooftop Bar",
        "tagline": "Dining Under the Stars.",
        "description": "Offering a panoramic view of the Pune skyline, specializing in North Indian kebabs and Continental grills.",
        "gallery": [
            "https://b.zmtcdn.com/data/pictures/4/21042474/76dbb3ed41e8f6ae9f04f810e9976101_o2_featured_v2.jpg",
            "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7"
        ],
        "amenities": ["Rooftop", "Alcohol Served", "Nightlife"],
        "menu": [
            {
                "category": "Tandoor Specials",
                "items": [
                    { "id": "hu1", "name": "Murg Rozali Kebab", "price": 525, "isVeg": false, "bestSeller": true },
                    { "id": "hu2", "name": "Paneer Tikka Angare", "price": 450, "isVeg": true }
                ]
            }
        ],
        "rating": 4.5,
        "contact": { "phone": "+91 20 8800 5566", "address": "3rd Floor, Grand Horizon, Sinhgad Road, Pune" }
    },

    // 4. IHOP (From your list)
    "21189639": {
        "resId": 21189639,
        "name": "IHOP",
        "tagline": "Everything You Love About Breakfast.",
        "description": "The world-famous pancake house brings its signature fluffy stacks and American breakfast classics to Pune.",
        "gallery": [
            "https://b.zmtcdn.com/data/pictures/9/21189639/275811824483f42d239a6b03db24c11c_o2_featured_v2.jpg",
            "https://images.unsplash.com/photo-1567620985032-026c12504808"
        ],
        "amenities": ["Mall Parking", "Kid Friendly", "All Day Breakfast"],
        "menu": [
            {
                "category": "Pancakes",
                "items": [
                    { "id": "ih1", "name": "NY Cheesecake Pancakes", "price": 425, "isVeg": true, "bestSeller": true },
                    { "id": "ih2", "name": "Belgian Chocolate Waffle", "price": 375, "isVeg": true }
                ]
            }
        ],
        "rating": 4.3,
        "contact": { "phone": "+91 20 3300 9988", "address": "2nd Floor, Pavillion Mall, SB Road, Pune" }
    },

    // 5. Malaka Spice (New - Iconic Pune Spot)
    "12345678": {
        "resId": 12345678,
        "name": "Malaka Spice",
        "tagline": "Inspired South East Asian Cuisine.",
        "description": "An award-winning restaurant in Koregaon Park known for its vibrant art, lush outdoor seating, and unique 'Inspired' Pan-Asian menu.",
        "gallery": ["https://images.unsplash.com/photo-1552566626-52f8b828add9"],
        "amenities": ["Outdoor Garden", "Art Gallery", "Valet Parking"],
        "menu": [
            {
                "category": "Small Plates",
                "items": [
                    { "id": "ms1", "name": "Top Hats", "price": 395, "isVeg": true, "bestSeller": true },
                    { "id": "ms2", "name": "Malaka Thai Red Curry", "price": 550, "isVeg": false }
                ]
            }
        ],
        "contact": { "phone": "+91 20 2615 1088", "address": "Lane 5, Koregaon Park, Pune" }
    },

    // 6. German Bakery (New - Iconic Pune Spot)
    "87654321": {
        "resId": 87654321,
        "name": "German Bakery",
        "tagline": "The Soul of Koregaon Park.",
        "description": "Since 1988, German Bakery has been the meeting point for travelers and locals. Famous for its desserts and boho-chic vibe.",
        "gallery": ["https://images.unsplash.com/photo-1509042239860-f550ce710b93"],
        "amenities": ["Bakery", "Breakfast Spot", "Bohemian Decor"],
        "menu": [
            {
                "category": "Bakery",
                "items": [
                    { "id": "gb1", "name": "Shrewsbury Biscuits", "price": 200, "isVeg": true },
                    { "id": "gb2", "name": "German Apple Strudel", "price": 250, "isVeg": true, "bestSeller": true }
                ]
            }
        ],
        "contact": { "phone": "+91 20 2613 6564", "address": "North Main Road, Koregaon Park, Pune" }
    },

    // 7. Paasha (New - Rooftop Fine Dining)
    "99887766": {
        "resId": 99887766,
        "name": "Paasha - JW Marriott",
        "tagline": "Elevated Indian Dining.",
        "description": "Experience fine dining on the 24th floor. Paasha offers an exquisite North Indian menu with a 360-degree view of the city.",
        "gallery": ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"],
        "amenities": ["Luxury", "Sky Lounge", "Dress Code"],
        "menu": [
            {
                "category": "Mains",
                "items": [
                    { "id": "pa1", "name": "Dal Paasha", "price": 750, "isVeg": true, "bestSeller": true },
                    { "id": "pa2", "name": "Kakori Kebab", "price": 1200, "isVeg": false }
                ]
            }
        ],
        "contact": { "phone": "+91 20 6683 3333", "address": "JW Marriott, SB Road, Pune" }
    },

    // 8. Savya Rasa (New - South Indian)
    "55443322": {
        "resId": 55443322,
        "name": "Savya Rasa",
        "tagline": "Authentic Flavors of South India.",
        "description": "Explore the diverse culinary traditions of the seven regions of South India in a culturally immersive setting.",
        "gallery": ["https://images.unsplash.com/photo-1505253758473-96b7015fcd40"],
        "amenities": ["Traditional Decor", "Cultural Ambiance", "Fine Dining"],
        "menu": [
            {
                "category": "Appetizers",
                "items": [
                    { "id": "sr1", "name": "Vazhapoo Cutlet", "price": 350, "isVeg": true },
                    { "id": "sr2", "name": "Pallipalayam Chicken", "price": 475, "isVeg": false, "bestSeller": true }
                ]
            }
        ],
        "contact": { "phone": "+91 20 2615 3535", "address": "Lane 7, Koregaon Park, Pune" }
    },

    // 9. Le Plaisir (New - French/European)
    "11223344": {
        "resId": 11223344,
        "name": "Le Plaisir",
        "tagline": "European Soul, Local Heart.",
        "description": "Known for the best cheesecakes and pastas in town. A bustling bistro with a focus on technique and flavor.",
        "gallery": ["https://images.unsplash.com/photo-1550966842-2b6389f36f9a"],
        "amenities": ["Bistro", "Great Desserts", "Casual Dining"],
        "menu": [
            {
                "category": "Pastas",
                "items": [
                    { "id": "lp1", "name": "Smoked Chicken Pasta", "price": 550, "isVeg": false, "bestSeller": true },
                    { "id": "lp2", "name": "Blueberry Cheesecake", "price": 320, "isVeg": true, "bestSeller": true }
                ]
            }
        ],
        "contact": { "phone": "+91 20 2567 2222", "address": "Prabhat Road, Erandwane, Pune" }
    },

    // 10. Agent Jack's Bar (New - Trending Bar)
    "66778899": {
        "resId": 66778899,
        "name": "Agent Jack's Bar",
        "tagline": "The Bidding Bar.",
        "description": "A fun, interactive bar concept where you bid for your drinks using an app. High energy and great music.",
        "gallery": ["https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"],
        "amenities": ["App-based Bidding", "Budget Drinks", "Group Friendly"],
        "menu": [
            {
                "category": "Bar Nibbles",
                "items": [
                    { "id": "aj1", "name": "Chilly Chicken", "price": 350, "isVeg": false },
                    { "id": "aj2", "name": "Masala Fries", "price": 180, "isVeg": true }
                ]
            }
        ],
        "contact": { "phone": "+91 20 9900 1100", "address": "ICC Trade Tower, SB Road, Pune" }
    },

    "21441272": {
        "resId": 21441272,
        "name": "Ouza Cocktail Bar & Kitchen",
        "tagline": "Whimsical Flavors & Global Cuisine.",
        "description": "An award-winning trendy restro-bar known for its eclectic decor and a menu that travels across the globe. From European classics to Asian fusion.",
        "gallery": [
            "https://b.zmtcdn.com/data/pictures/2/21441272/7a136893cd3ed19aadcbe75072d774fa_o2_featured_v2.jpg",
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
        ],
        "amenities": ["Full Bar", "Outdoor Seating", "Live Music", "Valet Parking"],
        "menu": [
            {
                "category": "Small Plates",
                "items": [
                    { "id": "ss1", "name": "Cajun Butter Garlic Prawns", "price": 645, "isVeg": false, "bestSeller": true },
                    { "id": "ss2", "name": "Baked Lasagna", "price": 525, "isVeg": true }
                ]
            }
        ],
        "rating": 4.3,
        "contact": { "phone": "+91 20 7196 6675", "address": "Lane 7, Koregaon Park, Pune" }
    },
    "10072": {
        "resId": 10072,
        "name": "Mainland China",
        "tagline": "The Original Pune Landmark.",
        "description": "Established in 1988, this iconic spot is famous for its Shrewsbury biscuits, frozen hot chocolate, and bohemian vibe.",
        "gallery": [
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
            "https://images.unsplash.com/photo-1555507036-ab1f4038808a"
        ],
        "amenities": ["Bakery", "Breakfast Spot", "Outdoor Seating", "Pet Friendly"],
        "menu": [
            {
                "category": "Bakery Classics",
                "items": [
                    { "id": "gb1", "name": "Apple Strudel", "price": 280, "isVeg": true, "bestSeller": true },
                    { "id": "gb2", "name": "Kheema Pav", "price": 350, "isVeg": false }
                ]
            }
        ],
        "rating": 3.6,
        "contact": { "phone": "+91 20 2613 6564", "address": "North Main Road, Koregaon Park, Pune" }
    },
    "21609022": {
        "resId": 21609022,
        "name": "Nanna's Negroni",
        "tagline": "Craft Beer & Wood-fired Pizzas.",
        "description": "A powerhouse of craft brewing. Toit offers a spacious, industrial-chic environment perfect for large groups and beer enthusiasts.",
        "gallery": [
            "https://images.unsplash.com/photo-1584225064785-c62a8b43d148",
            "https://images.unsplash.com/photo-1513104890138-7c749659a591"
        ],
        "amenities": ["Microbrewery", "Wood-fired Pizza", "Nightlife", "Smoking Area"],
        "menu": [
            {
                "category": "Pizzas",
                "items": [
                    { "id": "tt1", "name": "Toit Steak Pizza", "price": 695, "isVeg": false, "bestSeller": true },
                    { "id": "tt2", "name": "Classic Margherita", "price": 450, "isVeg": true }
                ]
            }
        ],
        "rating": 4.5,
        "contact": { "phone": "+91 20 6714 3500", "address": "Metro Compound, Kalyani Nagar, Pune" }
    },
    "21474688": {
        "resId": 21474688,
        "name": "Dario's",
        "tagline": "Collaborative Workspace & Pub.",
        "description": "A path-breaking urban hangout that’s a cafe by day and a high-energy bar by night. Famous for its quirky plating and DIY cocktails.",
        "gallery": [
            "https://b.zmtcdn.com/data/pictures/8/21474688/fa2d07996a5f446c0e85d022e0aff352_o2_featured_v2.jpg",
            "https://images.unsplash.com/photo-1560624052-449f5ddf0c31"
        ],
        "amenities": ["Work-from-cafe", "Full Bar", "DJ", "Unique Plating"],
        "menu": [
            {
                "category": "Munchies",
                "items": [
                    { "id": "so1", "name": "Death Wings", "price": 425, "isVeg": false, "bestSeller": true },
                    { "id": "so2", "name": "China Box", "price": 380, "isVeg": true }
                ]
            }
        ],
        "rating": 3.5,
        "contact": { "phone": "+91 75063 94240", "address": "Unit 118, Phoenix Marketcity, Viman Nagar, Pune" }
    },
    "20928176": {
        "resId": 20928176,
        "name": "Neighbourhud | All Day Bistro",
        "tagline": "Legendary Craft Beers.",
        "description": "Effingut is known for its legendary hefeweizens and ciders. The vibe is classic English pub with a modern Indian culinary twist.",
        "gallery": [
            "https://b.zmtcdn.com/data/pictures/6/20928176/1673d2e9c1e18f5e0e12f371b1821bff_featured_v2.jpg",
            "https://images.unsplash.com/photo-1532634896-26909d0f4b8c"
        ],
        "amenities": ["Craft Brewery", "Sunday Brunch", "Live Sports Screening"],
        "menu": [
            {
                "category": "Appetizers",
                "items": [
                    { "id": "ef1", "name": "Gunpowder Onion Rings", "price": 325, "isVeg": true, "bestSeller": true },
                    { "id": "ef2", "name": "Bacon Wrapped Prawns", "price": 750, "isVeg": false }
                ]
            }
        ],
        "rating": 4.4,
        "contact": { "phone": "+91 20 7196 7434", "address": "Deron Heights, Baner, Pune" }
    },
    "21260661": {
        "resId": 21260661,
        "name": "Aloraa Garden Kitchen & Bar",
        "tagline": "Your Favorite Neighborhood Bar.",
        "description": "A cozy, dog-friendly gastropub that feels like home. Known for its curated cocktails and comfort food.",
        "gallery": [
            "https://b.zmtcdn.com/data/pictures/1/21260661/ea1bd1f00cdc3868c98e388a7bdb1b8b_featured_v2.jpg",
            "https://images.unsplash.com/photo-1551632432-c735e8306967"
        ],
        "amenities": ["Pet Friendly", "Craft Cocktails", "Outdoor Seating"],
        "menu": [
            {
                "category": "Small Plates",
                "items": [
                    { "id": "ec1", "name": "Truffle Fries", "price": 350, "isVeg": true, "bestSeller": true },
                    { "id": "ec2", "name": "Goan Chorizo Pav", "price": 495, "isVeg": false }
                ]
            }
        ],
        "rating": 4.5,
        "contact": { "phone": "+91 97669 11333", "address": "Goodwill Enclave, Kalyani Nagar, Pune" }
    },
    "21430289": {
        "resId": 21430289,
        "name": "Sasson Global Kitchen & Bar",
        "tagline": "Fine European Patisserie & Bistro.",
        "description": "A bustling bistro where French technique meets local passion. Often cited as the best place for cheesecake and pasta in Pune.",
        "gallery": [
            "https://b.zmtcdn.com/data/pictures/9/21430289/9b07e3e2ebd8b21327c3a037f9aa22bd_o2_featured_v2.jpg",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8"
        ],
        "amenities": ["Great Desserts", "European Style", "Casual Dining"],
        "menu": [
            {
                "category": "Signature Pastas",
                "items": [
                    { "id": "lp1", "name": "Smoked Chicken Carbonara", "price": 580, "isVeg": false, "bestSeller": true },
                    { "id": "lp2", "name": "Blueberry Cheesecake", "price": 320, "isVeg": true, "bestSeller": true }
                ]
            }
        ],
        "rating": 4.2,
        "contact": { "phone": "+91 20 2567 2222", "address": "Prabhat Road, Erandwane, Pune" }
    },
    "6505933": {
        "resId": 6505933,
        "name": "Incognito - Restaurant Bar & Cafe",
        "tagline": "The Taste of Tradition.",
        "description": "No visit to Pune is complete without South Indian breakfast at Vaishali. A heritage spot on FC Road that has been serving generations.",
        "gallery": [
            "https://b.zmtcdn.com/data/pictures/3/6505933/87ec1a6ec5005b765d157b6d95ffb2a8_featured_v2.jpg",
            "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4"
        ],
        "amenities": ["Vegetarian", "Heritage Spot", "Outdoor Garden Seating"],
        "menu": [
            {
                "category": "South Indian Classics",
                "items": [
                    { "id": "va1", "name": "Special Masala Dosa", "price": 180, "isVeg": true, "bestSeller": true },
                    { "id": "va2", "name": "Filter Coffee", "price": 60, "isVeg": true }
                ]
            }
        ],
        "rating": 4.4,
        "contact": { "phone": "+91 20 2553 1244", "address": "Fergusson College Road, Shivajinagar, Pune" }
    }
};

export default DetailsData;