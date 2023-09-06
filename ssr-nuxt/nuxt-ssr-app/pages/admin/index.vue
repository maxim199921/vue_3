<template>
  <div class="mb-24 d-flex">
    <NuxtLink to="/">
      <v-btn class="mr-8">
        Home
      </v-btn>
    </NuxtLink>
    <NuxtLink to="/admin/add">
      <v-btn>
        Add item
      </v-btn>
    </NuxtLink>
  </div>
  <div class="wrapper pb-40">
    <template v-for="(catalog, index) in catalogs">
      <v-card class="card">
        <v-img
            :src="catalog.url"
            class="align-end text-white card-img"
            height="200"
            width="400"
            cover
        >
          <v-card-title>{{ catalog.name }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
          Number {{ index + 1 }}
        </v-card-subtitle>

        <v-card-text>
          <div class="description">{{ catalog.description }}</div>

          <div class="price">price: {{ catalog.price }}</div>
        </v-card-text>

        <v-card-actions>
          <NuxtLink to="/admin/edit">
            <v-btn color="orange">
              Edit
            </v-btn>
          </NuxtLink>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})
const {data: catalogs} = useAsyncData('catalog', () => $fetch('/api/catalog'));
</script>

<style scoped lang="scss">
@import 'assets/scss/general';

.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: stretch;

  .card {
    border-radius: $border-radius;
  }
}
</style>