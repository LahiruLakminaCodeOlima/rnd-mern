import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Section from './custom_screen/Section'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Section/>}/>
    </Routes>
  )
}

export default App
