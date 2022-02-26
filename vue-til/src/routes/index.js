import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage'),
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage'),
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage'),
		},
	],
});
