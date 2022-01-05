<template>
  <router-view />
</template>
<script setup>
useHead({
  title: process.env.VITE_SITE_TITLE,
  meta: [
    { name: 'description', content: process.env.VITE_SITE_DESCRIPTION },
  ],
})
</script>
