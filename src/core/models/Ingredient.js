import Api from "@/core/Api.js";

export default class Ingredient {

    constructor(id, name, macros) {
        this._id = id;
        this._name = name;
        this._macros = macros;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
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

    static search(query) {
        const request = Api.fetchByName(query);
        return request.then(response => response.json());
    }

    static fetch(ids) {
        const request = Api.fetchByIds(ids);
        return request.then(response => response.json());
    }

    static formatSearch(results) {
        const formattedArray = [];

        results.forEach(ingredient => {
            formattedArray.push(new Ingredient(ingredient.fdcId, ingredient.description, ingredient.foodNutrients));
        })

        return formattedArray;
    }

}