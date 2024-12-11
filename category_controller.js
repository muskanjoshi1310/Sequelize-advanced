import { request, response } from "express"
import db from "../DB/db_config.js"
import Category from "../Model/category_model.js";
import { where } from "sequelize";


export const addCategory = async(request,response) =>{
    try{
        //let {category_name, category_description} = request.body;
        let category = await Category.create(request.body);
        return response.status(201).json({message : "category added..."});

    }catch(err){
        console.log("error in addCategory : " + err);
        return response.status(500).json({error : "internal server error"});
    }
};


export const updateCategory = async (request, response) =>{
    try{
        const {id} = request.params;
        const { category_name, category_description } = request.body;
        let updatedRowsCount = await Category.update(
            {category_name,category_description},
            {where : {id}});
            console.log(updatedRowsCount);
        if(updatedRowsCount == 0){
            return response.status(404).json({message : 'category not found'})
        } 
        return response.status(200).json({message : "category update successfully..."});
    }
    catch(err){
        console.log("error in update category : " + err);
        return response.status(500).json({error : "Internal server error"});
    }

};

export const deleteCategory = async(request,response)=>{
    try{
        const id = request.params.id;
        let deletedRow = await Category.destroy(
            {where : {
                id
            }}
        )
        console.log(deletedRow);
        if(deletedRow > 0){
            return response.status(200).json({message : "category delete successfully..."});
        }
        return response.status(404).json({message : "category is not found"});

    }catch(err){
        console.log(err);
        return response.status(500).json({error : "Internal server error"});
    }
};


export const getAllCategory = async(request,response)=>{
    try{
        let allData = await Category.findAll();
        return response.status(200).json(allData);
    }
    catch(err){
        console.log("error in fetch category : " + err);
        return response.status(500).json({error : "Internal server error"});
    }
};

