/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div>
        <h1>{this.props.headerName}</h1>
      </div>
    )
  }
}
