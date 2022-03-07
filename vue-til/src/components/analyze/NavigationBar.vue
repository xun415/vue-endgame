<template>
  <div>
    <h1>네비바</h1>
    <router-link :to="'/analyze/essentialKeyword'">기본분석</router-link>
    <router-link :to="'/analyze/exclutionKeyword'" >제외키워드</router-link>
    <router-link :to="'/analyze/inclusionKeyword'">중요키워드</router-link>
  </div>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>

</style>