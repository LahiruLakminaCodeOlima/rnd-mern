var express = require('express');
var router = express.Router();
var Products = require('../models/products')

router.get('/', async (req, res, next) => {
    try{
        const products = await Products.find({})
        return res.status(200).json(products)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
});

router.get('/:id', async (req, res, next) =>{
    try{
        const id = req.params.id;
        const product = await Products.findOne({_id : id}).exec();
        if(product){
            return res.status(200).json(product)
        }else{
            return res.status(404).json()
        }
    }catch(err){
        return res.status(500, err).json()
    }
});

router.post('/', async (req, res, next) => {
    try{
        const {name, description, price} =req.body;
        const timestamp =new Date().toUTCString();
        if(name)
        {
            if(description)
            {
                if(price && !isNaN(price))
                {
                    const product = new Products({"name":name, "description":description, "price":price, "timestamp":timestamp});
                    await product.save()
                    if(product)
                    {
                        return res.status(200).json(product)
                    }
                    else
                    {
                        return res.status(400).json()
                    }
                }
                else
                {
                    return res.status(400).json("Price is not defined or is not a number")
                }
            }
            else
            {
                return res.status(400).json("Description is not defined")
            }
        }
        elses
        {
            return res.status(400).json("Name is not defined")
        }        
    }catch(err){
        return res.status(500, err).json()
    }
});
router.put('/:id', async(req, res, next) => {
    
    try{
        const id = req.params.id;
        const {name, description, price, timestamp} = req.body;
        //findOneAndUpdate
        //findByIdAndUpdate
        //updateOne
        if(name)
        {
            if(description)
            {
                if(price && !isNaN(price))
                {
                    if(timestamp)
                    {
                        
                        const product = await Products.updateOne({_id:id},{name : name, description : description, price : price, timestamp : timestamp});
                        if(product)
                        {
                            return res.status(200).json(product)
                        }
                        else
                        {
                            return res.status(404).json()
                        }
                    }
                    else
                    {
                        return res.status(400).json("Timestamp is not defined")
                    }
                }
                else
                {
                    return res.status(400).json("Price is not defined or is not a number")
                }
            }
            else
            {
                return res.status(400).json("Description is not defined")
            }
        }
        elses
        {
            return res.status(400).json("Name is not defined")
        } 
    }catch(err){
        return res.status(500, err).json()
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const product = await Products.deleteOne({_id: id});
        if(product){
            return res.status(200).json(product)
        }
        else{
            return res.status(404).json()
        }
    }catch(err) {
        return res.status(500, err).json()
    }
})

module.exports = router;