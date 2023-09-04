<template>
  <header class="header">
    <div class="nav">
      <div>
        <li>
          <NuxtLink to="/">logo</NuxtLink>
        </li>
      </div>

      <ul>
        <li>
          <NuxtLink to="/">home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/catalog">catalog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="about">about</NuxtLink>
        </li>
        <li>
          <NuxtLink to="terms">terms</NuxtLink>
        </li>
        <li class="ml-40">
          <NuxtLink to="auth">auth</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import 'assets/scss/utils.scss';
@import 'assets/scss/variables.scss';

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
    padding-left: 10px;
    color: $color-neutral-100;
  }

  a {
    color: $color-neutral-100;
  }
}
</style>

