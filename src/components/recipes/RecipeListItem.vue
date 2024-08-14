<template>
	<div>
		<p>{{ recipe.name }}</p>
		<ul>
			<li v-for="ingredient in recipe.ingredients">{{ ingredient.name }}</li>
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
		}
	}
}
</script>

<style scoped>

</style>