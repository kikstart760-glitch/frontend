
import React from "react";
import {
  BriefcaseBusiness,
  PlaneTakeoff,
  CalendarX,
  CheckCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import "../MyBookingComponents/MyBooking.css";

const bookingStats = [
  {
    title: "Total Bookings",
    value: "24",
    growth: "20%",
    icon: BriefcaseBusiness,
    color: "blue",
  },
  {
    title: "Completed Trips",
    value: "12",
    growth: "25%",
    icon: CheckCircle,
    color: "orange",
  },
  {
    title: "Upcoming Trips",
    value: "08",
    growth: "15%",
    icon: PlaneTakeoff,
    color: "purple",
  },
  {
    title: "Cancelled Trips",
    value: "04",
    growth: "5%",
    icon: CalendarX,
    color: "pink",
  },
];

const MyBooking = () => {
  return (
    <div className="my-booking">

      {/* Welcome Banner */}
      <div className="booking-banner">
        <div className="booking-banner-content">

          <p className="booking-banner-label">
            MY BOOKINGS
          </p>

          <h1>Manage Your Adventures</h1>

          <p className="booking-banner-description">
            Track your bookings, explore upcoming trips and
            <br className="booking-desktop-break" />
            manage your complete travel history.
          </p>

        </div>
      </div>

      {/* Booking Statistics */}
      <div className="booking-stats">

        {bookingStats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="booking-card" key={index}>

              <div className={`booking-icon ${item.color}`}>
                <Icon size={24} />
              </div>

              <div className="booking-content">

                <p className="booking-title">
                  {item.title}
                </p>

                <h2>{item.value}</h2>

                <p className="booking-growth">
                  <span>
                    <TrendingUp size={13} />
                    {item.growth}
                  </span>
                  <small>vs. last month</small>
                </p>

              </div>

              <div className="booking-arrow">
                <ArrowRight size={21} />
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default MyBooking;
