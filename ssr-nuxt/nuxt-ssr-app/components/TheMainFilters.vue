<template>
  <div class="basic-filters">
    <form class="form d-flex-center-between" @submit.prevent="submit">
      <div class="square">
        <v-text-field
            v-model="squareFrom.value.value"
            type="number"
            label="Square From"
            typevariant="underlined"
        ></v-text-field>
        <v-text-field
            v-model="squareTo.value.value"
            type="number"
            label="Square To"
            typevariant="underlined"
        ></v-text-field>
      </div>
      <div class="price">
        <v-select
            v-model="currency.value.value"
            label="Currency"
            :items="['Dollar US', 'EURO', 'GEL']"
        ></v-select>
        <v-text-field
            v-model="priceFrom.value.value"
            type="number"
            label="Price From"
            typevariant="underlined"
        ></v-text-field>
        <v-text-field
            v-model="priceTo.value.value"
            type="number"
            label="Price To"
            typevariant="underlined"
        ></v-text-field>
      </div>
      <div class="floor">
        <v-text-field
            v-model="floorFrom.value.value"
            type="number"
            label="Floor From"
            typevariant="underlined"
        ></v-text-field>
        <v-text-field
            v-model="floorTo.value.value"
            type="number"
            label="Floor To"
            typevariant="underlined"
        ></v-text-field>
      </div>
      <div class="bedroom">
        <v-select
            multiple
            v-model="bedroom.value.value"
            label="Bedroom"
            :items="[1, 2, 3]"
        ></v-select>
      </div>
      <div class="bathroom">
        <v-select
            multiple
            v-model="bathroom.value.value"
            label="Bathroom"
            :items="[1, 2, 3]"
        ></v-select>
      </div>
      <div class="city">
        <v-select
            multiple
            v-model="city.value.value"
            label="City"
            :items="['Batumi', 'Tbilisi']"
        ></v-select>
      </div>
      <div class="type-of-finish">
        <v-select
            multiple
            v-model="typeOfFinish.value.value"
            label="Type of finish"
            :items="['white frame', 'black frame', 'green frame', 'turnkey finishing']"
        ></v-select>
      </div>
      <div class="objects-type">
        <v-select
            multiple
            v-model="objectsType.value.value"
            label="Objects type"
            :items="['Townhouse', 'Houses', 'Apartments']"
        ></v-select>
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
.square,
.bedroom,
.bathroom,
.price,
.city,
.objects-type,
.type-of-finish {
  min-width: 200px;
  display: flex;
}

.form {
  flex-wrap: wrap;
}
</style>

<script setup lang="ts">
import * as yup from "yup";
import { useField, useForm } from "vee-validate";

const validationSchema = yup.object({
  currency: yup.string(),
  squareFrom: yup.number(),
  squareTo: yup.number(),
  priceFrom: yup.number(),
  priceTo: yup.number(),
  floorFrom: yup.number(),
  floorTo: yup.number(),
  bedroom: yup.array(),
  bathroom: yup.array(),
  city: yup.array(),
  typeOfFinish: yup.array(),
  objectsType: yup.array(),
});

const { handleSubmit } = useForm({
  validationSchema,
})

const currency = useField('currency');
const squareFrom = useField('squareFrom');
const squareTo = useField('squareTo');
const priceFrom = useField('priceFrom');
const priceTo = useField('priceTo');
const floorFrom = useField('floorFrom');
const floorTo = useField('floorTo');
const bedroom = useField('bedroom');
const bathroom = useField('bathroom');
const city = useField('city');
const typeOfFinish = useField('typeOfFinish');
const objectsType = useField('objectsType');

const submit = handleSubmit(values => {
  console.log(values);
})
</script>
