<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" :key="route" />
    </transition>
  </router-view>
</template>
<script setup>
useHead({
  title: process.env.VITE_SITE_TITLE,
  meta: [
    { name: 'description', content: process.env.VITE_SITE_DESCRIPTION },
  ],
})
</script>
