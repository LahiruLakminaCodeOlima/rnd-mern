/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import { MyThemeContext} from '../Context/ThemeContext'
import { postProducts } from '../Services/ApiService'
import Dashboard from './Dashboard'

export class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: '',
            description: '',
            price: 0,
            errors:[{
                name:'',
                price:null,
            }],
        }
    }
    handleSubmit = (e)=> {
        e.preventDefault()
        if(this.validateForm())
        {
            console.log("run");
            postProducts (this.state.name, this.state.description, this.state.price)
            .then((res=>{
                console.log(res);
                window.location.reload()
            }))
            .catch((err=>{
                console.log(err);
            }))
        }
    }
    validateForm = () => {

        let tempError = {}
        tempError.name = this.state.name ? '' : 'Name field is required.'
        tempError.price = this.state.price > 0 ? '' : 'Price must be greater than zero.'
        tempError.description = '';

        this.setState({errors: {name: tempError.name, price: tempError.price}})
        console.log(tempError)
        return Object.values(tempError).every((x) => x === '');
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        if(name==="name"){this.setState({name:value})}
        if(name==="description"){this.setState({description:value})}
        if(name==="price"){this.setState({price:value})}
    }
  render() {
    let theme = this.context
    return (
        <div className="from-full-view">
            <div className="dashboard-container">
                <Dashboard/>
            </div>
            <div className="form-container" style={{backgroundColor: theme.background, color: theme.foreground}}>
                <form className="form-box" onSubmit={this.handleSubmit}>
                    <div className="form-item-box">
                        <label className='form-item-label'>Name</label>
                        <input 
                            type="text"
                            name="name"
                            onChange={(e)=>{this.handleChange(e)}}
                            className='form--input-item'
                        />
                        <p style={{color:"red"}}>{this.state.errors.name}</p>
                    </div>
                    <div className="form-item-box">
                        <label className='form-item-label'>Description</label>
                        <input 
                            type="text"
                            name="description"
                            onChange={(e)=>{this.handleChange(e)}}
                            className='form--input-item'
                        />
                        <p></p>
                    </div>
                    <div className="form-item-box">
                        <label className='form-item-label'>Price</label>
                        <input 
                            type="number"
                            name="price"
                            onChange={(e)=>{this.handleChange(e)}}
                            className='form--input-item'
                            required
                        />
                        <p style={{color:"red"}}>{this.state.errors.price}</p>
                    </div>
                    <input type="submit" value="ADD PRODUCT" className="btn"/>
                </form>
            </div>
        </div>
    )
  }
}

AddForm.contextType = MyThemeContext;

export default AddForm