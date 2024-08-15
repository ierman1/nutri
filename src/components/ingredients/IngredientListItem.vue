<template>
	<div>
		<p>{{ ingredient.name }}</p>
		<button v-if="editTools.addable" @click="addIngredientToRecipe">Add to recipe</button>
		<button v-if="editTools.removable" @click="removeIngredientFromRecipe">Remove from recipe</button>
	</div>
</template>

<script>

import Ingredient from "@/core/models/Ingredient.js";

export default {
	name: 'IngredientListItem',
	props: {
		editTools: {
			type: Object,
			default: false
		},
		ingredient: {
			type: Ingredient,
			required: true
		}
	},
	methods: {
		addIngredientToRecipe() {
			this.$store.commit('addIngredientToRecipe', this.ingredient);
			this.$parent.$emit('ingredientListUpdated');
		},
		removeIngredientFromRecipe() {
			this.$store.commit('removeIngredientFromRecipe', this.ingredient);
		}
	}
}

</script>

<style scoped>

</style>