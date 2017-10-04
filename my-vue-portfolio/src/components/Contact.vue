<template>
  <section id="contact">
    <b-container>
      <h3 class="section-heading">Want to get in touch?</h3>
        <p class="section-sub-heading">You can email me at <a href="http://www.google.com/recaptcha/mailhide/d?k=015a8i44khxm1KWQX70TAhrQ==&amp;c=SlUvc6OK_J1S65mx1JLqYJA72bz6iTlBgqfOrV6h8qM=" onclick="window.open('http://www.google.com/recaptcha/mailhide/d?k\x3d015a8i44khxm1KWQX70TAhrQ\x3d\x3d\x26c\x3dSlUvc6OK_J1S65mx1JLqYJA72bz6iTlBgqfOrV6h8qM\x3d', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'); return false;" title="Reveal this e-mail address">j...@gmail.com</a> </br>or contact me via any of the following social networks:</p>
        <ul>
          <a v-for="socialNetwork in socialNetworks" target="_blank" :href="socialNetwork.url"><li><icon :name="socialNetwork.name"></icon></li></a>
        </ul>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      socialNetworks: [
        { name: 'twitter', url: 'https://twitter.com/jjprevite' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/jjprevite' },
        { name: 'github', url: 'https://github.com/jjprevite' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

/*a {
  color: #42b983;
}*/

.fa-icon {
  width: auto;
  height: 2em; /* or any other relative font sizes */
  /*margin: 0 2px;*/

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}

.fa-icon:hover {
  color: #2c3e50;
}

</style>
