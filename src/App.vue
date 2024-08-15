<script setup>
import { RouterLink, RouterView } from 'vue-router'
import seed from '@/assets/seed.json';
import Recipe from '@/core/models/Recipe.js';
</script>

<template>
  <RouterView />
</template>

<script !src="">

export default {
	created() {
		Recipe.seedRecipes(this.$store, seed);
	}
}

</script>t

<style scoped>

</style>
