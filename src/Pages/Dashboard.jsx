import React from 'react'
import DashboardOverview from '../Components/DashboardOverviewComponent/DashboardOverview'
import DashboardInfo from '../Components/DashboardInfoComponent/DashboardInfo'

function Dashboard() {
  return (
    <div>
        <DashboardOverview />
        <DashboardInfo />
    </div>
  )
}

export default Dashboard