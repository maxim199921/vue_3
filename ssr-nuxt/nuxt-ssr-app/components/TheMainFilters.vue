<template>
  <div class="basic-filters">
    <form class="form d-flex-center-between" @submit.prevent="submit" ref="myForm">
      <div class="square">
        <v-text-field
            v-model="squareF.value.value"
            type="number"
            label="Square From"
            typevariant="underlined"
            @change="onChangeForm()"
        ></v-text-field>
        <v-text-field
            v-model="squareT.value.value"
            type="number"
            label="Square To"
            typevariant="underlined"
            @change="onChangeForm()"
        ></v-text-field>
      </div>
      <div class="price">
        <v-select
            v-model="currency.value.value"
            label="Currency"
            :items="['Dollar US', 'EURO', 'GEL']"
            @change="onChangeForm()"
        ></v-select>
        <v-text-field
            v-model="priceF.value.value"
            type="number"
            label="Price From"
            typevariant="underlined"
            @change="onChangeForm()"
        ></v-text-field>
        <v-text-field
            v-model="priceT.value.value"
            type="number"
            label="Price To"
            typevariant="underlined"
            @change="onChangeForm()"
        ></v-text-field>
      </div>
      <div class="floor">
        <v-text-field
            v-model="floorF.value.value"
            type="number"
            label="Floor From"
            typevariant="underlined"
            @change="onChangeForm()"
        ></v-text-field>
        <v-text-field
            v-model="floorT.value.value"
            type="number"
            label="Floor To"
            typevariant="underlined"
            @change="onChangeForm()"
        ></v-text-field>
      </div>
      <div class="bedroom">
        <v-text-field
            v-model="bedroomF.value.value"
            type="number"
            label="Bedroom From"
            typevariant="underlined"
            @change="onChangeForm()"
        ></v-text-field>
        <v-text-field
            v-model="bedroomT.value.value"
            type="number"
            label="Bedroom To"
            typevariant="underlined"
            @change="onChangeForm()"
        ></v-text-field>
      </div>
      <div class="bathroom">
        <v-text-field
            v-model="bathroomF.value.value"
            type="number"
            label="Bathroom From"
            typevariant="underlined"
            @change="onChangeForm()"
        ></v-text-field>
        <v-text-field
            v-model="bathroomT.value.value"
            type="number"
            label="Bathroom To"
            typevariant="underlined"
            @change="onChangeForm()"
        ></v-text-field>
      </div>
      <div class="city">
        <v-select
            multiple
            v-model="cities.value.value"
            label="City"
            :items="cityItems"
            @update:modelValue="onChangeForm()"
        ></v-select>
      </div>
      <div class="type-of-finish">
        <v-select
            multiple
            v-model="finishingTypes.value.value"
            label="Type of finish"
            :items="finishingTypesItems"
            @update:modelValue="onChangeForm()"
        ></v-select>
      </div>
      <div class="objects-type">
        <v-select
            multiple
            v-model="types.value.value"
            label="Objects type"
            :items="typesItems"
            @update:modelValue="onChangeForm()"
        ></v-select>
      </div>
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
import {useField, useForm} from "vee-validate";
import {cityItemsArray} from "~/models/city";
import {finishingTypesItemsArray} from "~/models/finishingTypes";
import {FiltersEstate, IFiltersEstate} from "~/models/filters";
import {cloneDeep} from "lodash";
import {typesItemsArray} from "~/models/estateTypes";
import {defineEmits} from "vue/dist/vue";

const cityItems = ref(cityItemsArray);
const finishingTypesItems = ref(finishingTypesItemsArray);
const typesItems = ref(typesItemsArray);

const emit = defineEmits(['filtersData']);

const validationSchema = yup.object({
  currency: yup.string(),
  squareF: yup.number(),
  squareT: yup.number(),
  priceF: yup.number(),
  priceT: yup.number(),
  floorF: yup.number(),
  floorT: yup.number(),
  bedroomF: yup.number(),
  bedroomT: yup.number(),
  bathroomF: yup.number(),
  bathroomT: yup.number(),
  cities: yup.array(),
  finishingTypes: yup.array(),
  types: yup.array(),
});

const {handleSubmit, values} = useForm({
  validationSchema,
})

const currency = useField('currency');
const squareF = useField('squareF');
const squareT = useField('squareT');
const priceF = useField('priceF');
const priceT = useField('priceT');
const floorF = useField('floorF');
const floorT = useField('floorT');
const bedroomF = useField('bedroomF');
const bedroomT = useField('bedroomT');
const bathroomF = useField('bathroomF');
const bathroomT = useField('bathroomT');
const cities = useField('cities');
const finishingTypes = useField('finishingTypes');
const types = useField('types');

const onChangeForm = () => {
  const getFilterData = new FiltersEstate((cloneDeep(values)) as IFiltersEstate);

  emit('filtersData', getFilterData);
}
</script>
