<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Test :msg="msg1" @change-messages="changeMessages1($event)"></Test>
    <Test :msg="msg2" @change-messages="changeMessages2($event)"></Test>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Test from '@/components/Test.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Test
  },
  data () {
    return {
      msg1: 'mess 1',
      msg2: 'mess 2'
    }
  },
  methods: {
    changeMessages1 (mess: string) {
      this.msg1 = mess
    },
    changeMessages2 (mess: string) {
      this.msg2 = mess
    }
  }
})
</script>
