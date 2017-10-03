<template>
  <div id="app">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Intro from './components/Intro.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'intro': Intro,
    'portfolio': Portfolio,
    'contact': Contact
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 20px;
  }

  h1 {
    font-size: 9em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.7em;
  }

  h4 {
    font-size: 1.4em;
  }

  h5 {
    font-size: 1.2em;
  }

  h6 {
    font-size: 1.1em;
  }

  a:hover, :focus, :active {
    color: #2c3e50;
  }

  section {
    margin: 50px auto;
  }

  .section-heading {
    margin: 25px 0;
  }

  .section-sub-heading {
    /*margin: 0 50px 50px;*/
  }
</style>
