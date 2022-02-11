<template>
    <div>
        <h1>Home page</h1>
        <h2>VITE_API_KEY : {{ api_key }}</h2>
        <p>defined in .env (should be overrided in .env.local)</p>
        <h2>Example store contains counter = {{ store.counter }}</h2>
        <button @click="store.counter++">Increment counter</button>&nbsp;
        <button @click="store.counter--">Decrement counter</button>
    </div>
</template>
<route lang="yaml">
name: home
meta:
    requiresAuth: false
</route>
<script setup>
import { useCounter } from '../store/useCounter'

const api_key = process.env.VITE_API_KEY
const store = useCounter()
</script>