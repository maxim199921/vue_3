<template>
  <NuxtLink to="/admin">
    <v-btn>
      Back
    </v-btn>
  </NuxtLink>

  <div class="wrapper">
    <v-sheet class="mx-auto form">
      <form @submit.prevent="submit">
        <div class="file">
          <v-file-input
              multiple
              v-model="images.value.value"
              :error-messages="images.errorMessage.value"
              accept="image/png, image/jpeg, image/bmp"
              label="File input"
              prepend-icon="mdi-camera"
          ></v-file-input>
        </div>
        <div class="name">
          <v-text-field
              v-model="name.value.value"
              :counter="255"
              :error-messages="name.errorMessage.value"
              type="text"
              label="Name"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="description">
          <v-text-field
              v-model="description.value.value"
              :counter="255"
              :error-messages="description.errorMessage.value"
              type="text"
              label="Description"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="square">
          <v-text-field
              v-model="square.value.value"
              :error-messages="square.errorMessage.value"
              type="number"
              label="Square, м²"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="price">
          <v-text-field
              v-model="price.value.value"
              :error-messages="price.errorMessage.value"
              type="number"
              label="Price, $"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="floor">
          <v-select
              v-model="floor.value.value"
              :error-messages="floor.errorMessage.value"
              label="Floor"
              :items="[1, 2, 3]"
          ></v-select>
        </div>
        <div class="bedrooms">
          <v-select
              v-model="bedroom.value.value"
              :error-messages="bedroom.errorMessage.value"
              label="Bedrooms"
              :items="[1, 2, 3]"
          ></v-select>
        </div>
        <div class="bathrooms">
          <v-select
              v-model="bathroom.value.value"
              :error-messages="bathroom.errorMessage.value"
              label="Bathrooms"
              :items="[1, 2, 3]"
          ></v-select>
        </div>
        <div class="city">
          <v-select
              v-model="city.value.value"
              item-title="value"
              item-value="key"
              label="City"
              :items="cityItems"
              :error-messages="city.errorMessage.value"
          ></v-select>
        </div>
        <div class="address">
          <v-text-field
              v-model="address.value.value"
              type="text"
              label="Address"
              typevariant="underlined"
              :error-messages="address.errorMessage.value"
          ></v-text-field>
        </div>
        <div class="type-of-finish">
          <v-select
              multiple
              data-vv-rules="required"
              v-model="finishingTypes.value.value"
              item-title="value"
              item-value="key"
              label="Type of finish"
              :items="finishingTypesItems"
              :error-messages="finishingTypes.errorMessage.value"
          ></v-select>
        </div>
        <div class="objects-type">
          <v-select
              v-model="type.value.value"
              item-title="value"
              item-value="key"
              label="Object Type"
              :items="typesItems"
              :error-messages="type.errorMessage.value"
          ></v-select>
        </div>
        <div class="google-maps w-100">
          <the-google-map-coordinates
              :latitude="latitudeValue"
              :longitude="longitudeValue"
              @coordinates="setCoordinates($event)"
          >
          </the-google-map-coordinates>
        </div>
        <div class="latitude">
          <v-text-field
              v-model="latitude.value.value"
              :error-messages="latitude.errorMessage.value"
              type="number"
              label="Latitude"
              typevariant="underlined"
              disabled
          ></v-text-field>
        </div>
        <div class="longitude">
          <v-text-field
              v-model="longitude.value.value"
              :error-messages="longitude.errorMessage.value"
              type="number"
              label="Longitude"
              typevariant="underlined"
              disabled
          ></v-text-field>
        </div>

        <v-btn
            class="me-4"
            type="submit"
            color="black"
            text="Submit"
        >
          submit
        </v-btn>
      </form>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup';
import {maxFileSize, maxFileSizeError, requiredError} from '~/constants/form';
import {serializeNonPOJOs, validateFileArray} from '~/services/utils';
import {DBPathHelper} from "~/services/db-helper";
import {Estate, IEstate} from "~/models/estate";
import {ref} from "vue";
import {cityItemsArray} from "~/models/city";
import {finishingTypesItemsArray} from "~/models/finishingTypes";
import {typesItemsArray} from "~/models/estateTypes";
import {reactive} from "vue";

definePageMeta({
  layout: 'admin'
})

const cityItems = ref(cityItemsArray);
const finishingTypesItems = ref(finishingTypesItemsArray);
const typesItems = ref(typesItemsArray);

const snackbar = useSnackbar();
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const validationSchema = yup.object({
  images: yup.array().nullable().required().test('is-valid-size', maxFileSizeError,
      fileItems => validateFileArray(fileItems, maxFileSize)
  ),
  name: yup.string().required().min(2).max(255),
  description: yup.string().required().max(255),
  square: yup.number().required().max(10000),
  price: yup.number().required().max(1000000),
  floor: yup.mixed().required(),
  bedroom: yup.mixed().required(),
  bathroom: yup.mixed().required(),
  city: yup.mixed().required(),
  address: yup.string().required().min(5).max(255),
  latitude: yup.number().required().min(-90).max(90),
  longitude: yup.number().required().min(-180).max(180),
  finishingTypes: yup.array().required().test('is-required', requiredError('finishingTypes'), items => items.length !== 0),
  type: yup.mixed().required(),
});

const {handleSubmit, resetForm} = useForm({
  validationSchema,
})

const name = useField('name');
const images = useField('images');
const description = useField('description');
const square = useField('square');
const price = useField('price');
const floor = useField('floor');
const bedroom = useField('bedroom');
const bathroom = useField('bathroom');
const city = useField('city');
const address = useField('address');
const latitude = useField('latitude');
const longitude = useField('longitude');
const finishingTypes = useField('finishingTypes');
const type = useField('type');

const path = DBPathHelper.getEstatesPath(runtimeConfig.public.apiHost, route.query.id as string);
const {data: estate, error} = await useFetch<IEstate>(path);
//TODO add common loader;

if (error.value) {
  snackbar.add({
    type: 'error',
    text: 'An error has occurred, failed to fetch estate'
  })
}

const latitudeValue = ref(0);
const longitudeValue = ref(0);

if (estate.value) {
  const estateValues = serializeNonPOJOs(estate.value);
  latitudeValue.value = +estateValues.latitude;
  longitudeValue.value = +estateValues.longitude;
  resetForm({values: {...estateValues}})
}

const submit = handleSubmit(async values => {
  //TODO add common loader;

  const estate = new Estate(values as IEstate);
  const path = DBPathHelper.getEstatesPath(runtimeConfig.public.apiHost);
  const {data, error} = await useFetch(path, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      ...estate,
      id: route.query.id
    }
  })

  if (error.value) {
    snackbar.add({
      type: 'error',
      text: 'An error has occurred, estate not saved'
    })
  }

  if (data.value) {
    snackbar.add({
      type: 'success',
      text: `Estate successfully updated`
    })
  }
})

const setCoordinates = ({lat, lng}: { lat: number, lng: number }) => {
  latitude.setValue(lat);
  longitude.setValue(lng);
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
