<template>
	<div>
		<input type="text" v-model="query">
		<button @click="fetch">Search</button>
	</div>
</template>

<script>

import Ingredient from '@/core/models/Ingredient.js';

export default {
	name: 'FetchIngredient',
	data() {
		return {
			query: null
		}
	},
	methods: {
		fetch() {
			if (this.query.trim() != '') {
				Ingredient.fetch(this.query)
					.then(data => {
						this.$store.commit('updateIngredientSearch', Ingredient.formatSearch(data.foods));
					});
			}
		}
	}
}

</script>

<style scoped>

</style>