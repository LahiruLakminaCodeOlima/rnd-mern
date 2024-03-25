import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default function Section() {
  const title = "First Project";
  const version = "1.0.0";
  return (
    <div>
      <Header headerName={title}/>
      Section
      <Footer version={version}/>
    </div>
  )
}