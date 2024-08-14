<template>
	<h1>Calendar</h1>
	<router-link to="/">Back to home</router-link>

	<Calendar />
</template>

<script>

import Calendar from '@/components/calendar/Calendar.vue';

export default {
	name: 'CalendarView',
	components: {
		Calendar
	}
}

</script>

<style scoped>

</style>