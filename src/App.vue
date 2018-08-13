<template>
  <div id="app">
    <!-- <Header/> -->
    <router-view/>
    <p>Hello</p>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
	components: {
		Header
	},
	name: 'App'
};
</script>

<style>
</style>
