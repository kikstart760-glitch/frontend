import React from 'react'
import '../DashboardInfoComponent/DashboardInfo.css'
import UpcomingBookings from '../UpcomingBookingComponent/UpcomingBookings'
import TravelSpending from '../TravelSpendingComponent/TravelSpending'

function DashboardInfo() {
  return (
      <div className="dashboard-bottom-section">

          <div className="dashboard-bookings">
              <UpcomingBookings />
          </div>

          <div className="dashboard-spending">
              <TravelSpending />
          </div>

      </div>
  )
}

export default DashboardInfo
