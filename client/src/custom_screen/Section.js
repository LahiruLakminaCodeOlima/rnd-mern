import React, { useEffect, useState } from 'react'
import Dashboard from '../custom_component/Dashboard';
import Scenery from '../custom_component/Scenery';
import { MyThemeContext, themes } from '../Context/ThemeContext';
export default function Section() {
  const [theme, setTheme] = useState(themes.dark)
  const [action, setAction] = useState()
  const [addAction, setAddAction] = useState()
  useEffect(()=>{
    //console.log(action)
  })
  const handleTheme = ()=>{
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }
  return (
    <MyThemeContext.Provider value={theme}>
      <div className="sectionContainer">
        <button onClick={handleTheme} className='btn-theme'style={{backgroundColor:theme.background,color:theme.foreground}}>{theme.type}</button>
        {/* <div className="dashboard-box">
          <Dashboard controlTheme={setTheme} action={setAction} addFrom={setAddAction}/>  
        </div> */}
        <div className="scenery-box">
          <Scenery action={action} addFrom={addAction} />
        </div>
      </div>
    </MyThemeContext.Provider>
  )
}