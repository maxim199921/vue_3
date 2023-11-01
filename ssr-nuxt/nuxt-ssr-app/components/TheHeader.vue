<template>
  <header class="header">
    <div class="nav">
      <div class="pl-4">
        <NuxtLink to="/">
          <v-img
              src="logo.png"
              height="40"
              width="40"
              cover
          />
        </NuxtLink>
      </div>

      <ul>
        <li>
          <v-select
              v-model="i18n.value.value"
              :items="['en', 'ru', 'ge']"
              variant="outlined"
              density="compact"
              @update:modelValue="onChangeForm()"
              hide-details
          ></v-select>
        </li>
        <li>
          <NuxtLink to="catalog">
            <v-btn variant="plain">catalog</v-btn>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="about">
            <v-btn variant="plain">about</v-btn>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="terms">
            <v-btn variant="plain">terms</v-btn>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import 'assets/scss/utils.scss';
@import 'assets/scss/variables.scss';

.header {
  .nav {
    @extend .d-flex-center-between;

    height: 100%;
    width: 100%;
  }

  ul {
    display: flex;
    padding: 0;
    margin: 0;

    li {
      list-style-type: none;
      color: $color-neutral-100;
    }

    a {
      color: $color-neutral-100;
    }
  }

  select {
    color: $color-neutral-100;
  }
}
</style>
<script setup lang="ts">
import {useI18n} from "vue-i18n";
import * as yup from "yup";
import {useField, useForm} from "vee-validate";
import {cloneDeep} from "lodash";

const {locale} = useI18n();
const cookieI18n = useCookie<string>('i18n');
locale.value = cloneDeep(cookieI18n?.value);

const validationSchema = yup.object({
  i18n: yup.string(),
});

const {values} = useForm({
  validationSchema,
  initialValues: {i18n: cloneDeep(cookieI18n?.value) || 'en'}
})

const i18n = useField('i18n');

const onChangeForm = () => {
  locale.value = cloneDeep(values).i18n;
  cookieI18n.value = cloneDeep(values).i18n;
}
</script>
