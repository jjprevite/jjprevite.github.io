<template>
    <header>
        <h1 class="site-title"><router-link to="/">Joe Previte</router-link></h1>
        <h2 class="site-sub-heading">Developer, Designer and Life-Long Learner.</h2>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isHome: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.site-sub-heading{
  margin-bottom: 50px;
}

.site-title a {
  color: #354253;
}

</style>