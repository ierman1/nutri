<template>
	<RecipeListItem v-for="recipe in recipes" :recipe="recipe" :editTools="editTools" />
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
		},
		addable: {
			type: Boolean,
			default: false
		},
		removable: {
			type: Boolean,
			default: false
		}
	},
	emits: ['recipeRemoved'],
	computed: {
		editTools() {
			return {
				addable: this.addable,
				removable: this.removable
			}
		}
	}
}

</script>

<style scoped>

</style>