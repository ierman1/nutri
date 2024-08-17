import Api from "@/core/Api.js";

export default class Ingredient {

    constructor(id, name, macros, amount = 0, amountType = null) {
        this._id = id;
        this._name = name;
        this._macros = macros;
        this._amount = amount;
        this._amountType = amountType;
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

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }

    get amountType() {
        return this._amountType;
    }

    set amountType(value) {
        this._amountType = value;
    }

    getPdfElement() {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p><b>${this.name}</b></p>
            <p>${this.amount} ${this.amountType}</p>
        `;

        return listItem;
    }

    static search(query) {
        console.log('Search method.');
        const request = Api.fetchByName(query);
        return request.then(response => response.json());
    }

    static fetch(ids) {
        console.log('Fetch method.');
        const request = Api.fetchByIds(ids);
        return request.then(response => response.json());
    }

    static instantiateSearch(ingredientData, amount = 0, amountType = null) {
        return new Ingredient(ingredientData.fdcId, ingredientData.description, ingredientData.foodNutrients, amount, amountType);
    }

}