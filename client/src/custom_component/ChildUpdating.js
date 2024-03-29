import React, { Component } from 'react'

export class ChildUpdating extends Component {
  constructor(props) {
    super(props);
    this.state={
        child: "Lakmina",
        warring: "Add New Child",
    };
  }
    componentDidUpdate(props, state, snapshot) {
      if(snapshot) 
      { 
        console.log("This child all ready there add new one")
      }
      else
      { 
        console.log("You add new one successfully")
      }
    }
    shouldComponentUpdate(nextProps, prevState){
      if(nextProps.valueP === this.props.valueP)
      {
        return false;
      }
      else
      {
        console.log("Run")
        if(nextProps.valueP==='')
        {
          prevState.child = this.state.child
          prevState.warring = "Your child name is empty please add new one";
          return true;
        }
        prevState.child = nextProps.valueP
        prevState.warring = "You add new one successfully";
        return true;
      }
    }
    getSnapshotBeforeUpdate(prevProps, newState){
      if(newState.child === prevProps.valueP)
      {
        return true;
      }
      else
      {
        return false;
      }
    }

    
    render() {
      console.log("Child render", this.state.warring)
    return (
      <>
        <div>Child {this.state.child}</div>
        <p style={{color:"green",}}>{this.state.warring}</p>
      </>
    )
  }
}

export default ChildUpdating