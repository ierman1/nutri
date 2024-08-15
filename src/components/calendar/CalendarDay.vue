<template>
	<div>
		<h2>{{ day }}</h2>
		<hr>
		<RecipeSelector @recipeSelected="addRecipe" />
		<h3>Selected recipes</h3>
		<hr>
		<RecipeList :recipes="recipes" />
	</div>
</template>

<script>

import RecipeSelector from '@/components/recipes/RecipeSelector.vue';
import RecipeList from '@/components/recipes/RecipeList.vue';

export default {
	name: 'CalendarDay',
	components: {
		RecipeSelector,
		RecipeList
	},
	props: {
		day: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			recipes: this.$store.state.calendar[this.day]
		}
	},
	methods: {
		addRecipe(recipe) {
			const day = this.day;
			this.$store.commit('addRecipeToDay', { day, recipe });
		}
	}
}

</script>

<style scoped>

</style>