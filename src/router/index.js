import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeListView from '@/views/recipes/RecipeListView.vue';
import CreateRecipeView from '@/views/recipes/CreateRecipeView.vue';
import CalendarView from '@/views/CalendarView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipes',
      name: 'recipe-list',
      component: RecipeListView
    },
    {
      path: '/recipes/new',
      name: 'create-recipe',
      component: CreateRecipeView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
  ]
})

export default router
