
const Category = require("../models/Category")

exports.createNewCategory = async (req, res, next) => {
    let { description, model_name } = req.body
    let category = new Category(description, model_name)
    const newCategory = await category.save()
    console.log(newCategory)
    res.send(newCategory)
}

exports.getAllCategories = async (req, res, next) => {
    res.send("get all post works")
}

exports.getCategoryById = async (req, res, next) => {
    res.send("get one post works")
}
