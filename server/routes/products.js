var express = require('express');
var express = require('express');
var router = express.Router();
const { DUMMY_PRODUCT_LIST } = require('../dummy/dummy-products');
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
        const product = await Products.findOne({_id : id})
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
        const id = Math.random().toString();
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const timestamp = req.body.timestamp;
        console.log(id, name, description, price, timestamp)
        const product = new Products({ "_id":id, "name":name, "description":description, "price":price, "timestamp":timestamp});
        await product.save()
        if(product){
            return res.status(200).json(product)
        }
        else{
            return res.status(404).json()
        }
    }catch(err){
        return res.status(500, err).json()
    }
});
router.put('/:id', async(req, res, next) => {
    
    try{
        const id = req.params.id;
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const timestamp = req.body.timestamp;
        //findOneAndUpdate
        //findByIdAndUpdate
        //updateOne
        const product = await Products.updateOne({_id:id},{name : name, description : description, price : price, timestamp : timestamp});
        if(product){
            return res.status(200).json(product)
        }
        else{
            return res.status(404).json()
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