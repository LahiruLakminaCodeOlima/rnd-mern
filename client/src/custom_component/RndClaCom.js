import React, { Component } from 'react';
import {fetchProducts} from '../Services/ApiService';
export class RndClaCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            isLoading: true,
        }
    }
    componentDidMount(){
        fetchProducts()
        .then((res) =>{
            this.setState({
                products: res.data,
                isLoading: false,
            })
            
        })
        .catch((err) =>{
            console.log(err);
            this.setState({
                isLoading: false 
            })
            console.log(this.state.products)
        })
        .finally(() =>{

        })
    }
  render() {
    return (
      <>
        <div style={{margin:"10px",display: "flex",flexWrap: "wrap",justifyContent:"center"}}>
            {this.state.isLoading ? <h1>Loading...</h1>: this.state.products.map((data, index) => 
                <div key={index} style={{width:"400px",margin: "10px",border: "1px solid white", padding: "10px", borderRadius: "10px"}}>
                    <h1>{data.name}</h1>
                    <h3>{data.price}</h3>
                    <p>{data.timestamp}</p>
                    <p>{data.description}</p>
                </div>
            )}
        </div>
        
      </>
    )
  }
}

export default RndClaCom