<template>
	<div class="calendar">
		<CalendarDay day="Monday" />
		<CalendarDay day="Tuesday" />
		<CalendarDay day="Wednesday" />
		<CalendarDay day="Thursday" />
		<CalendarDay day="Friday" />
		<CalendarDay day="Saturday" />
		<CalendarDay day="Sunday" />
	</div>
</template>

<script>
import CalendarDay from '@/components/calendar/CalendarDay.vue';

export default {
	name: 'Calendar',
	components: {
		CalendarDay
	}
}
</script>

<style scoped>
	.calendar {
		display: flex;
		flex-direction: row;
	}
</style>