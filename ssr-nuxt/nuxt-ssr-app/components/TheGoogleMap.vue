<template>
  <div class="mb-20">
    <GMapMap
        :center="{lat: 51.093048, lng: 6.842120}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 50vw; height: 400px"
    >
    </GMapMap>
  </div>
</template>


<script lang="ts">
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
    }
  }
}
</script>
