<template>
	<nav class="w-screen h-screen flex flex-col justify-center items-center text-2xl">
		<h1 class="text-5xl text-blue-800 font-bold mb-8">Nutri App</h1>
		<CoolButton type="link" to="/recipes" class="mb-3">
			Recipes
		</CoolButton>
		<CoolButton type="link" to="/calendar">
			Calendar
		</CoolButton>
	</nav>
</template>

<script>
	import CoolButton from '@/components/CoolButton.vue';

	export default {
		components: { CoolButton }
	}
</script>