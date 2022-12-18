const mongoose=require("mongoose")
const ProductSchema=mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type : String,
        required:true
    }, 
    price:{
        type: Number,
        required:true
    },
    rating:{
        type:Number
    }
})
module.exports=mongoose.model("Product",ProductSchema);