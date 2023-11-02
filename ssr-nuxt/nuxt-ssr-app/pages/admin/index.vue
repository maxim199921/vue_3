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
    <template v-for="(estate, index) in estates?.content">
      <v-card class="card">
        <v-img
            :src="estate.url || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
            class="align-end text-white card-img"
            height="200"
            width="400"
            cover
        >
          <v-card-title>{{ estate.name }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
          Number {{ index + 1 }}
        </v-card-subtitle>

        <v-card-text>
          <div class="description">{{ estate.description }}</div>

          <div class="price">price: {{ estate.price }}</div>
        </v-card-text>

        <v-card-actions>
          <NuxtLink :to="`/admin/edit?id=${estate.id}`">
            <v-btn color="orange">
              Edit
            </v-btn>
          </NuxtLink>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>

<script setup lang="ts">
import {DBPathHelper} from "~/services/db-helper";
import {IEstate} from "~/models/estate";

definePageMeta({
  layout: 'admin'
})

const runtimeConfig = useRuntimeConfig();
const snackbar = await useSnackbar();
const path = DBPathHelper.getEstatesPath(runtimeConfig.public.apiHost);
const {data: estates, error} = await useFetch<{content: IEstate[]}>(path);

if (error.value) {
  snackbar.add({
    type: 'error',
    text: 'An error has occurred, failed to fetch estates'
  })
}
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
