const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    _id : String,
    name: String,
    description: String,
    price: Number,
},{ timestamps: true });

const Products = mongoose.model('Products', schema);

module.exports = Products;