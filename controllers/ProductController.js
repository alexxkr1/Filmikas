const Product = require('../models/Product')

exports.CreatePost = async (req, res, next) => {
    let product = new Product("EOS CAMERA", "2", "4", "1")
    
   product = product.save();

    console.log(post);

    res.send("New post route")
}