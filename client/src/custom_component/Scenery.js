import React, { Component } from 'react'
import { MyThemeContext} from '../Context/ThemeContext'
import RndClaCom from './RndClaCom'
import AddForm from './AddForm'

export default class Scenery extends Component {
    constructor(props) {
      super(props)
      this.state={
        
      }
    }
  
  render() {
    let theme = this.context
    return (
      <div style={{backgroundColor: theme.background, color: theme.foreground}}>{this.props.action ? <RndClaCom/> : ''}
        {this.props.addFrom ? <AddForm/> : ''}
      </div>
    )
  }

}
Scenery.contextType = MyThemeContext