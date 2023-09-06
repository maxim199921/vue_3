<template>
  <NuxtLink to="/admin">
    <v-btn>
      Back
    </v-btn>
  </NuxtLink>
  <div class="wrapper">
    <v-sheet class="mx-auto form">
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <div class="file">
          <v-file-input
              multiple
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              label="File input"
              prepend-icon="mdi-camera"
          ></v-file-input>
        </div>
        <div class="name">
          <v-text-field
              type="text"
              label="name"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="description">
          <v-text-field
              type="text"
              label="description"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="square">
          <v-text-field
              type="number"
              label="square, м²"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="price">
          <v-text-field
              type="number"
              label="price, $"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="floor">
          <v-select
              label="Floor"
              :items="[1, 2, 3]"
          ></v-select>
        </div>
        <div class="bedrooms">
          <v-select
              label="Bedrooms"
              :items="[1, 2, 3]"
          ></v-select>
        </div>
        <div class="bathrooms">
          <v-select
              label="Bathrooms"
              :items="[1, 2, 3]"
          ></v-select>
        </div>

        <v-btn
            :loading="loading"
            type="submit"
            color="black"
            block
            class="mt-2"
            text="Submit"
        ></v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
definePageMeta({
  layout: 'admin'
})

export default {
  data: vm => ({
    loading: false,
  }),

  methods: {
    async submit(event) {
      this.loading = true
    },
  },
}
</script>

<style scoped lang="scss">
@import 'assets/scss/general.scss';
@import 'assets/scss/layout.scss';
@import 'assets/scss/variables.scss';

.wrapper {
  width: 600px;
  margin: 0 auto;
}

.form {
  padding: $size-3;
  background: $color-neutral-400;;
}
</style>
