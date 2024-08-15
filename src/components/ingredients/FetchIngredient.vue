<template>
	<div>
		<input type="text" v-model="query">
		<button @click="fetch">Search</button>

		<h3>Search results</h3>
		<IngredientList :ingredients="searchResults" :addable="true" @ingredientAdded="addIngredientToRecipe" />
	</div>
</template>

<script>

import Ingredient from '@/core/models/Ingredient.js';
import IngredientList from '@/components/ingredients/IngredientList.vue';

export default {
	name: 'FetchIngredient',
	emits: ['searchCompleted'],
	components: {
		IngredientList
	},
	data() {
		return {
			query: '',
			searchResults: []
		}
	},
	methods: {
		fetch() {
			if (this.query.trim() != '') {
				Ingredient.search(this.query)
					.then(data => {
						this.searchResults = Ingredient.formatSearch(data.foods);
					});
			}
		},
		addIngredientToRecipe(ingredient) {
			this.$store.commit('addIngredientToRecipe', ingredient);
			this.searchResults = [];
		}
	}
}

</script>

<style scoped>

</style>