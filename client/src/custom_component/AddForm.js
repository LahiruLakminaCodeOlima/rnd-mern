/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import { postProducts } from '../Services/ApiService'

export class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: '',
            description: '',
            price: 0,
            errors:[{
                name:'',
                price:0,
            }],
        }
    }
    handleSubmit = ()=>{
        if(this.state.name !== '' && this.state.price > 0)
        {
            postProducts (this.state.name, this.state.description, this.state.price)
            .then((res=>{
                console.log(res);
            }))
            .catch((err=>{
                console.log(err);
            }))
        }
        else{
            this.state.errors.name = this.state.name ? '' : "Name field is required.";
            this.state.errors.price = this.state.price > 0 ? '' : "Price must be greater than zero.";
        }
    } 
  render() {
    
    return (
        <div className="form-container">
            <form className="form-box" onSubmit={this.handleSubmit}>
                <div className="form-item-box">
                    <label className='form-item-label'>Name</label>
                    <input 
                        type="text"
                        onChange={(e)=>{this.setState({name: e.target.value})}}
                        className='form--input-item'
                        required
                    />
                    <p style={{color:"red"}}>{this.state.errors.name}</p>
                </div>
                <div className="form-item-box">
                    <label className='form-item-label'>Description</label>
                    <input 
                        type="text"
                        onChange={(e)=>{this.setState({description: e.target.value})}}
                        className='form--input-item'
                    />
                </div>
                <div className="form-item-box">
                    <label className='form-item-label'>Price</label>
                    <input 
                        type="number"
                        onChange={(e)=>{this.setState({price: e.target.value})}}
                        className='form--input-item'
                        required
                    />
                    <p style={{color:"red"}}>{this.state.errors.price}</p>
                </div>
                <input type="submit" value="ADD PRODUCT" className="btn"/>
            </form>
        </div>
    )
  }
}

export default AddForm