<template>
  <v-carousel class="carousel" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ]"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup>
import {DBPathHelper} from "~/services/db-helper";

const runtimeConfig = useRuntimeConfig();

console.log(DBPathHelper.getCatalogPath(runtimeConfig.public.apiHost));
</script>

<style lang="scss">
@import 'assets/scss/general.scss';

.carousel {
  border-radius: $border-radius;
}
</style>
