<template>
  <div class="contact-us">
    <h2 class="mb-4">Contact Us</h2>
    <form @submit.prevent="submit">
      <div class="userName">
        <v-text-field
            v-model="name.value.value"
            :error-messages="name.errorMessage.value"
            type="text"
            label="Name"
            typevariant="underlined"
        ></v-text-field>
      </div>
      <div class="phone pb-4">
        <vue-tel-input
            v-model="phone.value.value"
            v-on:country-changed="countryChanged"
            :error-messages="phone.errorMessage.value"
        ></vue-tel-input>
        <div>
          {{name.errorMessage.value}}
        </div>
      </div>
      <v-btn
          class="me-4"
          type="submit"
          color="black"
          text="Submit"
      >
        plan overview
      </v-btn>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/utils.scss';
@import 'assets/scss/variables.scss';
@import 'assets/scss/general.scss';
@import 'assets/scss/layout.scss';

.contact-us {
  width: 100%;
  height: auto;
  border-radius: $border-radius;
  border-color: $color-neutral-700;
  background-color: $color-neutral-100;
  padding: $size-3;
}
</style>

<script setup lang="ts">
import * as yup from "yup";
import {useField, useForm} from "vee-validate";

let dialCode: string;
const validationSchema = yup.object({
  name: yup.string().required().min(2).max(255),
  phone: yup.string().required(),
});

const { handleSubmit } = useForm({
  validationSchema,
})

const name = useField('name');
const phone = useField('phone');

const submit = handleSubmit(values => {
  console.log(dialCode);
  console.log(values);
})

const countryChanged = (country: {dialCode: string}) => {
  dialCode = country.dialCode;
}
</script>
