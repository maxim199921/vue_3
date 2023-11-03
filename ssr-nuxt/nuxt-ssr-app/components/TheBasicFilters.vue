<template>
  <div class="basic-filters">
    <form class="d-flex-center-between" @submit.prevent="submit">
      <div class="floor">
        <v-text-field
            v-model="floorF.value.value"
            type="number"
            label="Floor From"
            typevariant="underlined"
            :error-messages="floorF.errorMessage.value"
        ></v-text-field>
        <v-text-field
            v-model="floorT.value.value"
            type="number"
            label="Floor To"
            typevariant="underlined"
            :error-messages="floorT.errorMessage.value"
        ></v-text-field>
      </div>
      <div class="bedroom">
        <v-text-field
            v-model="bedroomF.value.value"
            type="number"
            label="Bedroom From"
            typevariant="underlined"
            :error-messages="bedroomF.errorMessage.value"
        ></v-text-field>
        <v-text-field
            v-model="bedroomT.value.value"
            type="number"
            label="Bedroom To"
            typevariant="underlined"
            :error-messages="bedroomT.errorMessage.value"
        ></v-text-field>
      </div>
      <div class="price">
        <v-select
            v-model="currency.value.value"
            label="Currency"
            :items="['Dollar US', 'EURO', 'GEL']"
        ></v-select>
        <v-text-field
            v-model="priceF.value.value"
            type="number"
            label="Price From"
            typevariant="underlined"
            :error-messages="priceF.errorMessage.value"
        ></v-text-field>
        <v-text-field
            v-model="priceT.value.value"
            type="number"
            label="Price To"
            typevariant="underlined"
            :error-messages="priceT.errorMessage.value"
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
import {useField, useForm} from "vee-validate";
import {checkOptionalField, lessThanError, moreThanError} from "~/constants/form";
import {FiltersEstate, IFiltersEstate} from "~/models/filters";

const cookieFilters = useCookie<FiltersEstate>('filters');

const validationSchema = yup.object({
  currency: yup.string(),
  priceF: yup.number().nullable().transform(checkOptionalField).positive().max(10000000)
      .when('priceT', (priceT, schema) => {
        if (+priceT) {
          return schema.lessThan(+priceT, lessThanError('priceTo', 'priceFrom'))
        }
        return schema
      }),
  priceT: yup.number().nullable().transform(checkOptionalField).positive().max(10000000)
      .moreThan(yup.ref('priceF'), moreThanError('priceTo', 'priceFrom')),
  floorF: yup.number().nullable().transform(checkOptionalField).positive().max(50)
      .when('floorT', (floorT, schema) => {
        if (+floorT) {
          return schema.lessThan(+floorT, lessThanError('floorTo', 'floorFrom'))
        }
        return schema
      }),
  floorT: yup.number().nullable().transform(checkOptionalField).positive().max(50)
      .moreThan(yup.ref('floorF'), moreThanError('floorTo', 'floorFrom')),
  bedroomF: yup.number().nullable().transform(checkOptionalField).positive().max(10)
      .when('bedroomT', (bedroomT, schema) => {
        if (+bedroomT) {
          return schema.lessThan(+bedroomT, lessThanError('bedroomTo', 'bedroomFrom'))
        }
        return schema
      }),
  bedroomT: yup.number().nullable().transform(checkOptionalField).positive().max(10)
      .moreThan(yup.ref('bedroomF'), moreThanError('bedroomTo', 'bedroomFrom')),
});

const { handleSubmit } = useForm({
  validationSchema,
})

const currency = useField('currency');
const priceF = useField('priceF');
const priceT = useField('priceT');
const floorF = useField('floorF');
const floorT = useField('floorT');
const bedroomF = useField('bedroomF');
const bedroomT = useField('bedroomT');

const submit = handleSubmit(values => {
  const getFilterData = new FiltersEstate(values as IFiltersEstate);
  cookieFilters.value = getFilterData;
  navigateTo('/catalog');
})
</script>
