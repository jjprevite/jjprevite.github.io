<template>
    <header>
        <h1 class="site-title">Joe Previte</h1>
        <h2 class="site-sub-heading">Developer, Designer and Life&#8209;Long&nbsp;Learner.</h2>
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
</style>