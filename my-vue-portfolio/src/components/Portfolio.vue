<template>
  <section id="portfolio">
    <h3 class="heading">Portfolio</h3>
    <p class="sub-heading">Below, you'll find a few projects I've worked on recently:</p>
    <div v-for="portfolioItem in portfolioItems">
      <h4>{{ portfolioItem.name }}</h4>
      <figure>
        <img src="portfolioItem.img">
      </figure>
      <p>{{ portfolioItem.description }}</p>
      <ul>
        <li><a :href="portfolioItem.blog"><button>Blog Post</button></a></li>
        <li><a :href="portfolioItem.url"><button>See live</button></a></li>
        <li><a :href="portfolioItem.codeUrl"><button>View Code</button></a></li>
      </ul>
    </div>
    <h4>I come before modal</h4>
    <button v-for="portfolioItem in portfolioItems" @click="show ()">{{ portfolioItem.name }}</button>
      <modal v-for="portfolioItem in portfolioItems" name="hello-world" :adaptive="true" width="100%" height="100%" @before-open="beforeOpen">
        <div>
          <button class="close" @click="hide()"></button>
        </div>
          <h5>Can you see me?</h5> 
          <p>{{ portfolioItem.description }}</p>
      </modal>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      portfolioItems: [
        { name: 'RGB Color Game',
          img: '../../../pictures/colorgame.gif',
          description: 'Im the first description',
          blog: 'https://www.google.com',
          url: 'https://twitter.com/jjprevite',
          codeUrl: 'https://twitter.com/jjprevite'
        },
        { name: 'RGB C 2',
          img: '../../../pictures/colorgame.gif',
          description: 'and i am description num 2',
          blog: 'https://www.google.com',
          url: 'https://twitter.com/jjprevite',
          codeUrl: 'https://twitter.com/jjprevite'
        }
      ]
    }
  },
  methods: {
    show () {
      this.$modal.show('hello-world', { portfolioItems: 'portfolioItems' })
    },
    hide () {
      this.$modal.hide('hello-world')
    },
    beforeOpen (event) {
      console.log(event.params.foo)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body .v--modal-box.v--modal{
  width:100% !important;
  margin: auto;
}

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

a {
  color: #42b983;
}

.close{
  width:100px;
  height:200px;
  background-color:red;
}
</style>
