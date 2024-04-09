import React, { Component } from 'react';
import { MyThemeContext } from '../Context/ThemeContext';
import {putProducts} from '../Services/ApiService';

class UpdateForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name:props.productsData[1],
            description: props.productsData[2],
            price: props.productsData[3],
        }
    }
    handleSubmit=()=>{
        putProducts(this.props.productsData[0], this.state.name, this.state.description, this.state.price)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    handleChange=(e)=>{
        const {name, value} = e.target;
        if(name==="name"){this.setState({name: value});}
        if(name==="description"){this.setState({description: value});}
        if(name==="price"){this.setState({price: value});}
    }
    render(){
        const theme = this.context;
        return(
            <>
                <div className="form-container" style={{position: 'fixed', top:'50px', bottom:"0", backgroundColor:theme.background,color: theme.foreground}}>
                    
                    <form className="form-box" onSubmit={this.handleSubmit}>
                    <button style={{backgroundColor:"red", borderRadius:"100%", padding:"5px", textAlign:"center",width:"30px", height:"30px", color:"white"}} onClick={()=>{this.setState(state => ({updateTrigger:!state.updateTrigger}))}}>X</button>
                        <div className="form-item-box">
                            <label className='form-item-label'>Name</label>
                            <input 
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                className='form--input-item'
                                defaultValue={this.props.productsData[1]}
                            />
                        </div>
                        <div className="form-item-box">
                            <label className='form-item-label'>Description</label>
                            <input 
                                type="text"
                                name="description"
                                onChange={this.handleChange}
                                className='form--input-item'
                                defaultValue={this.props.productsData[2]}
                            />
                        </div>
                        <div className="form-item-box">
                            <label className='form-item-label'>Price</label>
                            <input 
                                type="number"
                                name='price'
                                onChange={this.handleChange}
                                className='form--input-item'
                                defaultValue={this.props.productsData[3]}
                            />
                        </div>
                        <input type="submit" value="ADD PRODUCT" className="btn"/>
                    </form>
                </div>
            </>
        )
    }
}
UpdateForm.contextType = MyThemeContext;
export default UpdateForm;