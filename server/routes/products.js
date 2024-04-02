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
    // try{console.log("runOut")}catch(err){return res.status(500, err).json()}
    console.log("runOut")
    try{
        console.log("runIn")
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
router.post('/', function(req, res, next) {
    try{
        const id = Math.random();
        const name = req.query.name;
        const description = req.query.description;
        const price = req.query.price;
        const timestamp = req.query.timestamp;

        const product = DUMMY_PRODUCT_LIST.push({"name":name, "description":description, "price":price, "timestamp":timestamp, "_id":id});
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
router.put('/:id', function(req, res, next) {
    console.log("run")
    try{
        const id = req.params.id;
        const name = req.query.name;
        const description = req.query.description;
        const price = req.query.price;
        const timestamp = req.query.timestamp;
        const product = DUMMY_PRODUCT_LIST.map(index=>{
            if(index._id === id){
                {
                    index.name = name,
                    index.description = description,
                    index.price = price,
                    index.timestamp = timestamp
                }
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

router.delete('/:id', function(req, res, next) {
    try{
        const id = req.params.id;
        let count=0;
        const product = DUMMY_PRODUCT_LIST.map((index, item) =>{
            if(index._id === id)
            {
                console.log(count," === ",id);
                return(
                    DUMMY_PRODUCT_LIST.splice(count, 1)
                )
            }
            count = count+1
        })
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