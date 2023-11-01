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
              :counter="10"
              :error-messages="name.errorMessage.value"
              type="text"
              label="Name"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="description">
          <v-text-field
              v-model="description.value.value"
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
              :error-messages="city.errorMessage.value"
              label="City"
              :items="['Batumi', 'Tbilisi']"
          ></v-select>
        </div>
        <div class="address">
          <v-text-field
              v-model="address.value.value"
              :error-messages="address.errorMessage.value"
              type="text"
              label="Name"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="latitude">
          <v-text-field
              v-model="latitude.value.value"
              :error-messages="latitude.errorMessage.value"
              type="number"
              label="Latitude"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="longitude">
          <v-text-field
              v-model="longitude.value.value"
              :error-messages="longitude.errorMessage.value"
              type="number"
              label="Longitude"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="type-of-finish">
          <v-select
              multiple
              data-vv-rules="required"
              v-model="finishingTypes.value.value"
              :error-messages="finishingTypes.errorMessage.value"
              label="Type of finish"
              :items="['WHITE_FRAME', 'BLACK_FRAME', 'GREEN_FRAME']"
          ></v-select>
        </div>
        <div class="objects-type">
          <v-select
              v-model="type.value.value"
              :error-messages="type.errorMessage.value"
              label="Object Type"
              :items="['Townhouse', 'Houses', 'Apartments']"
          ></v-select>
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
import {IEstate} from "~/models/estate";

definePageMeta({
  layout: 'admin'
})

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

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const path = DBPathHelper.getEstatesPath(runtimeConfig.public.apiHost, route.query.id as string);
const {data: estate, error} = await useFetch<IEstate>(path);

if (error.value) {
  //TODO add error notification
  console.log(error.value.data)
}

if (estate.value) {
  const estateValues = serializeNonPOJOs(estate.value);
  resetForm({values: {...estateValues}})
}

const submit = handleSubmit(values => {
  console.log(values);
  //TODO send request with form data, reset form, add tooltip;
})

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
