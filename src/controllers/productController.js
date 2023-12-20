import mongoose from "mongoose";
import { Products } from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const createProduct = async (req,res) => {
    try {
        const newProduct = new Products({
            title:req.body.title,
            price:req.body.price,
            image:req.file.path            
        })
        await newProduct.save()
        res.status(201).json({message:"Product created"})
    } catch (error) {
        res.status(500).json({message:error})
    }
}