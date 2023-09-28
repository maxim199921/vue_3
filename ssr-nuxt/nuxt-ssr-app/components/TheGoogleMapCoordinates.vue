<template>
  <GMapMap
      :center="center"
      :zoom="10"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
      @click='setCoordinates'
  >
  </GMapMap>
</template>


<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['coordinates'])
const center = ref({lat: 41.63196116119842, lng: 41.623328379664116});

const setCoordinates = (event: any) => {
  const lat = event.latLng.lat();
  const lng = event.latLng.lng();
  emit('coordinates', { lat, lng });
}
</script>
