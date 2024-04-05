import React, { Component } from 'react'
import { postProducts } from '../Services/ApiService'

export class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: '',
            description: '',
            price: 0,
            date: ''
        }
    }
    handleSubmit = ()=>{
        postProducts (this.state.name, this.state.description, this.state.price, this.state.date)
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
                    />
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
                    />
                </div>
                <div className="form-item-box">
                    <label className='form-item-label'>Date</label>
                    <input 
                        type="date"
                        onChange={(e)=>{this.setState({date: e.target.value})}}
                        className='form--input-item'
                    />
                </div>
                <input type="submit" value="ADD PRODUCT" className="btn"/>
            </form>
        </div>
    )
  }
}

export default AddForm