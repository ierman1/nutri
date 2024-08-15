<template>
	<h1>New recipe</h1>
	<router-link to="/recipes">Back</router-link>

	<div>
		<label for="name">Recipe name</label>
		<input type="text" id="name" @keyup="updateRecipeName">

		<h2>Ingredients</h2>
		<FetchIngredient />

		<h3>Added ingredients</h3>
		<IngredientList :ingredients="$store.state.editableRecipe.ingredients" :removable="true" @ingredientRemoved="removeIngredientFromRecipe" />
	</div>

	<button @click="saveRecipe">Save recipe</button>
</template>

<script>
import FetchIngredient from '@/components/ingredients/FetchIngredient.vue';
import IngredientList from '@/components/ingredients/IngredientList.vue';

export default {
	name: 'CreateRecipeView',
	components: {
		IngredientList,
		FetchIngredient
	},
	methods: {
		updateRecipeName(event) {
			this.$store.commit('updateRecipeName', event.target.value);
		},
		saveRecipe() {
			this.$store.commit('addRecipeToList');
			this.$router.push('/recipes');
		},
		removeIngredientFromRecipe(ingredient) {
			this.$store.commit('removeIngredientFromRecipe', this.ingredient);
		}
	},
	created() {
		this.$store.commit('createNewRecipe');
	}
}
</script>

<style scoped>

</style>