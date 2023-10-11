<template>
  <div class="filters">
    <the-main-filters></the-main-filters>
  </div>
  <div class="wrapper">
    <template v-for="(estate, index) in estates">
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
          <NuxtLink :to="`/catalog/${estate.id}`">
            <v-btn color="orange">
              Explore
            </v-btn>
          </NuxtLink>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>

<script setup lang="ts">
import TheMainFilters from "~/components/TheMainFilters.vue";
import {DBPathHelper} from "~/services/db-helper";
import {IEstate} from "~/models/estate";

const runtimeConfig = useRuntimeConfig();
const path = DBPathHelper.getEstatesPath(runtimeConfig.public.apiHost);
const {data: estates, error} = await useFetch<IEstate[]>(path);

if (error.value) {
  //TODO add error notification
  console.log(error.value.data)
}
</script>

<style scoped lang="scss">
@import 'assets/scss/general.scss';

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
