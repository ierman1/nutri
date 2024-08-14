<template>
	<RecipeListItem v-for="recipe in recipes" :recipe="recipe" />
</template>

<script>

import RecipeListItem from '@/components/recipes/RecipeListItem.vue';

export default {
	name: 'RecipeList',
	components: {
		RecipeListItem
	},
	props: {
		recipes: {
			type: Array,
			required: true
		}
	}
}

</script>

<style scoped>

</style>