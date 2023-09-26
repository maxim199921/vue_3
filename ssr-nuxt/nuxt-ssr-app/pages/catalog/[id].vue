<template>
    <h1>Catalog item</h1>
    <div>{{route.params.id}}</div>

    <div class="contacts">
      <the-contact-us></the-contact-us>
    </div>
</template>

<script setup>
    const route = useRoute();
</script>

<style scoped lang="scss">
.contacts {
  width: 300px;
}
</style>
