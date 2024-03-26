import React, { useContext } from 'react'
import { MyThemeContext } from '../Context/ThemeContext'

function Dashboard() {
  const theme = useContext(MyThemeContext)
  console.log()
  return (
    <div>
      <div className="dashboardContainer" style={{backgroundColor:theme.background,color:theme.foreground}}>
        <input type="text" placeholder="search" className="filter-search" style={{backgroundColor:theme.btnBackground,color:theme.background}}/>
        <button className="filter-btn"style={{backgroundColor:theme.btnBackground,color:theme.background}}>Show All</button>
        <button className="filter-btn"style={{backgroundColor:theme.btnBackground,color:theme.background}}>Show User Name</button>
        <button className="filter-btn"style={{backgroundColor:theme.btnBackground,color:theme.background}}>Show User Description</button>
      </div>
    </div>
  )
}

export default Dashboard