const productController=require("../Controllers/Product-controllers")

module.exports=app=>{
    app.get("/api/product",productController.getAll);
    app.post("/api/product",productController.create);
}