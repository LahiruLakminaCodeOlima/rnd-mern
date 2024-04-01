import React, { Component } from 'react'
import ChildUpdating from '../custom_component/ChildUpdating'
import ChildUpdatingTwo from '../custom_component/ChildUpdatingTwo'
import ChildUnmount from '../custom_component/ChildUnmount';

export class UpdatingScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      childName:"",
      passChild:'',
      products:[],
      unMount: false,
    }
    console.log("Parent constructor");
  }
  render() {
    return (
      <>
        <div style={{margin:"50px",}}>
          <div>MountingScreen</div>
            <input 
              type="text" 
              placeholder="Enter your Child Name"
              onChange={(e)=>this.setState({childName: e.target.value})}
            />
            <button onClick={(e)=>{this.setState({passChild: this.state.childName})}}>Add</button>
          <ChildUpdating valueP={this.state.passChild}/>
          <button onClick={()=>{this.setState({unMount: !this.state.unMount})}}>{this.state.unMount ? "Hide Products": "Show Products"}</button>
        </div>
        {this.state.unMount ? <ChildUnmount/> : ''}
        <ChildUpdatingTwo/>
      </>
    )
  }
}

export default UpdatingScreen