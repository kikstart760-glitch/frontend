
import React, { useState, useEffect } from "react";
import '../DashboardOverviewComponent/DashboardOverview.css';
import {
  BriefcaseBusiness,
  Heart,
  Globe2,
  Award,
  ArrowUpRight,
  TrendingUp
} from "lucide-react";

import {
  Sun,
  Sunrise,
  Sunset,
  Moon
} from "lucide-react";

const stats = [
  {
    title: "Total Bookings",
    value: "6",
    growth: "20%",
    icon: <BriefcaseBusiness />,
    color: "blue",
  },
  {
    title: "Wishlist Items",
    value: "12",
    growth: "33%",
    icon: <Heart />,
    color: "pink",
  },
  {
    title: "Countries Visited",
    value: "4",
    growth: "25%",
    icon: <Globe2 />,
    color: "purple",
  },
  {
    title: "Loyalty Points",
    value: "480",
    growth: "15%",
    icon: <Award />,
    color: "orange",
  },
];

const DashboardOverview = () => {
    
    
    const [userName, setUserName] = useState("User");

    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 12) {
            return { text: "Good Morning", icon: Sunrise };
        }
        else if (hour >= 12 && hour < 17) {
            return { text: "Good Afternoon", icon: Sun };
        }
        else if (hour >= 17 && hour < 21) {
            return { text: "Good Evening", icon: Sunset };
        }
        else {
            return { text: "Good Night", icon: Moon };
        }
    };

    const [greeting, setGreeting] = useState(getGreeting);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user?.name) {
            setUserName(user.name);
        }
    }, []);

    const GreetingIcon = greeting.icon;


    
  return (
    <div className="dashboard-overview">

      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="welcome-content">
            <p className="welcome-greeting">
                {greeting.text}, {userName}!
                <GreetingIcon
                    size={18}
                    strokeWidth={2}
                    className="greeting-icon"
                />
            </p>

          <h1>Your Next Adventure Awaits</h1>

          <p className="welcome-description">
            Explore new places, manage your bookings and make
            <br className="desktop-break" />
            the most of your travel experience.
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="dashboard-stats">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>

            <div className={`stat-icon ${item.color}`}>
              {item.icon}
            </div>

            <div className="stat-content">
              <p className="stat-title">{item.title}</p>

              <h2>{item.value}</h2>

              <p className="stat-growth">
                <span>↑ {item.growth}</span>
                <small>vs. last month</small>
              </p>
            </div>

            <div className="stat-arrow">›</div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default DashboardOverview;
