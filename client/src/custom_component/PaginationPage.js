/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react'
import { MyThemeContext } from '../Context/ThemeContext'
import Dashboard from './Dashboard'
import {fetchProductsByPage} from '../Services/ApiService'

function PaginationPage() {
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    var [newPage, setNewPage] = useState(1);
    const theme = useContext(MyThemeContext)
    useEffect(()=>{
        fetchProductsByPage(newPage)
        .then((res)=>{
            
            console.log(res.data[0].products)
            setProducts(res.data[0].products)
            setTotalPages(res.data[1].totalPage)
            console.log(res.data[1])
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    useEffect(()=>{
        takePage(newPage)
    },[newPage])

    const takePage = async (page) => {
        const response = await fetchProductsByPage(page)
        setProducts(response.data[0].products)
        
    }

    const handleNextPage =()=>{
        console.log("run",newPage,totalPages)
        if(newPage < totalPages)
        {
            setNewPage(newPage +1)
            console.log(newPage)
        }
    }
    const handlePreviewPage = () =>{
        
        console.log("Run",newPage)
        if(newPage > 1)
        {
            setNewPage(newPage - 1)
            console.log(newPage)
        }
    }

  return (
    <div className="show-product-full-view">
        <div className="dashboard-container">
            <Dashboard/>
        </div>
        <div className="products-container">
            <div className="products-box" style={{backgroundColor: theme.background, color: theme.foreground}}>
                {products.map((data, index) => 
                    <div key={index} className="products-item-box" style={{border: `1px solid ${theme.foreground}`}}>
                        <h1>{data.name}</h1>
                        <h3>{data.price}</h3>
                        <p>{data.timestamp}</p>
                        <p>{data.description}</p>
                    </div>
                )}
            </div>
            <div className="product-page-move-box">
                <button className="filter-btn" style={{margin:"10px",padding:"5px 15px",borderRadius:"5px", backgroundColor:"gray", color:"white", width:"100px"}} onClick={()=>{handlePreviewPage()}}>Preview</button>
                <button className="filter-btn" style={{margin:"10px",padding:"5px 15px",borderRadius:"5px", backgroundColor:"gray", color:"white", width:"100px"}} onClick={()=>{handleNextPage()}}>Next Page</button>
            </div>
            </div>
    </div>
  )
}

export default PaginationPage