<template>
	<h1>Calendar</h1>
	<router-link to="/">Back to home</router-link>

	<Calendar />

	<button @click="exportCalendar">Export</button>
</template>

<script>

import Calendar from '@/components/calendar/Calendar.vue';
import Recipe from '@/core/models/Recipe.js';
import jsPDF from 'jspdf';

export default {
	name: 'CalendarView',
	components: {
		Calendar
	},
	methods: {
		exportCalendar() {
			const ingredients = [];

			Object.keys(this.$store.state.calendar).forEach(day => {
				Recipe.exportIngredientList(this.$store.state.calendar[day], ingredients);
			});

			const pdf = new jsPDF('p', 'pt', 'a4');
			const list = document.createElement('ul');
			list.style.width = '500px';

			ingredients.forEach(ingredient => {
				list.appendChild(ingredient.getPdfElement());
			})

			pdf.html(list,{ x: 10, y: 10, width: 300 }).then(() => pdf.save('list.pdf'));
		}
	}
}

</script>

<style scoped>

</style>