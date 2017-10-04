<template>
    <main>
      <img class="headshot" src="../assets/headshot.jpg">
      <intro></intro>
      <portfolio></portfolio>
      <contact></contact>
      <router-view></router-view>
    </main>
</template>

<script>
import Intro from './Intro.vue'
import Portfolio from './Portfolio.vue'
import Contact from './Contact.vue'

export default {
  name: 'app',
  components: {
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
</style>
