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
          img: './assets/colorgame.gif',
          medium: 'https://goo.gl/bCSHL8',
          name: 'Habitica Contribution',
          pullRequest: 'https://github.com/HabitRPG/habitica/pull/8784',
          url: false
        },
        {
          blog: 'https://jjprevite.github.io/posts/successmachineblog.html',
          codeUrl: 'https://codepen.io/jjprevite/pen/awwbRd',
          description: 'For a freeCodeCamp project, I decided to turn a Random Quote Generator into a Success Story Machine. It provides you with links to stories of self-taugh programmers making it in the industry.',
          id: 2,
          img: './assets/colorgame.gif',
          medium: false,
          name: 'Success Story Machine',
          pullRequest: false,
          url: 'https://jjprevite.github.io/projects/successStoryMachine/index.html'
        },
        {
          blog: 'https://jjprevite.github.io/posts/localweatherblog.html',
          codeUrl: 'https://codepen.io/jjprevite/pen/bRojZo',
          description: 'Based on user stories defined by freeCodeCamp, I built a website that shows the local weather using geolocation and the Dark Sky API.',
          id: 3,
          img: './assets/localweatherproject.gif',
          medium: false,
          name: 'Local Weather Project',
          pullRequest: false,
          url: 'https://jjprevite.github.io/projects/localWeather/index.html'
        },
        {
          blog: false,
          codeUrl: 'https://github.com/Web-Bakers/web-bakers',
          description: 'As part of an online web development cohort called Chingu, I worked with two friends on a project that used Node.js, Express,js, Mongoose and MongoDB to build a basic app. We called it Web Bakers - "an ideas kitchen that kneads, preps and showcases your projects."',
          id: 4,
          img: false,
          medium: false,
          name: 'Web Bakers - a Chingu Collaborative Project',
          pullRequest: false,
          url: false
        },
        {
          blog: false,
          codeUrl: false,
          description: 'A WordPress landing page I worked on with the team at Distill Mill during my internship. I was responsible for setting up the "back-end" or PHP and HTML that called in the content from Advanced Custom Fields.',
          id: 5,
          img: './assets/localweatherproject.gif',
          medium: false,
          name: 'Paul Rene Furniture Website',
          pullRequest: false,
          url: 'http://www.paulrenefurniture.com/'
        },
        {
          blog: false,
          codeUrl: false,
          description: 'A WordPress site I helped with during my internship at Distill Mill. For this project, I worked on both the back-end and front-end, using both HTML, CSS and PHP. *This site is not yet live.*',
          id: 6,
          img: './assets/localweatherproject.gif',
          medium: false,
          name: 'Touchdown Sportswear Website',
          pullRequest: false,
          url: false
        }
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
