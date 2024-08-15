<template>
	<div>
		<p>{{ recipe.name }}</p>
		<ul>
			<li v-for="ingredient in recipe.ingredients">{{ ingredient.name }}</li>
			<button v-if="editTools.removable" @click="removeRecipe">Remove recipe</button>
		</ul>
	</div>
</template>

<script>
import Recipe from '@/core/models/Recipe.js';

export default {
	name: 'RecipeListItem',
	props: {
		recipe: {
			type: Recipe,
			required: true
		},
		editTools: {
			type: Object,
			default: false
		}
	},
	methods: {
		removeRecipe() {
			this.$parent.$emit('recipeRemoved', this.recipe);
		}
	}
}
</script>

<style scoped>

</style>