const ProductModel=require("../Models/Product-models")

exports.getAll=(req,res)=>{
    ProductModel.find({})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(505).send({message:err.message})
    })
}

exports.create=(req,res)=>{
    const foodlist=new ProductModel({
        image:req.body.image,
        name:req.body.name,
        price:req.body.price,
        rating:req.body.rating
    })
    foodlist.save()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        message:err.message
    })
}