<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" v-model="username" type="text" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" v-model="password" type="text" />
		</div>
		<button type="submit" v-bind:disabled="!isUsernameValid || !password">
			로그인
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	name: 'LoginForm',
	data() {
		return {
			// form values
			username: '',
			password: '',
			// log
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				// 비지니스 로직
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				this.logMessage = `${data.user.username} 님 환영합니다.`;
			} catch (err) {
				// 에러 핸들링 코드
				const errType = err.response.status;
				if (errType == 401) {
					this.logMessage = '잘못된 비밀번호를 입력하셨습니다.';
				} else if (errType == 500) {
					this.logMessage = '에러가 발생했습니다. 잠시후 다시 시도해주세요';
				}
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style scoped></style>
