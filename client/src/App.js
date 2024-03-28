import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Section from './custom_screen/Section'
import MountingScreen from './custom_screen/MountingScreen'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MountingScreen/>}/>
      <Route path="/section" element={<Section/>}/>
    </Routes>
  )
}

export default App
