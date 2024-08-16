<template>
	<div>
		<p>{{ ingredient.name }}</p>
		<div v-if="editTools.addable">
			<div>
				<label for="amount">Amount</label>
				<input type="number" id="amount" v-model="ingredient.amount">
			</div>
			<div>
				<label for="amount_type">Amount type</label>
				<input type="text" id="amount_type" v-model="ingredient.amountType">
			</div>
			<button @click="addIngredient">Add ingredient</button>
		</div>
		<p v-else>
			{{ ingredient.amount }} {{ ingredient.amountType }}
		</p>
		<button v-if="editTools.removable" @click="removeIngredient">Remove ingredient</button>
	</div>
</template>

<script>

import Ingredient from '@/core/models/Ingredient.js';

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