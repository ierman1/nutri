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

        // Calendar
        addRecipeToDay(state, { day, recipe }) {
            console.log(day, recipe)
            state.calendar[day].push(recipe);
        }
    }
})


app.use(router)
app.use(store)

app.mount('#app')
