<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SInput
      label="label"
      hint="hint"
      placeholder="placeholder"
      v-model="inputValue"
      @click:prepend="clickPrepend"
      @click:append="clickAppend"
    >
      <template v-slot:prepend>P</template>
      <template v-slot:append>S</template>
    </SInput>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SInput from './components/Input/Input.vue'

@Component({
  components: { SInput }
})
export default class App extends Vue {
  private inputValue = ''

  clickPrepend (): void {
    console.log('prepend clicked')
  }

  clickAppend (): void {
    console.log('append clicked')
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media (width <= 50rem) {
  #app {
    color: #0c7ef0;
  }
}
</style>
