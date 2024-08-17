import Ingredient from '@/core/models/Ingredient.js';

export default class Recipe {

    constructor(name, ingredients) {
        this._name = name;
        this._ingredients = ingredients;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get ingredients() {
        return this._ingredients;
    }

    set ingredients(value) {
        this._ingredients = value;
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    removeIngredient(ingredient) {
        const index = this.ingredients.indexOf(ingredient);
        this.ingredients.splice(index, 1);
    }

    static seedRecipes(store, seed) {
        seed.recipes.forEach(recipe => {

            const ingredientIds = recipe.ingredients.map(ingredient => {
                return ingredient.fdcId;
            });

            Ingredient.fetch(ingredientIds)
                .then(data => {
                    const ingredients = [];

                    data.forEach((ingredient, index) => {
                        ingredients.push(Ingredient.instantiateSearch(ingredient, recipe.ingredients[index].amount, recipe.ingredients[index].amount_type));
                    });

                    store.state.recipes.push(new Recipe(recipe.name, ingredients));
                });

        })
    }

    static exportIngredientList(recipes, ingredients = []) {
        recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                const exists = ingredients.find((i) => i.id == ingredient.id);

                if (!exists) {
                    ingredients.push(new Ingredient(ingredient.id, ingredient.name, ingredient.macros, ingredient.amount, ingredient.amountType));
                } else {
                    exists.amount += ingredient.amount;
                }
            });
        });

        return ingredients;
    }

}