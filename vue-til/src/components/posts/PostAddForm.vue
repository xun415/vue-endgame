<template>
	<div class="contents">
		<h1 class="page-header">Create Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title:</label>
					<input id="title" v-model="title" type="text" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea id="contents" v-model="contents" rows="5" type="text" />
					<p v-if="!isContentsValid" class="validation-text warning">
						Contents must be less than 250
					</p>
				</div>
				<button class="btn" type="submit">create</button>
			</form>
			<p class="log">
				{{ logMessage }}
			</p>
		</div>
	</div>
</template>

<script>
import { createPost } from '@/api/index';

export default {
	name: 'PostAddForm',
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 250;
		},
	},
	methods: {
		async submitForm() {
			try {
				const response = await createPost({
					title: this.title,
					contents: this.contents,
				});
				console.log(response);
			} catch (err) {
				console.log(err.response.data.message);
				this.logMessage = err.response.data.message;
			}
		},
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}

.btn {
	color: white;
}
</style>
