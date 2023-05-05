<template>
	<q-layout view="hHh lpR fFf">
		<router-view v-slot="{ Component, route }">
			<component :is="Component" :key="route" />
		</router-view>
	</q-layout>
  </template>
<script setup>
useHead({
  title: process.env.VITE_SITE_TITLE,
  meta: [
    { name: 'description', content: process.env.VITE_SITE_DESCRIPTION },
  ],
})
</script>
