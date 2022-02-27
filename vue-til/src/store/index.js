import Vue from 'vue';
import Vuex from 'vuex';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		setToken(state, token) {
			state.token = token;
		},
		clearUsername(state) {
			state.username = '';
		},
		clearToken(state) {
			state.token = '';
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			// this.logMessage = `${data.user.username} 님 환영합니다.`;
			console.log(data.token);

			commit('setUsername', data.user.username);
			commit('setToken', data.token);

			// jwt token 저장
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);

			return data;
		},
	},
});
