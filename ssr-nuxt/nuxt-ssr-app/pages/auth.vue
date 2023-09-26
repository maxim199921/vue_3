<template>
  <h1>Login</h1>

  <div class="wrapper">
    <v-sheet class="mx-auto form">
      <form @submit.prevent="submit">
        <div class="userName">
          <v-text-field
              v-model="userName.value.value"
              :error-messages="userName.errorMessage.value"
              type="text"
              label="User name"
              typevariant="underlined"
          ></v-text-field>
        </div>
        <div class="password">
          <v-text-field
              v-model="password.value.value"
              :error-messages="password.errorMessage.value"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              label="Password"
              typevariant="underlined"
              @click:append="showPass = !showPass"
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

<script setup>
import * as yup from "yup";
import { ref } from 'vue'
import { getCharacterValidationError, passwordMinText } from "~/constants/form";
import { useField, useForm } from "vee-validate";

definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
})

const showPass = ref(false);
const validationSchema = yup.object({
  userName: yup.string().required().min(6).max(255),
  password: yup.string().required()
      .min(8,  passwordMinText)
      .max(30)
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
});

const { handleSubmit } = useForm({
  validationSchema,
})

const userName = useField('userName');
const password = useField('password');

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
