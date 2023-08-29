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

<style scoped>
    .nav {
        display: flex;
        justify-content: space-between;
    }

    li {
        list-style-type: none;
        padding-left: 10px;
    }

    ul {
        display: flex;
        padding: 0;
        margin: 0;
    }
</style>
<script setup lang="ts">
</script>
