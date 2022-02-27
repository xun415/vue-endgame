<template>
	<li>
		<div class="post-title">{{ postItem.title }}</div>
		<div class="post-contents">{{ postItem.contents }}</div>
		<div class="post-time">
			{{ postItem.createdAt | formatDate }}
			<i class="icon ion-md-create" @click="routeEditPage"></i>
			<i class="icon ion-md-trash" @click="deleteItem"></i>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
	name: 'PostListItem',
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	filters: {},
	methods: {
		routeEditPage() {
			const id = this.postItem._id;
			this.$router.push(`/post/${id}`);
		},
		async deleteItem() {
			if (confirm('want to delete the post?')) {
				await deletePost(this.postItem._id);
				console.log('deleted');
				this.$emit('refresh');
			}
		},
	},
};
</script>

<style scoped></style>
