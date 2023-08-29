<template>
    <h1>Auth page</h1>
</template>

<script setup>
    definePageMeta({
        layout: 'admin',
        middleware: ['auth'],
    })
</script>
