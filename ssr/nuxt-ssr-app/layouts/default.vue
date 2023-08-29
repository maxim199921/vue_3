<template>
    <div class="container">
        <TheHeader />

        <section class="main-content">
            <NuxtPage />
        </section>

        <TheFooter />
    </div>
</template>

<style lang="scss">
@import 'assets/scss/variables.scss';

.container {
    color: $color-neutral;
}

.router-link-active {
    color: $color-text;
}
</style>
