Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps!',
      vueLink: 'https://vuejs.org/',
      names: [{id: Math.random(), value: 'maks'}, {id: Math.random(), value: 'pasha'}, {id: Math.random(), value: 'dima'}],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsuOZA3UHiH0_1nP5Kj5AVEM352JABXPdGTpY0SWt&s',
      inputValue: 'hello',
      counter: 1,
      inputName: '',
      inputNameSecondary: '',
      fullName: '',
      name: '',
    };
  },
  watch: {
    name(value) {
       this.fullName = `full name changed to value ${value}`;
    },
  },
  computed: {
    nameAndCounter() {
      return this.inputNameSecondary + this.counter;
    },
  },
  methods: {
    changeNameWatcher() {
      this.name = 'max';
    },
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    addName() {
      this.names.push({id: Math.random(), value: 'vova'});
    },
    changeInputValue() {
      this.inputValue = 'by';
    },
    changeCounter(value) {
      this.counter += value;
    },
    updateName(e) {
      this.inputName = e.target.value;
    },
    submitForm(e) {
      alert('submited');
    },
    resetInput() {
      this.inputNameSecondary = '';
    }
  },
}).mount('#app-vue');

