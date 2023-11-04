<template>
  <div class="basic-filters">
    <form class="form d-flex-center-between">
      <div class="square">
        <v-text-field
            v-model="squareF.value.value"
            type="number"
            label="Square From"
            typevariant="underlined"
            :error-messages="squareF.errorMessage.value"
            @change="onChangeForm()"
        ></v-text-field>
        <v-text-field
            v-model="squareT.value.value"
            type="number"
            label="Square To"
            typevariant="underlined"
            :error-messages="squareT.errorMessage.value"
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
            :error-messages="priceF.errorMessage.value"
            @change="onChangeForm()"
        ></v-text-field>
        <v-text-field
            v-model="priceT.value.value"
            type="number"
            label="Price To"
            typevariant="underlined"
            :error-messages="priceT.errorMessage.value"
            @change="onChangeForm()"
        ></v-text-field>
      </div>
      <div class="floor">
        <v-text-field
            v-model="floorF.value.value"
            type="number"
            label="Floor From"
            typevariant="underlined"
            :error-messages="floorF.errorMessage.value"
            @change="onChangeForm()"
        ></v-text-field>
        <v-text-field
            v-model="floorT.value.value"
            type="number"
            label="Floor To"
            typevariant="underlined"
            :error-messages="floorT.errorMessage.value"
            @change="onChangeForm()"
        ></v-text-field>
      </div>
      <div class="bedroom">
        <v-text-field
            v-model="bedroomF.value.value"
            type="number"
            label="Bedroom From"
            typevariant="underlined"
            :error-messages="bedroomF.errorMessage.value"
            @change="onChangeForm()"
        ></v-text-field>
        <v-text-field
            v-model="bedroomT.value.value"
            type="number"
            label="Bedroom To"
            typevariant="underlined"
            :error-messages="bedroomT.errorMessage.value"
            @change="onChangeForm()"
        ></v-text-field>
      </div>
      <div class="bathroom">
        <v-text-field
            v-model="bathroomF.value.value"
            type="number"
            label="Bathroom From"
            typevariant="underlined"
            :error-messages="bathroomF.errorMessage.value"
            @change="onChangeForm()"
        ></v-text-field>
        <v-text-field
            v-model="bathroomT.value.value"
            type="number"
            label="Bathroom To"
            typevariant="underlined"
            :error-messages="bathroomT.errorMessage.value"
            @change="onChangeForm()"
        ></v-text-field>
      </div>
      <div class="city">
        <v-select
            multiple
            v-model="cities.value.value"
            item-title="value"
            item-value="key"
            label="City"
            :items="cityItems"
            @update:modelValue="onChangeForm()"
        ></v-select>
      </div>
      <div class="type-of-finish">
        <v-select
            multiple
            v-model="finishingTypes.value.value"
            item-title="value"
            item-value="key"
            label="Type of finish"
            :items="finishingTypesItems"
            @update:modelValue="onChangeForm()"
        ></v-select>
      </div>
      <div class="objects-type">
        <v-select
            multiple
            v-model="types.value.value"
            item-title="value"
            item-value="key"
            label="Objects type"
            :items="getTypesItemsLocale(typesItems, $t)"
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
import {getTypesItemsLocale} from "~/services/utils";
import {typesItemsArray} from "~/models/estateTypes";
import {defineEmits, ref, toRaw} from "vue";
import {checkOptionalField, lessThanError, moreThanError} from "~/constants/form";

const cityItems = ref(cityItemsArray);
const finishingTypesItems = ref(finishingTypesItemsArray);
const typesItems = ref(typesItemsArray);

const cookieFilters = useCookie<FiltersEstate>('filters');

const emit = defineEmits(['filtersData']);

const validationSchema = yup.object({
  currency: yup.string(),
  squareF: yup.number().nullable().transform(checkOptionalField).integer().positive().max(1000)
      .when('squareT', (squareT, schema) => {
        if (+squareT) {
          return schema.lessThan(+squareT, lessThanError('squareTo', 'squareFrom'))
        }
        return schema
      }),
  squareT: yup.number().nullable().transform(checkOptionalField).positive().max(1000)
      .moreThan(yup.ref('squareF'), moreThanError('squareTo', 'squareFrom')),
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
  bathroomF: yup.number().nullable().transform(checkOptionalField).positive().max(5)
      .when('bathroomT', (bathroomT, schema) => {
        if (+bathroomT) {
          return schema.lessThan(+bathroomT, lessThanError('bathroomTo', 'bathroomFrom'))
        }
        return schema
      }),
  bathroomT: yup.number().nullable().transform(checkOptionalField).positive().max(5)
      .moreThan(yup.ref('bathroomF'), moreThanError('bathroomTo', 'bathroomFrom')),
  cities: yup.array(),
  finishingTypes: yup.array(),
  types: yup.array(),
});

const {handleSubmit, resetForm, values, errors} = useForm({
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

const filterInitialValues = toRaw(cookieFilters.value);

if (filterInitialValues) {
  resetForm({
    values: {
      ...filterInitialValues
    }
  })
}

const onChangeForm = () => {
  const getFilterData = new FiltersEstate((toRaw(values)) as IFiltersEstate);

  if (!Object.keys(errors.value).length) {
    emit('filtersData', getFilterData);
  }
}

</script>
