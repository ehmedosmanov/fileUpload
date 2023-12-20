import mongoose from "mongoose";

const {Schema} = mongoose

const productSchema = new Schema({
    title:{type:String},
    price:{type:String},
    image:{type:String}
})


export const Products = mongoose.model("Products", productSchema)