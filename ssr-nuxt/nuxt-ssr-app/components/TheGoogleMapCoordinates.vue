<template>
  <GMapMap
      :center="center"
      :zoom="10"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
      @click='setCoordinates'
  >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>


<script setup lang="ts">
import {defineEmits, ref, reactive} from 'vue'

const emit = defineEmits(['coordinates']);
const center = ref(
    {
      lat: 41.63196116119842,
      lng: 41.623328379664116
    }
);
let markers = reactive([
  {
    position: {
      lat: 41.63196116119842,
      lng: 41.623328379664116,
    },
  },
]);

const setCoordinates = (event: any) => {
  const lat = event.latLng.lat();
  const lng = event.latLng.lng();
  markers[0] = {
    position: {
      lat,
      lng,
    },
  };
  emit('coordinates', {lat, lng});
}
</script>
