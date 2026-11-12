
import React from "react";
import {
  Globe2,
  House,
  Waves,
  Mountain,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import "../WishlistComponents/Wishlist.css";

const wishlistStats = [
  {
    title: "International",
    value: "05",
    growth: "20%",
    icon: Globe2,
    color: "blue",
  },
  {
    title: "Domestic",
    value: "07",
    growth: "15%",
    icon: House,
    color: "purple",
  },
  {
    title: "Beach",
    value: "03",
    growth: "25%",
    icon: Waves,
    color: "orange",
  },
  {
    title: "Mountain",
    value: "04",
    growth: "18%",
    icon: Mountain,
    color: "green",
  },
];

const Wishlist = () => {
  return (
    <div className="my-wishlist">

      {/* Welcome Banner */}
      <div className="wishlist-banner">
        <div className="wishlist-banner-content">

          <p className="wishlist-banner-label">
            MY WISHLIST
          </p>

          <h1>Your Favourite Destinations</h1>

          <p className="wishlist-banner-description">
            Keep your dream destinations saved and discover
            <br className="wishlist-desktop-break" />
            the places you want to explore next.
          </p>

        </div>
      </div>

      {/* Wishlist Statistics */}
      <div className="wishlist-stats">

        {wishlistStats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="wishlist-card" key={index}>

              <div className={`wishlist-icon ${item.color}`}>
                <Icon size={24} />
              </div>

              <div className="wishlist-content">

                <p className="wishlist-title">
                  {item.title}
                </p>

                <h2>{item.value}</h2>

                <p className="wishlist-growth">
                  <span>
                    <TrendingUp size={13} />
                    {item.growth}
                  </span>
                  <small>vs. last month</small>
                </p>

              </div>

              <div className="wishlist-arrow">
                <ArrowRight size={21} />
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default Wishlist;
