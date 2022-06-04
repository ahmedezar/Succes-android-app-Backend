const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name:String,
        price:String,
        description:String,
        image:String
    
    }
);

const Product = mongoose.model("product", productSchema);

module.exports = { Product }