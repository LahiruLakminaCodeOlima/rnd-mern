import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Section from './custom_screen/Section'
import UpdatingScreen from './custom_screen/UpdatingScreen'

function App() {
  return (
    <Routes>
      <Route path="/" element={<UpdatingScreen/>}/>
      <Route path="/section" element={<Section/>}/>
    </Routes>
  )
}

export default App
