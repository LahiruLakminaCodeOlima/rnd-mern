import React, { useContext, useEffect} from 'react'
import { MyThemeContext } from '../Context/ThemeContext'
import { Link } from 'react-router-dom';

function Dashboard(props) {
  useEffect(()=>{
    //console.log(show)
  })
 
  const theme = useContext(MyThemeContext)
  
  return (
    <>
      <div className="dashboardContainer" style={{backgroundColor:theme.background,color:theme.foreground}}>
        <input type="text" placeholder="search" className="filter-search" style={{backgroundColor:theme.btnBackground,color:theme.background}}/>
        <Link
          to ="/"
          className="filter-btn"
          style={{backgroundColor:theme.btnBackground,color:theme.background,textDecoration:"none",textAlign:"center",}}
        >
          Show All Products 
        </Link>
        <Link
          to ="/products"
          className="filter-btn"
          style={{backgroundColor:theme.btnBackground,color:theme.background,textDecoration:"none",textAlign:"center",}}
        >
          Show Products Page Wise 
        </Link>
        <Link 
          to="/products/add" 
          className="filter-btn"
          style={{backgroundColor:theme.btnBackground,color:theme.background,textDecoration:"none",textAlign:"center",}}
        >
          Add New Product
        </Link>
      </div>
    </>
  )
}

export default Dashboard
