const express = require('express');
const router = express.Router();
const recipeController = require('../../controllers/recipeController');

// const ROLES_LIST = require('../../config/roles_list');
// const verifyRoles = require('../../middleware/verifyRoles');

const {
    getRecipes, 
    createNewRecipe, 
    updateRecipe, 
    deleteRecipe, 
    getRecipeById, 
    search
} = recipeController;

router.route('/')
    .get(getRecipes)
    .post(createNewRecipe);

router.route('/search').get(search);

router.route('/:id')
    .get(getRecipeById)
    .put(updateRecipe)
    .delete(deleteRecipe);


module.exports = router;