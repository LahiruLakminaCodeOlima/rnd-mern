import React, { Component } from 'react'
import { MyThemeContext} from '../Context/ThemeContext'

export default class Scenery extends Component {
    
  
  render() {
    let theme = this.context
    return (
      <div style={{backgroundColor: theme.background, color: theme.foreground}}>
        <h1>Name</h1>
        <h3>ID</h3>
        <p>Address</p>
        <p>Description</p>
      </div>
    )
  }

}
Scenery.contextType = MyThemeContext