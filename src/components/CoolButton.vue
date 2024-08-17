<template>
	<button v-if="type == 'button'" :class="completeClassList">
		<slot></slot>
	</button>
	<router-link v-if="type == 'link'" :to="to" :class="completeClassList">
		<slot></slot>
	</router-link>
</template>

<script>
export default {
	name: 'CoolButton',
	props: {
		type: {
			type: String,
			required: true
		},
		to: {
			type: String
		},
		class: {
			type: String
		}
	},
	computed: {
		completeClassList() {
			return this.class + ' rounded-md bg-blue-300 hover:bg-blue-500 text-white p-3 inline-block'
		}
	}
}
</script>

<style scoped>

</style>