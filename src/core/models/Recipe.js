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

}