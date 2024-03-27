/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import React, { useState } from 'react'
import Header from '../custom_component/Header'
import Footer from '../custom_component/Footer'
export default function Section() {
  const [theme, setTheme] = useState('')
  const [pageName, setPageName] = useState('First Project')
  const version = "1.0.0";


  return (
    <div style={{backgroundColor:theme,height:"70vh",display: "flex",flexDirection: "column", alignItems: "center", width:"100%"}}>
      <div style={{display: 'flex', flexDirection: 'column',width:"400px", margin:"40px"}}>
        <button style={{margin:"10px"}} value="rgb(41, 41, 41)" onClick={(e)=>setTheme(e.target.value)}>DARK</button>
        <button style={{margin:"10px"}} value="rgb(255, 0, 255)" onClick={(e)=>setTheme(e.target.value)}>LIGHT</button>
        <button style={{margin:"10px"}} value="rgb(0, 255, 0)" onClick={(e)=>setTheme(e.target.value)}>GREEN</button>
        <input style={{margin:"10px"}} type="text" onChange={(e)=>setPageName(e.target.value)}/>
      </div>
      
      <Header headerName={pageName} style={{width:"100%"}}/>
      <Footer version={version}/>
    </div>
  )
}