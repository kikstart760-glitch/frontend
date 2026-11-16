
import React from "react";
import {
  FaCalendarAlt,
  FaChevronRight
} from "react-icons/fa";

import '../UpcomingBookingComponent/UpcomingBookings.css';

const bookings = [
  {
    id: 1,
    destination: "Santorini, Greece",
    date: "May 20 - May 27, 2025",
    status: "Confirmed",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=300"
  },
  {
    id: 2,
    destination: "Bali, Indonesia",
    date: "Jun 10 - Jun 18, 2025",
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300"
  },
  {
    id: 3,
    destination: "Bangkok, Thailand",
    date: "Jul 05 - Jul 12, 2025",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=300"
  },
  {
    id: 4,
    destination: "Swiss Alps, Switzerland",
    date: "Aug 15 - Aug 22, 2025",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=300"
  }
];

const UpcomingBookings = () => {

  const handleViewAll = () => {
    console.log("Navigate to all bookings");
  };

  const handleBookingClick = (booking) => {
    console.log("Selected booking:", booking);
  };

  return (
    <div className="upcoming-bookings-card">

      {/* HEADER */}
      <div className="bookings-header">

        <h3>Upcoming Bookings</h3>

        <button
          className="view-all-btn"
          onClick={handleViewAll}
        >
          View All
          <FaChevronRight />
        </button>

      </div>

      {/* BOOKING LIST */}
      <div className="bookings-list">

        {bookings.map((booking) => (

          <div
            className="booking-items"
            key={booking.id}
            onClick={() => handleBookingClick(booking)}
          >

            {/* DESTINATION IMAGE */}
            <img
              src={booking.image}
              alt={booking.destination}
              className="booking-image"
            />

            {/* DESTINATION DETAILS */}
            <div className="booking-info">

              <h4>{booking.destination}</h4>

              <div className="booking-date">
                <FaCalendarAlt />
                <span>{booking.date}</span>
              </div>

            </div>

            {/* STATUS */}
            <span
              className={`booking-status ${booking.status.toLowerCase()}`}
            >
              {booking.status}
            </span>

            {/* ARROW */}
            <FaChevronRight className="booking-arrow" />

          </div>

        ))}

      </div>

    </div>
  );
};

export default UpcomingBookings;
