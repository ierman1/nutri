<template>
	<select v-model="selectedRecipe">
		<option v-for="recipe in recipes" :value="recipe">{{ recipe.name }}</option>
	</select>
	<button @click="selectRecipe">Add recipe</button>
</template>

<script>

export default {
	name: 'RecipeSelector',
	emits: ['recipeSelected'],
	data() {
		return {
			recipes: this.$store.state.recipes,
			selectedRecipe: null
		}
	},
	methods: {
		selectRecipe() {
			this.$emit('recipeSelected', this.selectedRecipe);
		}
	}
}

</script>

<style scoped>

</style>