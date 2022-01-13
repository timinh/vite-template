<template>
    <div>
        <h1>Home page</h1>
        <h2>VITE_API_KEY : {{ api_key }}</h2>
        <p>defined in .env (should be overrided in .env.local)</p>
    </div>
</template>
<route lang="yaml">
name: home
meta:
    requiresAuth: false
</route>
<script setup>
const api_key = process.env.VITE_API_KEY
</script>