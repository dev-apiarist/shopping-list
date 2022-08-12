const { JSONResponse } = require("../lib/helper");
const Category = require("../models/category.model");

class CategoryController{
/**
 * ### Description
 * creates a category with the data passed in the request
 */
    static createCategory = async (req, res, next) =>{
        try{
            const category = await new Category(req.body).save()
            JSONResponse.success(res, "Success", category, 200);
        }catch(error){
            JSONResponse.error(res, "Failed", error, 404);
        }
    }
    /**
     * ### Description
     * Gets all the categories that were saved in the database.
     */
    static getAllCategories = async (req, res, next)=>{
        try{
            const categories = await Category.find()
            JSONResponse.success(res, "Success", categories, 200)
        }catch(error){
            JSONResponse.error(res, "Failed", error, 404)
        }
    }

        /**
     * ### Description
     * Gets a single category based on the id that was passed in.
     */
    static getCategoryById = async (req, res, next)=>{
        try{
            const id = req.params.id;
            const category = await Category.findById(id)
            JSONResponse.success(res, "Success", category, 200)
        }catch(error){
            JSONResponse.error(res, "Failed", error, 404)
        }
    }

        /**
     * ### Description
     * Updates the category that matches the id that was passed to the route.
     */
    static updateCategory = async (req,res, next)=>{
        try{
            const id = req.params.id;
            const category = await Category.findByIdAndUpdate(id, req.body, {new: true});
            JSONResponse.success(res, "Success", category, 200)
        }catch(error){
            JSONResponse.error(res, "Success", error, 404);
        }
    }

        /**
     * ### Description
     * Deletes the category from the database.
     */
    static deleteCategory = async (req,res, next)=>{
        try{
            const id = req.params.id;
            await Category.findByIdAndDelete(id);
            JSONResponse.success(res, "Success", category, 200)
        }catch(error){
            JSONResponse.error(res, "Success", error, 404);
        }
    }
}


module.exports = CategoryController;