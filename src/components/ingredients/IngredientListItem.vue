<template>
	<div>
		<p>{{ ingredient.name }}</p>
		<button v-if="editTools.addable" @click="addIngredient">Add ingredient</button>
		<button v-if="editTools.removable" @click="removeIngredient">Remove ingredient</button>
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
		addIngredient() {
			this.$parent.$emit('ingredientAdded', this.ingredient);
		},
		removeIngredient() {
			this.$parent.$emit('ingredientRemoved', this.ingredient);
		}
	}
}

</script>

<style scoped>

</style>