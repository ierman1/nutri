<template>
	<div>
		<IngredientListItem v-for="ingredient in ingredients" :ingredient="ingredient" :editTools="editTools" />
	</div>
</template>

<script>

import IngredientListItem from '@/components/ingredients/IngredientListItem.vue';

export default {
	name: 'IngredientList',
	components: {
		IngredientListItem
	},
	emits: [
		'ingredientAdded',
		'ingredientRemoved'
	],
	props: {
		addable: {
			type: Boolean,
			default: false
		},
		removable: {
			type: Boolean,
			default: false
		},
		ingredients: {
			type: Array,
			required: true
		}
	},
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