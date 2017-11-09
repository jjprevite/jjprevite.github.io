<template>
  <b-container>  
    <article id="meditation-page">
        <h1 class="heading">Interested in Meditation</h1>
        
        <li><router-link to="/"><button class="home-link btn">Back to Home</button></router-link></li>
    </article>
  </b-container>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  created () {
  }
}

</script>

<style scoped>
.heading {
  margin: 0 0 50px;
}

.home-link {
  text-align: center;
  color: #C5CBD3;
}


</style>