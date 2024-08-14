import Api from "@/core/Api.js";

export default class Ingredient {

    constructor(name, macros) {
        this._name = name;
        this._macros = macros;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get macros() {
        return this._macros;
    }

    set macros(value) {
        this._macros = value;
    }

    static fetch(query) {
        const request = Api.fetchByName(query);
        return request.then(response => response.json());
    }

    static formatSearch(results) {
        const formattedArray = [];

        results.forEach(ingredient => {
            formattedArray.push(new Ingredient(ingredient.description, ingredient.foodNutrients));
        })

        return formattedArray;
    }

}