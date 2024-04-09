import React, { Component } from 'react'
import { MyThemeContext} from '../Context/ThemeContext'
import RndClaCom from './RndClaCom'

export default class Scenery extends Component {
    constructor(props) {
      super(props)
      this.state={
        
      }
    }
  
  render() {
    let theme = this.context
    return (
      <div style={{ color: theme.foreground}}>
        <RndClaCom/>
      </div>
    )
  }

}
Scenery.contextType = MyThemeContext