<template>
    <main>
      <app-header></app-header>
      <img class="headshot" src="../assets/headshot.jpg">
      <intro></intro>
      <portfolio></portfolio>
      <contact></contact>
      <router-view></router-view>
    </main>
</template>

<script>
import Header from './Header.vue'
import Intro from './Intro.vue'
import Portfolio from './Portfolio.vue'
import Contact from './Contact.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
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
  .headshot {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 2px solid #2c3e50;
  }

  body {
    background-color: #C5CBD3;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #354253;
    margin-top: 60px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 20px;
  }

  h1 {
    font-size: 9em;
  }

  h2 {
    font-size: 2.7em;
  }

  h3 {
    font-size: 2.4em;
  }

  h4 {
    font-size: 2.1em;
  }

  h5 {
    font-size: 1.8em;
  }

  h6 {
    font-size: 1.5em;
  }

  p {
    font-size: 1.3em;
  }

  a {
    color: #4E5053;
  }

  a:hover, :focus{
    color: #8AADDA;
  }

  section {
    margin: 50px auto;
  }

  .section-heading {
    margin: 75px 0 10px;
  }

  .first-heading {
    margin-top: 50px 0 10px;
  }

  .v--modal {
    background-color: #C5CBD3;
  }
</style>
