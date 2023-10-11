<template>
  <div class="pb-32">
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
  </div>

  <div class="pb-32">
    <the-basic-filters></the-basic-filters>
  </div>

  <div class="contacts">
    <the-contact-us></the-contact-us>
  </div>
</template>

<script setup lang="ts">
import {DBPathHelper} from "~/services/db-helper";

const runtimeConfig = useRuntimeConfig();

console.log(DBPathHelper.getEstatesPath(runtimeConfig.public.apiHost));
</script>

<style scoped lang="scss">
@import 'assets/scss/general.scss';

.carousel {
  border-radius: $border-radius;
}

.contacts {
  width: 300px;
}
</style>
