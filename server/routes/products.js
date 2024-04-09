var express = require('express');
var router = express.Router();
var { v4: uuidv4 } = require('uuid');
var Products = require('../models/products')
var { validateRequestPayload }= require('../util/validateRequestPayload')


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

router.post("/get-by-page", async (req, res, next) =>{
    try{
        const page = req.query.page;
        const limit = 3;
        const count = await Products.find({}).exec();
        var totalPage = (count.length/3)
        const products = await Products.find({}).skip((page - 1) * limit).limit(limit).exec();
        
        if(products){
            return res.status(200).json([{products:products}, {totalPage:totalPage}])
        }
        else{
            return res.status(404).json()
        }
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
});

const validationConfigCreateObj =[
    { key: "name", type: "string", isRequired: true },
    { key: "price", type: "number", isRequired: true },
    { key: "description", type: "string", isRequired: false }
]

router.post('/', async (req, res, next) => {
    const {name, description, price}= req.body;
    try{
        const isError = validateRequestPayload(req.body, validationConfigCreateObj)
        const id = uuidv4();

        if(!isError.length)
        {
            const product = new Products({"_id": id, "name":name, "description":description, "price":price});
            await product.save()
            return res.status(200).json(product)
        }
        else
        {
            return res.status(400).json(isError)
        }
    }catch(err){
        return res.status(500).json(err)
    }
});

const validationConfigUpdateObj =[
    { key: "name", type: "string", isRequired: true },
    { key: "price", type: "number", isRequired: true },
    { key: "description", type: "string", isRequired: false }
]

router.put('/:id', async(req, res, next) => {
    try{
        //findOneAndUpdate
        //findByIdAndUpdate
        //updateOne
        const {name, description, price}= req.body;
        const id = req.params.id;
        const isError = validateRequestPayload(req.body, validationConfigUpdateObj)

        if(!isError.length)
        {
            const findProduct = await Products.findOne({_id : id }).exec() 
            if(findProduct)
            {
            const product = await Products.updateOne({_id:id},{name : name, description : description, price : price});
            return res.status(200).json(product)
            }
            else{
                return res.status(404).json("You Looking Product Is Not Found")
            }
        }
        else
        {
            return res.status(400).json(isError)
        }
    }catch(err){
        return res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const product = await Products.deleteOne({_id: id}).exec();
        console.log(product)
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