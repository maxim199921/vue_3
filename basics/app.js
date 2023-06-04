Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps!',
      vueLink: 'https://vuejs.org/',
      names: ['maks', 'dima', 'pasha'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsuOZA3UHiH0_1nP5Kj5AVEM352JABXPdGTpY0SWt&s',
      inputValue: 'hello',
      counter: 1,
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    addName() {
      this.names.push('vova');
    },
    changeInputValue() {
      this.inputValue = 'by';
    },
    changeCounter(value) {
      this.counter += value;
    }
  }
}).mount('#app-vue');

