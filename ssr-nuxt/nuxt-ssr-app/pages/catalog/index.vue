<template>
  <div class="filters">
    <the-main-filters
        @filtersData="updateFiltersData($event)"
    ></the-main-filters>
  </div>
  <div class="wrapper">
    <template v-for="(estate, index) in state.items">
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
import {FiltersEstate} from "~/models/filters";
import {reactive} from 'vue'
import {cloneDeep} from "lodash";

const runtimeConfig = useRuntimeConfig();
const path = DBPathHelper.getSearchEstatesPath(runtimeConfig.public.apiHost);
const state = reactive({items: [] as IEstate[]});
const cookieFilters = useCookie<FiltersEstate>('filters');
const snackbar = useSnackbar();

const getEstates = async (filters?: FiltersEstate) => {
  const filtersData = filters
      || cloneDeep(cookieFilters.value)
      || new FiltersEstate();

  //TODO get estates from store;
  const {data, error} = await useFetch<IEstate[]>(path, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      ...filtersData
    },
  })

  state.items = cloneDeep(data.value) as IEstate[];

  if (error.value) {
    snackbar.add({
      type: 'error',
      text: 'An error has occurred, failed to fetch estates'
    })
  }
}

const updateFiltersData = (data: FiltersEstate) => {
  cookieFilters.value = data;
  getEstates(data);
}

await getEstates();
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
