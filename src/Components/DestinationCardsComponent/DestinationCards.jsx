
import React, { useState } from "react";
import {
  Heart,
  MapPin,
  CalendarDays,
  Clock,
  ChevronRight,
  MoreVertical,
} from "lucide-react";

import "../DestinationCardsComponent/DestinationCards.css";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800",
    startDate: "May 20",
    endDate: "May 27, 2025",
    days: 7,
    adults: 2,
    price: 84686,
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    startDate: "Jun 10",
    endDate: "Jun 18, 2025",
    days: 8,
    adults: 2,
    price: 70556,
  },
  {
    id: 3,
    name: "Bangkok, Thailand",
    country: "Thailand",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
    startDate: "Jun 05",
    endDate: "Jun 12, 2025",
    days: 7,
    adults: 2,
    price: 64998,
  },
  {
    id: 4,
    name: "Swiss Alps, Switzerland",
    country: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
    startDate: "Aug 15",
    endDate: "Aug 22, 2025",
    days: 7,
    adults: 2,
    price: 122365,
  },
  {
    id: 5,
    name: "Tokyo, Japan",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    startDate: "Sep 12",
    endDate: "Sep 20, 2025",
    days: 8,
    adults: 2,
    price: 108330,
  },
  {
    id: 6,
    name: "Amalfi Coast, Italy",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800",
    startDate: "Oct 08",
    endDate: "Oct 15, 2025",
    days: 7,
    adults: 2,
    price: 98910,
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

const DestinationCards = () => {
  const [wishlist, setWishlist] = useState(
    destinations.map((item) => item.id)
  );

  const [activeMenu, setActiveMenu] = useState(null);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleViewDetails = (destination) => {
    console.log("Destination Details:", destination);

    // Add your navigation logic here.
    // Example:
    // navigate(`/destination/${destination.id}`);
  };

  const handleMenuAction = (action, destination) => {
    console.log(action, destination);

    setActiveMenu(null);
  };

  return (
    <section className="destination-section">

      <div className="destination-grid">

        {destinations.map((destination) => (
          <div className="destination-card" key={destination.id}>

            {/* Image Section */}
            <div className="destination-image-wrapper">

              <img
                src={destination.image}
                alt={destination.name}
                className="destination-image"
              />

              {/* Wishlist Button */}
              <button
                className={`wishlist-button ${
                  wishlist.includes(destination.id)
                    ? "wishlisted"
                    : ""
                }`}
                onClick={() => toggleWishlist(destination.id)}
                aria-label="Toggle wishlist"
              >
                <Heart
                  size={18}
                  fill={
                    wishlist.includes(destination.id)
                      ? "#ff4b55"
                      : "none"
                  }
                />
              </button>

            </div>

            {/* Destination Information */}
            <div className="destination-content">

              <h3>{destination.name}</h3>

              <div className="destination-info">

                <div className="info-row">
                  <MapPin size={15} />
                  <span>{destination.country}</span>
                </div>

                <div className="info-row">
                  <CalendarDays size={15} />
                  <span>
                    {destination.startDate} – {destination.endDate}
                  </span>
                </div>

                <div className="info-row">
                  <Clock size={15} />
                  <span>{destination.days} Days</span>
                  <span className="info-dot">•</span>
                  <span>{destination.adults} Adults</span>
                </div>

              </div>

              {/* Price and Actions */}
              <div className="destination-footer">

                <div className="destination-price">
                  <strong>
                    {formatPrice(destination.price)}
                  </strong>

                  <span>/ person</span>
                </div>

                <div className="destination-actions">

                  <button
                    className="destination-details-btn"
                    onClick={() => handleViewDetails(destination)}
                  >
                    View Details
                    <ChevronRight size={16} />
                  </button>

                  {/* More Options */}
                  <div className="destination-menu-wrapper">

                    <button
                      className="destination-menu-btn"
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === destination.id
                            ? null
                            : destination.id
                        )
                      }
                      aria-label="More options"
                    >
                      <MoreVertical size={19} />
                    </button>

                    {activeMenu === destination.id && (
                      <div className="destination-dropdown">

                        <button
                          onClick={() =>
                            handleMenuAction(
                              "Share",
                              destination
                            )
                          }
                        >
                          Share Destination
                        </button>

                        <button
                          onClick={() =>
                            handleMenuAction(
                              "Remove",
                              destination
                            )
                          }
                        >
                          Remove from List
                        </button>

                      </div>
                    )}

                  </div>

                </div>

              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default DestinationCards;
