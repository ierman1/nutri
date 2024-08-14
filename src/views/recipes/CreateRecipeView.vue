<template>
	<h1>New recipe</h1>
	<router-link to="/recipes">Back</router-link>

	<div>
		<label for="name">Recipe name</label>
		<input type="text" id="name" @keyup="updateRecipeName">

		<h2>Ingredients</h2>
		<FetchIngredient />

		<h3>Search results</h3>
		<IngredientList :ingredients="$store.state.ingredientSearch" :addable="true" />

		<h3>Added ingredients</h3>
		<IngredientList :ingredients="$store.state.editableRecipe.ingredients" :removable="true" />
	</div>

	<button @click="saveRecipe">Save recipe</button>
</template>

<script>
import FetchIngredient from '@/components/ingredients/FetchIngredient.vue';
import IngredientList from "@/components/ingredients/IngredientList.vue";

export default {
	name: 'CreateRecipeView',
	components: {
		IngredientList,
		FetchIngredient
	},
	methods: {
		updateRecipeName(event) {
			this.$store.commit('updateRecipeName', event.target.value)
		},
		saveRecipe() {
			this.$store.commit('addRecipeToList');
			this.$router.push('/recipes');
		}
	},
	created() {
		this.$store.commit('createNewRecipe');
		this.$store.commit('resetIngredientSearch');
	}
}
</script>

<style scoped>

</style>