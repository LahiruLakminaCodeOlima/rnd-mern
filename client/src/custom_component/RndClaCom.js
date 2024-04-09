import React, { Component } from 'react';
import {fetchProducts, deleteProductsById} from '../Services/ApiService';
import Loading from './Loading';
import { MyThemeContext } from '../Context/ThemeContext'
import Popup from 'reactjs-popup';
import Dashboard from './Dashboard';
import UpdateForm from './UpdateForm';
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
            window.location.reload()
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
        <div className="show-product-full-view">
            <div className="dashboard-container">
                <Dashboard/>
            </div>
            <div className="products-container" >
                
            {
                this.state.updateTrigger ? 
                <UpdateForm openFrom={this.state.updateTrigger} closeForm={this.setState.updateTrigger} productsData={this.state.updateData}/>
                : <div className="products-box" htmlFor="item-box" style={{backgroundColor: theme.background, color: theme.foreground}}>
                {this.state.isLoading ? <Loading/>: this.state.products.map((data, index) => 
                    <div key={index} className="products-item-box" style={{border: `1px solid ${theme.foreground}`}}>
                        <h1>{data.name}</h1>
                        <h3>{data.price}</h3>
                        <p>{data.timestamp}</p>
                        <p>{data.description}</p>
                        <button className="filter-btn update-btn" onClick={()=>{this.updateHandle(data._id,data.name,data.description,data.price,data.timestamp)}}>UPDATE</button>
                        <Popup 
                            trigger={
                                <button className="filter-btn delete-btn">DELETE</button>
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
        
            }
            </div>
        </div>
    )
  }
}
RndClaCom.contextType = MyThemeContext;
export default RndClaCom