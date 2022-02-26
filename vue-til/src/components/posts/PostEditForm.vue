<template>
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
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
				<button class="btn" type="submit">edit</button>
			</form>
			<p class="log">
				{{ logMessage }}
			</p>
		</div>
	</div>
</template>

<script>
import { editPost, fetchPost } from '@/api/posts';

export default {
	name: 'PostEditForm',
	data() {
		return {
			id: '',
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	async created() {
		const id = this.$route.params.id;
		const { data } = await fetchPost(id);
		console.log(data);
		this.title = data.title;
		this.contents = data.contents;
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 250;
		},
	},
	methods: {
		async submitForm() {
			try {
				const id = this.$route.params.id;
				const response = await editPost(id, {
					title: this.title,
					contents: this.contents,
				});
				this.$router.push('/main');
			} catch (err) {
				console.log(err.response);
				// alert('수정 처리중 에러가 발생했습니다.');
				this.logMessage = err;
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
