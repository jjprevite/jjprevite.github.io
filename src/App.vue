<template>
  <div id="app">
      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Intro from './components/Intro.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
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
  
</style>
