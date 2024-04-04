import React, { Component } from 'react'
import { MyThemeContext} from '../Context/ThemeContext'
import RndClaCom from './RndClaCom'

export default class Scenery extends Component {
    
  
  render() {
    let theme = this.context
    return (
      <div style={{backgroundColor: theme.background, color: theme.foreground}}>
        <RndClaCom/>
      </div>
    )
  }

}
Scenery.contextType = MyThemeContext