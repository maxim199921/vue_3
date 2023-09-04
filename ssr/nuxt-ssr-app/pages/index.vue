<template>
    <h1>Home page</h1>
</template>

<script setup>
import {DBPathHelper} from "~/services/db-helper";

const runtimeConfig = useRuntimeConfig();

console.log(DBPathHelper.getCatalogPath(runtimeConfig.public.apiHost));
</script>
