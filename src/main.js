import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from "vuex";
import Recipe from "@/core/models/Recipe.js";

const app = createApp(App)


const store = createStore({
    state: {
        ingredientSearch: [],
        editableRecipe: null,
        recipes: []
    },
    mutations: {
        // Ingredient search
        updateIngredientSearch(state, searchResults) {
            state.ingredientSearch = searchResults;
        },

        resetIngredientSearch(state) {
            state.ingredientSearch = [];
        },

        // Editable recipe
        createNewRecipe(state) {
            state.editableRecipe = new Recipe('', []);
        },

        updateRecipeName(state, name) {
            state.editableRecipe.name = name;
        },

        addIngredientToRecipe(state, ingredient) {
            state.editableRecipe.addIngredient(ingredient);
        },

        removeIngredientFromRecipe(state, ingredient) {
            state.editableRecipe.removeIngredient(ingredient);
        },

        // Recipe list
        addRecipeToList(state) {
            console.log('Saving')
            state.recipes.push(state.editableRecipe);
        }
    }
})


app.use(router)
app.use(store)

app.mount('#app')
