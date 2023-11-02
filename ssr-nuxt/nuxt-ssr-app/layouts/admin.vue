<template>
    <div class="container">
        <slot />
    </div>
  <NuxtSnackbar />
</template>

<style lang="scss" scoped>
@import 'assets/scss/variables.scss';
@import 'assets/scss/layout.scss';

.container {
  color: $color-neutral;
  padding: $size-4 $size-4 0;
  min-height: 100vh;
}
</style>
