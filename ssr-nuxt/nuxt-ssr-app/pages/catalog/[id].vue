<template>
    <h1>Catalog item</h1>
    <div>{{route.params.id}}</div>
</template>

<script setup>
    const route = useRoute();
</script>
