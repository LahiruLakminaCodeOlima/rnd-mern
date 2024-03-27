/* eslint-disable default-case */
/* eslint-disable no-useless-constructor */
import React, { Component,  } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
          inputTheme:"",
        };
    }
  render() {
    return (
      <div style={{backgroundColor: this.state.inputTheme,height:"20vh"}}>
        <h1>{this.props.headerName}</h1>
        <button value="rgb(41, 41, 41)" onClick={(e)=>this.setState({inputTheme: e.target.value})}>DARK</button>
        <button value="rgb(255, 255, 255)" onClick={(e)=>this.setState({inputTheme: e.target.value})}>LIGHT</button>
        <button value="rgb(0, 255, 0)" onClick={(e)=>this.setState({inputTheme: e.target.value})}>GREEN</button>
      </div>
    )
  }
}
