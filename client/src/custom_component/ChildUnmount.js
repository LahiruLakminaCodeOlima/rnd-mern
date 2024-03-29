import React, { Component } from 'react'
import axios from 'axios';

export class ChildUnmount extends Component {
    constructor(props) {
        super(props)
        this.state={
            productData: [],
        }
    }
    componentWillMount() {
        axios.get("http://localhost:5000/api/v1/products")
        .then((res) => {
            console.log(res)
            this.setState({productData: res.data})
        })
        .catch((err) =>{console.log(err)})
    }
    componentWillUnmount(){
        console.log("unmount");
        this.setState({productData:null})
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
          }
    }
  render() {
    return (
            <div style={{display: 'flex', justifyContent: 'center',}}>
                <div style={{display: 'flex', flexWrap:"wrap"}}>
                    {this.state.productData.map((data,index) => (
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
            </div>
        )
    }
}

export default ChildUnmount