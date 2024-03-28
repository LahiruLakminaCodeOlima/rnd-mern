/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import ChildMounting01 from '../custom_component/ChildMounting01'
import axios from 'axios'

export class MountingScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      childName:"",
      passChild:'',
      products:[],
    }
    console.log("Parent constructor");
  }
  static getDerivedStateFromProps() {
    console.log("Parent getDerivedStateFromProps");
    return null
  }
  componentDidMount(){
    console.log("Parent componentDidMount");
    axios.get('http://localhost:5000/api/v1/products')
    .then(res=>{
      this.setState({products: res.data})
    }).catch(err=>{
      console.log(err)
    })
  }
  render() {
    console.log("Parent render");
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
          <ChildMounting01 valueP={this.state.passChild}/>
        </div>
        <div style={{display:"flex", flexDeration:"column",alignItems: "center",justifyContent:"center", width:"100%"}}>

          {this.state.products.map((data,index) => (
            <div style={{display:"flex", flexDirection:"column", width:"300px",padding:"10px",}} key={index}>
              <div style={{margin:"10px"}}>
                <h1 style={{margin:"0"}}>Name:</h1>
                <h2 style={{margin:"0"}}>{data.name}</h2>
              </div>
              <div style={{margin:"10px"}}>
                <h4 style={{margin:"0"}}>description</h4>
                <h5 style={{margin:"0"}}>{data.description}</h5>
              </div>
              <div style={{margin:"10px"}}>
                <h3 style={{margin:"0"}}>Price</h3>
                <h4 style={{margin:"0"}}>{data.price}</h4>
              </div>
              <div style={{margin:"10px"}}>
                <h3 style={{margin:"0"}}>timestamp</h3>
                <h4 style={{margin:"0"}}>{data.timestamp}</h4>
              </div>
          </div>
          ))}
        </div>
      </>
    )
  }
}

export default MountingScreen