
const express = require("express")
const CategoryController = require("../controllers/CategoryController")
const router = express.Router();

router
    .route("/categories")
    .get(CategoryController.getAllCategories)
    .post(CategoryController.createNewCategory)

router
    .route("/categories/:id")
    .get(CategoryController.getCategoryById)
    // .put(CategoryController.updateCategory)
    // .delete(CategoryController.deleteCategory)

module.exports = router 