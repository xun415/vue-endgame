<template>
	<div>
		<NavigationBar></NavigationBar>
		<SearchForm></SearchForm>
		<KeywordList></KeywordList>
		<ChanelGraphs></ChanelGraphs>
		<KeywordMap></KeywordMap>
	</div>
</template>

<script>
import NavigationBar from '@/components/analyze/NavigationBar';
import SearchForm from '@/components/analyze/SearchForm';
import KeywordList from '@/components/analyze/KeywordList';
import ChanelGraphs from '@/components/analyze/ChanelGraphs';
import KeywordMap from '@/components/analyze/KeywordMap';

export default {
	// name: 'Analyze',
	data() {
		return {};
	},
	components: {
		NavigationBar,
		SearchForm,
		KeywordList,
		ChanelGraphs,
		KeywordMap,
	},
	created() {
		console.log(this.$route.params);
	},
};
</script>

<style scoped></style>
