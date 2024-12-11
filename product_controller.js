import Product from "../Model/product_model.js"
import db from "../DB/db_config.js"
import { request, response } from "express";
import { where } from "sequelize";

export const addProduct = async (request,response,next) =>{
    try{
        const {name, price, category_id } = request.body;
        let category = parseInt(category_id);
        console.log(name,price,category_id);
        console.log(typeof(category_id));
        const newProduct = await Product.create({
            name,
            price,
            category_id
        });

        // product = await Product.create(request.body);
        console.log(newProduct);
        return response.status(201).json({message : "product added..."});

    }catch(err){
        console.log(err);
        return response.status(500).json({error : "internal server error"});
    }

}

export const deleteProduct = async(request,response,next) =>{
    try{
        const id = request.params.id;
        const deletedRow = await Product.destroy({where : {id}});
        console.log(deletedRow);
        if(deletedRow > 0){
            return response.status(200).json({message : "product delete successfully..."});
        }
        return response.status(404).json({message : "product is not found"});

    }catch(err){
        console.log(err);
        return response.status(500).json({error : "Internal server error"});
    }
};


export const getAllProduct = async(request,response)=>{
    try{
        let allProductData = await Product.findAll();
        return response.status(200).json(allProductData);
    }
    catch(err){
        console.log(err);
        return response.status(500).json({error : "internal server error"});
    }
}


export const updateProduct = async(request,response)=>{
    try{
        const id = request.params.id;
        const {name, price, category_id} = request.body;
        let updatedRowsCount = await Product.update(
            {name, price, category_id},
            {where : {id}});
            console.log(updateProduct);
            if(updatedRowsCount == 0){
                return response.status(404).json({message : "product is not found"})
            }
            return response.status(200).json({message : "product update successfully..."})
        }
        catch(err){
            console.log("error in update product : " + err);
            return response.status(500).json({error : "Internal server error"});
        }
};