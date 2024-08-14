<template>
	<h1>Recipes</h1>
	<router-link to="/">Back to home</router-link> |

	<router-link to="/recipes/new">New recipe</router-link>

	<RecipeList :recipes="$store.state.recipes" />

</template>

<script>

import RecipeList from '@/components/recipes/RecipeList.vue';

export default {
	name: 'RecipeListView',
	components: {
		RecipeList
	}

}

</script>

<style scoped>

</style>