const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/newapidb");
const bodyparser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

const adminRoute = require("./route/admin.route");
const categoryRoute = require('./route/category.route');
const productRoute = require("./route/product.route");
const userRoute = require("./route/user.route");
const cartRoute = require("./route/cart.route");


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,"public")));

app.use("/api/admin",adminRoute);
app.use("/api/category",categoryRoute);
app.use("/api/product",productRoute);
app.use("/api/user",userRoute);
app.use("/api/cart",cartRoute);

app.listen(port,()=>{
 console.log("----Server Started----");
});