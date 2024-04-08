import React, { Component } from 'react';
import {fetchProducts, deleteProductsById, putProducts} from '../Services/ApiService';
import Loading from './Loading';
import { MyThemeContext } from '../Context/ThemeContext'
import Popup from 'reactjs-popup';
export class RndClaCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            isLoading: true,
            updateTrigger: false,
            updateData:[],
        }
        
    }

    componentDidMount(){
        setTimeout(()=>{
            fetchProducts()
            .then((res) =>{
                this.setState({
                    products: res.data,
                    isLoading: false,
                })
                
            })
            .catch((err) =>{
                this.setState({
                    isLoading: false 
                })
                console.log(this.state.products)
            })
            .finally(() =>{
    
            })
        },1500)
    }
    deleteHandle = (id)=>{
        console.log(id)
        deleteProductsById(id)
        .then((res)=>{
            console.log(res)
            //window.location.reload()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    updateHandle = (id, name, description, price, timestamp)=>{
        this.setState({
            updateData: [id, name, description, price, timestamp],
            updateTrigger:true
        })
    }
    render() {
    const theme = this.context;
    return (
      <div style={{position: 'relative'}}>
        <div style={{margin:"10px",display: "flex",flexWrap: "wrap",justifyContent:"center"}} htmlFor="item-box">
            {this.state.isLoading ? <Loading/>: this.state.products.map((data, index) => 
                <div key={index} style={{width:"400px",margin: "10px",border: `1px solid ${theme.foreground}`, padding: "10px", borderRadius: "10px"}}>
                    <h1>{data.name}</h1>
                    <h3>{data.price}</h3>
                    <p>{data.timestamp}</p>
                    <p>{data.description}</p>
                    <button className="filter-btn"style={{backgroundColor:"green",color:"white", margin:"10px", padding:"10px",}} onClick={()=>{this.updateHandle(data._id,data.name,data.description,data.price,data.timestamp)}}>UPDATE</button>
                    <Popup 
                        trigger={
                            <button className="filter-btn" style={{backgroundColor:"red",color:"white", margin:"10px", padding:"10px"}} >DELETE</button>
                        } 
                        position="right center"
                    >
                        <div style={{width:"250px",backgroundColor:"yellow",borderRadius:"10px",display:"flex",flexDirection:"column", alignItems:"center"}}>
                            <p style={{textAlign:"center", fontWeight:"bold",color:"black"}}>Are you sure you want to delete this?</p>
                            <button  className="filter-btn"style={{backgroundColor:"red",color:"white", margin:"10px", padding:"10px"}} onClick={()=>{this.deleteHandle(data._id)}}>Delete</button>
                        </div>
                    </Popup>
                </div>
            )}
        </div>
        {
            this.state.updateTrigger ? 
            <RndClaUpdate openFrom={this.state.updateTrigger} closeForm={this.setState.updateTrigger} productsData={this.state.updateData}/>
            : ''
      
        }
        </div>
    )
  }
}
RndClaCom.contextType = MyThemeContext;
export default RndClaCom

class RndClaUpdate extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name:props.productsData[1],
            description: props.productsData[2],
            price: props.productsData[3],
            date: props.productsData[4]
        }
    }
    componentDidUpdate(nextProps, nextState){
        // console.log(nextProps.productsData[0], this.props.productsData[0])
        // if(nextProps.productsData[0] !== this.props.productsData[0])
        // {
        //     return true;
        // }
        // return false;
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
    render(){
        const theme = this.context;
        return(
            <>
                <div className="form-container" style={{position: 'fixed', top:'0', bottom:"0", width:"100%", backgroundColor:theme.background,}}>
                    
                    <form className="form-box" onSubmit={this.handleSubmit}>
                    <button style={{backgroundColor:"red", borderRadius:"100%", padding:"5px", textAlign:"center",width:"30px", height:"30px", color:"white"}} onClick={()=>{this.props.closeForm(false)}}>X</button>
                        <h3>{this.props.productsData[3]}</h3>
                        <div className="form-item-box">
                            <label className='form-item-label'>Name</label>
                            <input 
                                type="text"
                                onChange={(e)=>{this.setState({name: e.target.value})}}
                                className='form--input-item'
                                defaultValue={this.props.productsData[1]}
                            />
                        </div>
                        <div className="form-item-box">
                            <label className='form-item-label'>Description</label>
                            <input 
                                type="text"
                                onChange={(e)=>{this.setState({description: e.target.value})}}
                                className='form--input-item'
                                defaultValue={this.props.productsData[2]}
                            />
                        </div>
                        <div className="form-item-box">
                            <label className='form-item-label'>Price</label>
                            <input 
                                type="number"
                                onChange={(e)=>{this.setState({price: e.target.value})}}
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
RndClaUpdate.contextType = MyThemeContext;