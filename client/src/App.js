import React, { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Section from './custom_screen/Section'
import AddForm from './custom_component/AddForm'
import RndClaCom from './custom_component/RndClaCom'
import { MyThemeContext, themes } from './Context/ThemeContext';
import PaginationPage from './custom_component/PaginationPage'

function App() {
  
  const [theme, setTheme] = useState(themes.dark)
  const handleTheme = ()=>{
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }
  return (
    <MyThemeContext.Provider value={theme}>
      <button onClick={handleTheme} className='btn-theme'style={{backgroundColor:theme.background,color:theme.foreground}}>{theme.type}</button>
      <Routes>
        <Route path="/" element={<Section/>}/>
        {/* <Route path="/products" element={<RndClaCom/>}/> */}
        <Route path="/products" element={<PaginationPage/>}/>
        <Route path="/products/add" element={<AddForm/>}/>
      </Routes>
    </MyThemeContext.Provider>
  )
}

export default App
