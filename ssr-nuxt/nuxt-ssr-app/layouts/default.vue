<template>
    <div class="container">
        <div class="header-container">
          <TheHeader />
        </div>

        <section class="main-content">
          <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
          <NuxtPage />
        </section>

      <TheFooter />
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/scss/variables.scss';
@import 'assets/scss/layout.scss';

.container {
  color: $color-neutral;
  height: 100%;

  .header-container {
    padding: $size-4 $size-4 0;
    width: 100%;
    position: fixed;
    z-index: 1;
    background: $color-neutral-400;
  }

  .main-content {
    padding: $size-2 $size-4 $size-6;
  }

  .router-link-active {
    color: $color-neutral-100;
  }
}
</style>
