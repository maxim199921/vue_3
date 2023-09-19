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
              v-model="$i18n.locale"
              :items="['en', 'ru', 'ge']"
              variant="outlined"
              density="compact"
              hide-details
          ></v-select>
        </li>
        <li>
          <NuxtLink to="catalog">
            <v-btn variant="plain">catalog</v-btn>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="maps">
            <v-btn variant="plain">map</v-btn>
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
</script>
