<template>
    <div class="container">
        <div class="header-container">
          <TheHeader />
        </div>

        <section class="main-content">
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

  .header-container {
    padding: $size-4 $size-4 0;
  }

  .main-content {
    padding: $size-3 $size-4;
  }

  .router-link-active {
    color: $color-neutral-100;
  }
}
</style>
