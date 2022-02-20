<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input
				id="username"
				v-model="username"
				:class="isUsernameValid ? '' : 'invalid'"
				type="text"
			/>
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" v-model="password" type="text" />
		</div>
		<div>
			<label for="nickname">nickname: </label>
			<input id="nickname" v-model="nickname" type="text" />
		</div>
		<button :disabled="!isUsernameValid" type="submit">회원 가입</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

const log = console.log;
export default {
	name: 'SignupForm',
	data() {
		return {
			// form values

			username: '',
			password: '',
			nickname: '',
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
			log('폼제출');
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData);
			console.log(data.username);
			this.logMessage = `${data.username} 님이 가입되었습니다.`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.username = '';
		},
	},
};
</script>

<style scoped>
.invalid {
	border: 1px red solid;
}
</style>
