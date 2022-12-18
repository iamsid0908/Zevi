// mongodb+srv://sid:<password>@cluster0.noezw5j.mongodb.net/?retryWrites=true&w=majority

const express=require("express")
const mongoose=require("mongoose")
const app=express();
const bodyParser=require('body-parser');
const cors=require("cors")

mongoose.connect("mongodb+srv://sid:sid@cluster0.noezw5j.mongodb.net/?retryWrites=true&w=majority")
var db=mongoose.connection;
db.on("open",()=>{
    console.log("connected");
})
db.on("error",()=>{
    console.log("dis-connected")
})
app.use(cors());
app.use(bodyParser.json());


require("./app/Routes/Product-routes")(app)
const port=8000;
app.listen(port,()=>{
    console.log("server is running in port "+port);
})