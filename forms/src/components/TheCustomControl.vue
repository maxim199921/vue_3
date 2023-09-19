<template>
  <div>
    <ul>
      <li>
        <button :class="{active: modelValue === 'poor'}" type="button" v-on:click="activate('poor')">poor</button>
        <button :class="{active: modelValue === 'average'}" type="button" v-on:click="activate('average')">average</button>
        <button :class="{active: modelValue === 'great'}" type="button" v-on:click="activate('great')">great</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 10px 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 5px;
  padding: 5px;
  display: flex;
  align-items: center;
}

.active {
  background: rebeccapurple;
}
</style>
