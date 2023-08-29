<template>
    <h1>Catalog page</h1>
    <div v-for="(catalog, index) in catalogs" class="pt-20">
        <NuxtLink :to="`/catalog/${catalog.id}`">
            <b>{{ index + 1}}.</b>
            {{ catalog.name }}: {{ catalog.price }}
        </NuxtLink>
    </div>
</template>

<script setup>
    const { data : catalogs } = useAsyncData('catalog', () => $fetch('/api/catalog'));
</script>
