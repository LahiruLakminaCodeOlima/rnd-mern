var express = require('express');
var express = require('express');
var router = express.Router();
const { DUMMY_PRODUCT_LIST } = require('../dummy/dummy-products');

/* List Products */
router.get('/', function(req, res, next) {

    const products = DUMMY_PRODUCT_LIST
    return res.status(200).json(products)
});

router.get('/:id', function(req, res, next) {
    try{
        const id = req.params.id;
        const product = DUMMY_PRODUCT_LIST.find((item) => item._id === id)
        if(product){
            return res.status(200).json(product)
        }else{
            return res.status(404).json()
        }
    }catch(err){
        return res.status(500, err).json()
    }
});

router.put('/:id', function(req, res, next) {
    try{
        const name = req.params.name;
        const description = req.params.description;
        const price = req.params.price;
        const timestamp = req.params.timestamp;
        const id = req.params.id;

        const product = DUMMY_PRODUCT_LIST.updateOne(
            {_id : id}, {$set: 
                {   name: name,
                    description: description,
                    price: price,
                    timestamp: timestamp
                }
            });

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

router.put('/:id', function(req, res, next) {
    try{
        const id = req.params.id;
        const product = DUMMY_PRODUCT_LIST.deleteOne({_id:id})
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