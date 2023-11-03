<template>
  <div class="mb-24 d-flex">
    <NuxtLink to="/">
      <v-btn class="mr-8">
        Home
      </v-btn>
    </NuxtLink>
    <NuxtLink to="/admin/add">
      <v-btn>
        Add item
      </v-btn>
    </NuxtLink>
  </div>
  <div class="wrapper pb-40">
    <template v-for="(estate, index) in state?.items">
      <v-card class="card">
        <v-img
            :src="estate.url || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
            class="align-end text-white card-img"
            height="200"
            cover
        >
          <v-card-title>{{ estate.name }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
          Number {{ index + 1 }}
        </v-card-subtitle>

        <v-card-text>
          <div class="description">{{ estate.description }}</div>

          <div class="price">price: {{ estate.price }}</div>
        </v-card-text>

        <v-card-actions>
          <NuxtLink :to="`/admin/edit?id=${estate.id}`">
            <v-btn color="orange">
              Edit
            </v-btn>
          </NuxtLink>
          <v-btn
              color="red"
              @click="openDialog(estate.id)"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </div>

  <v-dialog
      v-model="dialog"
      persistent
      width="400"
  >
    <v-card>
      <v-card-title class="text-h5">
        Delete Estate
      </v-card-title>
      <v-card-text>Are you sure?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="green-darken-1"
            variant="text"
            @click="dialog = false"
        >
          Disagree
        </v-btn>
        <v-btn
            color="red"
            variant="text"
            @click="deleteEstate()"
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import {DBPathHelper} from "~/services/db-helper";
import {IEstate} from "~/models/estate";
import {reactive, ref, toRaw} from "vue";

definePageMeta({
  layout: 'admin'
})
let dialog = ref(false);
let estateId = ref('');
const state = reactive({items: [] as IEstate[]});

const runtimeConfig = useRuntimeConfig();
const snackbar = await useSnackbar();
const path = DBPathHelper.getEstatesPath(runtimeConfig.public.apiHost);
const {data, error} = await useFetch<{ content: IEstate[] }>(path);
state.items = (toRaw(data.value))?.content as IEstate[];

if (error.value) {
  snackbar.add({
    type: 'error',
    text: 'An error has occurred, failed to fetch estates'
  })
}

const deleteEstate = async () => {
  const id = toRaw(estateId.value);
  const path = DBPathHelper.getEstatesPath(runtimeConfig.public.apiHost, id);

  const {error} = await useFetch(path, {
    method: 'DELETE',
  })

  if (error.value) {
    snackbar.add({
      type: 'error',
      text: `An error has occurred, estate with id: ${id}`,
    })
  }

  if (!error.value) {
    state.items = state.items.filter(estate => estate.id !== id);
    snackbar.add({
      type: 'success',
      text: `Estate was successfully deleted`,
    })
  }

  dialog.value = false;
}

const openDialog = async (id: string) => {
  estateId.value = id;
  dialog.value = true;
}
</script>

<style scoped lang="scss">
@import 'assets/scss/general';

.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: stretch;

  .card {
    border-radius: $border-radius;
  }
}
</style>
