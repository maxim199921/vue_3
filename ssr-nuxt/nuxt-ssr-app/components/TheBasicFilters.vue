<template>
  <div class="basic-filters">
    <form class="d-flex-center-between" @submit.prevent="submit">
      <div class="floor">
        <v-select
            v-model="floor.value.value"
            label="Floor"
            :items="[1, 2, 3]"
        ></v-select>
      </div>
      <div class="bedroom">
        <v-select
            v-model="bedroom.value.value"
            label="Bedroom"
            :items="[1, 2, 3]"
        ></v-select>
      </div>
      <div class="">
        <v-text-field
            v-model="price.value.value"
            type="number"
            label="Amount before"
            typevariant="underlined"
        ></v-text-field>
      </div>
      <v-btn
          class="me-4"
          type="submit"
          color="black"
          text="Submit"
      >
        search
      </v-btn>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/utils.scss';
@import 'assets/scss/variables.scss';
@import 'assets/scss/general.scss';
@import 'assets/scss/layout.scss';

.floor,
.bedroom,
.price {
  min-width: 200px;
}
</style>

<script setup lang="ts">
import * as yup from "yup";
import { useField, useForm } from "vee-validate";

const validationSchema = yup.object({
  floor: yup.mixed(),
  bedroom: yup.mixed(),
  price: yup.number(),
});

const { handleSubmit } = useForm({
  validationSchema,
})

const floor = useField('floor');
const bedroom = useField('bedroom');
const price = useField('price');

const submit = handleSubmit(values => {
  console.log(values);
})
</script>
