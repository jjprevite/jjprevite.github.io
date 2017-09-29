<template>
  <section id="portfolio">
    <h3 class="section-heading">Portfolio</h3>
    <p class="section-sub-heading">Below, you'll find a few projects I've worked on recently:</p>
    
    <b-container>
      <b-row>
        <b-col>
          <button v-for="portfolioItem in portfolioItems" @click="show (portfolioItem.id)">{{ portfolioItem.name }}</button>
        </b-col>
      </b-row>
    </b-container>

      <modal v-for="portfolioItem in portfolioItems" :name="portfolioItem.id" :adaptive="true" width="100%" height="100%" @before-open="beforeOpen">
        <div>
          <button class="close" @click="hide(portfolioItem.id)">Close</button>
        </div>
        <b-container class="portfolio-item-container">
          <h4 class="portfolio-item-heading">{{ portfolioItem.name }}</h4>
          <p class="portfolio-item-description">{{ portfolioItem.description }}</p>
          <figure>
            <img src="portfolioItem.img">
          </figure>
          <ul>
            <li v-if="portfolioItem.blog"><a :href="portfolioItem.blog"><button>Blog Post</button></a></li>
            <li v-if="portfolioItem.medium"><a :href="portfolioItem.medium"><button>Medium Post</button></a></li>
            <li v-if="portfolioItem.url" ><a :href="portfolioItem.url"><button>See live</button></a></li>
            <li v-if="portfolioItem.codeUrl"><a :href="portfolioItem.codeUrl"><button>View Code</button></a></li>
            <li v-if="portfolioItem.pullRequest"><a :href="portfolioItem.pullRequest"><button>View Pull Request</button></a></li>
          </ul>
        </b-container>
      </modal>

  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      active: false,
      portfolioItems: [
        {
          blog: false,
          codeUrl: false,
          description: 'I contributed to an open-source project called Habitica, which is a gamified task manager built using the MEAN stack. I fixed an issue with a friend, submitted a pull request and it was merged into the project.',
          id: 1,
          img: '../../../pictures/colorgame.gif',
          medium: 'https://goo.gl/bCSHL8',
          name: 'Habitica Contribution',
          pullRequest: 'https://github.com/HabitRPG/habitica/pull/8784',
          url: false
        },
        {
          blog: 'https://jjprevite.github.io/posts/successmachineblog.html',
          codeUrl: 'https://codepen.io/jjprevite/pen/awwbRd',
          description: 'Brunch iceland blue bottle salvia slow-carb. Cloud bread schlitz flexitarian you probably haven\'t heard of them DIY pug. Venmo gastropub unicorn scenester paleo meh jean shorts beard microdosing migas.',
          id: 2,
          img: './assets/colorgame.gif',
          medium: false,
          name: 'Success Story Machine',
          pullRequest: false,
          url: 'https://jjprevite.github.io/projects/successStoryMachine/index.html'
        }
        // {
        //   blog: '',
        //   codeUrl: '',
        //   description: '',
        //   id: ,
        //   img: '',
        //   medium: ,
        //   name: '',
        //   pullRequest: ,
        //   url: ''
        // },
        // {
        //   blog: '',
        //   codeUrl: '',
        //   description: '',
        //   id: ,
        //   img: '',
        //   medium: ,
        //   name: '',
        //   pullRequest: ,
        //   url: ''
        // },
        // {
        //   blog: '',
        //   codeUrl: '',
        //   description: '',
        //   id: ,
        //   img: '',
        //   medium: ,
        //   name: '',
        //   pullRequest: ,
        //   url: ''
        // },
        // {
        //   blog: '',
        //   codeUrl: '',
        //   description: '',
        //   id: ,
        //   img: '',
        //   medium: ,
        //   name: '',
        //   pullRequest: ,
        //   url: ''
        // }
      ]
    }
  },
  methods: {
    show (modalName) {
      this.active = true
      this.$modal.show(modalName, { portfolioItems: 'portfolioItems' })
    },
    hide (modalName) {
      this.active = false
      this.$modal.hide(modalName)
    },
    beforeOpen (event) {
      console.log(event.params.foo)
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

  a {
    color: #42b983;
  }

  .portfolio-item-container {
    text-align: center;
  }

  .portfolio-item-heading {
    margin: 50px auto 25px;
  }

  .portfolio-item-description {

  }

  .close {
    width: 100px;
    height: 200px;
    background-color: red;
    text-transform: uppercase;
  }
</style>
