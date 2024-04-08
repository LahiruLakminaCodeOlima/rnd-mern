import React, { useContext, useEffect, useState } from 'react'
import { MyThemeContext } from '../Context/ThemeContext'

function Dashboard(props) {
  useEffect(()=>{
    //console.log(show)
  })
  const [show, setShow] = useState(true);
  const [addData, setAddData] = useState(true);
  const theme = useContext(MyThemeContext)
  function showAllHandler(){
    
    setShow(!show)
    props.action(show);
  }
  function addDataHandler(){
    setAddData(!addData)
    props.addFrom(addData);
  }
  return (
    <div>
      <div className="dashboardContainer" style={{backgroundColor:theme.background,color:theme.foreground}}>
        <input type="text" placeholder="search" className="filter-search" style={{backgroundColor:theme.btnBackground,color:theme.background}}/>
        <button
          className="filter-btn"
          style={{backgroundColor:theme.btnBackground,color:theme.background}} 
          onClick={()=>showAllHandler()}
        >
          {show ? "Show All" : "Hide All"}
        </button>
        <button 
          className="filter-btn"
          style={{backgroundColor:theme.btnBackground,color:theme.background}}
          onClick={()=>addDataHandler()}
        >
          {addData ? "Add Dada" : "Close Forme"}
        </button>
      </div>
    </div>
  )
}

export default Dashboard
