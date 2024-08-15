import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from "vuex";
import Recipe from "@/core/models/Recipe.js";

const app = createApp(App)


const store = createStore({
    state: {
        editableRecipe: null,
        recipes: [],
        calendar: {
            'Monday': [],
            'Tuesday': [],
            'Wednesday': [],
            'Thursday': [],
            'Friday': [],
            'Saturday': [],
            'Sunday': []
        }
    },
    mutations: {
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
            state.recipes.push(state.editableRecipe);
        },

        removeRecipe(state, recipe) {
            const index = state.recipes.indexOf(recipe);
            state.recipes.splice(index, 1);
        },

        // Calendar
        addRecipeToDay(state, { day, recipe }) {
            state.calendar[day].push(recipe);
        },

        removeRecipeFromDay(state, { day, recipe }) {
            const index = state.calendar[day].indexOf(recipe);
            state.calendar[day].splice(index, 1);
        }
    }
})


app.use(router)
app.use(store)

app.mount('#app')
