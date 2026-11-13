
import React, { useState } from "react";
import {
  Plane,
  CalendarDays,
  UserRound,
  Eye,
  ChevronRight,
} from "lucide-react";

import "../MyBookingsComponent/MyBookings.css";

const bookings = [
  {
    id: "TRV123456",
    destination: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500",
    price: 84661,
    startDate: "May 20",
    endDate: "May 27, 2025",
    days: 7,
    adults: 2,
    rooms: 1,
    status: "Upcoming",
  },
  {
    id: "TRV123457",
    destination: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500",
    price: 70556,
    startDate: "Jun 10",
    endDate: "Jun 18, 2025",
    days: 8,
    adults: 2,
    rooms: 1,
    status: "Upcoming",
  },
  {
    id: "TRV123458",
    destination: "Bangkok, Thailand",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=500",
    price: 65000,
    startDate: "Jun 05",
    endDate: "Jun 12, 2025",
    days: 7,
    adults: 2,
    rooms: 1,
    status: "Completed",
  },
  {
    id: "TRV123459",
    destination: "Swiss Alps, Switzerland",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500",
    price: 122366,
    startDate: "Aug 15",
    endDate: "Aug 22, 2025",
    days: 7,
    adults: 2,
    rooms: 1,
    status: "Completed",
  },
  {
    id: "TRV123460",
    destination: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500",
    price: 108330,
    startDate: "Sep 12",
    endDate: "Sep 20, 2025",
    days: 8,
    adults: 2,
    rooms: 1,
    status: "Completed",
  },
  {
    id: "TRV123461",
    destination: "Amalfi Coast, Italy",
    image:
      "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=500",
    price: 98910,
    startDate: "Oct 08",
    endDate: "Oct 15, 2025",
    days: 7,
    adults: 2,
    rooms: 1,
    status: "Cancelled",
  },
];

const tabs = [
  "All Bookings",
  "Upcoming",
  "Completed",
  "Cancelled",
];

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("All Bookings");

  const filteredBookings =
    activeTab === "All Bookings"
      ? bookings
      : bookings.filter(
          (booking) => booking.status === activeTab
        );

  const getCount = (tab) => {
    if (tab === "All Bookings") {
      return bookings.length;
    }

    return bookings.filter(
      (booking) => booking.status === tab
    ).length;
  };

  const handleViewDetails = (booking) => {
    console.log("Booking Details:", booking);

    // Navigate to booking details page here.
    // Example:
    // navigate(`/booking/${booking.id}`);
  };

  return (
    <div className="my-bookings-container">

      {/* Booking Tabs */}
      <div className="booking-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`booking-tab ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} ({getCount(tab)})
          </button>
        ))}
      </div>

      {/* Booking List */}
      <div className="booking-list">

        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <div
              className="booking-item"
              key={booking.id}
            >

              {/* Destination Image */}
              <div className="booking-image">
                <img
                  src={booking.image}
                  alt={booking.destination}
                />
              </div>

              {/* Destination Information */}
              <div className="booking-info">

                <div className="destination-heading">
                  <Plane size={18} />

                  <h3>{booking.destination}</h3>
                </div>

                <p className="booking-package">
                  Flight + Hotel Package
                </p>

                <div className="booking-meta">

                  <div>
                    <CalendarDays size={14} />

                    <span>
                      {booking.startDate} – {booking.endDate}
                    </span>

                    <span className="booking-days">
                      ({booking.days} days)
                    </span>
                  </div>

                  <div>
                    <UserRound size={14} />

                    <span>{booking.adults} Adults</span>

                    <span>•</span>

                    <span>{booking.rooms} Room</span>
                  </div>

                </div>
              </div>

              {/* Price in INR */}
              <div className="booking-price">
                <strong>
                  {formatPrice(booking.price)}
                </strong>

                <span>/ person</span>
              </div>

              {/* Booking Status */}
              <div className="booking-status">
                <span
                  className={`status-badge ${booking.status.toLowerCase()}`}
                >
                  {booking.status}
                </span>
              </div>

              {/* View Details */}
              <div className="booking-actions">

                <button
                  className="view-details-btn"
                  onClick={() => handleViewDetails(booking)}
                >
                  <Eye size={17} />

                  <span>View Details</span>

                  <ChevronRight size={17} />
                </button>

                <p>
                  Booking ID: {booking.id}
                </p>

              </div>

            </div>
          ))
        ) : (
          <div className="empty-bookings">
            <Plane size={35} />

            <h3>No bookings found</h3>

            <p>
              Your {activeTab.toLowerCase()} will appear here.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default MyBookings;
