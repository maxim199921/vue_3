<template>
  <div class="test">
    <h1 v-on:click="changeMessages('mess changed')">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'test-component',
  props: {
    msg: {
      type: String,
      required: false,
      default: 'message'
    }
  },
  emits: ['change-messages'],
  methods: {
    changeMessages (value: string) {
      this.$emit('change-messages', value)
    }
  }
})
</script>
