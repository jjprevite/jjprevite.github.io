<template>
  <section id="portfolio">
    <h3 class="section-heading">Portfolio</h3>
    <p class="section-sub-heading">Below, you'll find a few projects I've worked on recently:</p>
    
    <b-container>
      <b-row>
        <b-col v-for="portfolioItem in portfolioItems">
          <button class="portfolio-card" @click="show (portfolioItem.id)">{{ portfolioItem.name }}</button>
        </b-col>
      </b-row>
    </b-container>

      <modal v-for="portfolioItem in portfolioItems" :name="portfolioItem.id" :adaptive="true" width="100%" height="auto" :scrollable="true" @before-open="beforeOpen">
        <div>
          <button class="close" @click="hide(portfolioItem.id)"></button>
        </div>
        <b-container class="portfolio-item-container">
          <h4 class="portfolio-item-heading">{{ portfolioItem.name }}</h4>
          <p class="portfolio-item-description">{{ portfolioItem.description }}</p>
          <figure v-if="portfolioItem.image">
            <img class="portfolio-item-image" :src="portfolioItem.image"/>
          </figure>
          <ul>
            <li v-if="portfolioItem.blog"><router-link v-bind:to="'/blog/' + portfolioItem.id"><button class="btn-in-modal">Blog Post</button></router-link></li>
            <li v-if="portfolioItem.medium"><a :href="portfolioItem.medium"><button class="btn-in-modal">Medium Post</button></a></li>
            <li v-if="portfolioItem.url" ><a :href="portfolioItem.url"><button class="btn-in-modal">See live</button></a></li>
            <li v-if="portfolioItem.codeUrl"><a :href="portfolioItem.codeUrl"><button class="btn-in-modal">View Code</button></a></li>
            <li v-if="portfolioItem.pullRequest"><a :href="portfolioItem.pullRequest"><button class="btn-in-modal">View PR</button></a></li>
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
          id: 'habitica',
          image: '/static/habitica.png',
          medium: 'https://goo.gl/bCSHL8',
          name: 'Habitica Contribution',
          pullRequest: 'https://github.com/HabitRPG/habitica/pull/8784',
          url: false
        },
        {
          blog: true,
          codeUrl: 'https://codepen.io/jjprevite/pen/awwbRd',
          description: 'For a freeCodeCamp project, I decided to turn a Random Quote Generator into a Success Story Machine. It provides you with links to stories of self-taugh programmers making it in the industry.',
          id: 'success-story-machine',
          image: '/static/successstorymachine.gif',
          medium: false,
          name: 'Success Story Machine',
          pullRequest: false,
          url: 'https://jjprevite.github.io/projects/successStoryMachine/index.html'
        },
        {
          blog: true,
          codeUrl: 'https://codepen.io/jjprevite/pen/bRojZo',
          description: 'Based on user stories defined by freeCodeCamp, I built a website that shows the local weather using geolocation and the Dark Sky API.',
          id: 'local-weather-project',
          image: '/static/localweather.gif',
          medium: false,
          name: 'Local Weather Project',
          pullRequest: false,
          url: 'https://jjprevite.github.io/projects/localWeather/index.html'
        },
        {
          blog: true,
          codeUrl: 'https://github.com/Web-Bakers/web-bakers',
          description: 'As part of an online web development cohort called Chingu, I worked with two friends on a project building a basic app. We called it Web Bakers - "an ideas kitchen that kneads, preps and showcases your projects."',
          id: 'web-bakers',
          image: '/static/web-bakers.png',
          medium: false,
          name: 'Web Bakers - a Chingu Project',
          pullRequest: false,
          url: false
        },
        {
          blog: true,
          codeUrl: false,
          description: 'A WordPress landing page I worked on with the team at Distill Mill during my internship. I was responsible for setting up the "back-end" or PHP and HTML that called in the content from Advanced Custom Fields.',
          id: 'paul-rene-website',
          image: '/static/paulrenefurniture.gif',
          medium: false,
          name: 'Paul Rene Furniture Website',
          pullRequest: false,
          url: 'http://www.paulrenefurniture.com/'
        },
        {
          blog: true,
          codeUrl: false,
          description: 'A WordPress site I helped with during my internship at Distill Mill. For this project, I worked on both the back-end and front-end, using both HTML, CSS and PHP. **This site is not yet live, hence no image and no link.**',
          id: 'touchdown-sportswear-website',
          image: false,
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
      // console.log(event.params.foo)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  @media screen and (max-width: 768px) {
    li {
      display: block;
      margin: 0 auto 10px;
      width: 95%;
    }

     li button.btn-in-modal {
      width: 100%;
    }
  }

  a {
    color: #42b983;
  }

  .portfolio-card {
    background-color: #354253;
    border: 2px solid #2c3e50;
    box-shadow: 10px 10px 5px #888888;
    color: #C5CBD3;
    font-weight: 600;
    transition: 0.4s;
    height: 150px;
    width: 150px;
    transition: border-radius background-color color 0.3s;
  }

  @media screen and (max-width:768px) {
    .portfolio-card {
      font-size: 1.5em;
      margin-bottom: 20px;
      width: 200px;
      height: 200px;
    }
  }

  .portfolio-card:hover {
    /*background-color: #3D3F41;*/
    border-radius: 50%;
    /*color: #354253;*/
    color: #C5CBD3;
    font-size: 1.15em;
  }

  .portfolio-card:active {
    outline: none;
  }

  .portfolio-item-container {
    text-align: center;
  }

  .portfolio-item-heading {
    margin: 50px auto 10px;
  }

  .portfolio-item-description {
    margin: 0 auto 15px;
    max-width: 500px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .portfolio-item-description {
      max-width: 95%;
    }
  }

  .portfolio-item-image {
    height: 50%;
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    .portfolio-item-image {
      height: 95%;
      width: 95%;
    }
  }

  .btn-in-modal {
    background-color: #354253;
    border: none;
    border-radius: 10px;
    color: #C5CBD3;
    width: 150px;
    height: 50px;
    font-size: 1.25em;
    transition: border-radius font-weight 0.5s;
  }

  .btn-in-modal:hover {
    font-weight: 700;
  }

  .close {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #333D49;
    text-transform: uppercase;
    position: absolute;
    top: 25px;
    right: 25px;
  }

  @media screen and (max-width: 768px) {
    .close {
      top: 5px;
      right: 5px;
    }
  }

  .close::before {
    content: "X";
    color: #C5CBD3;
  }

  .close:focus {
    outline: none;
  }
</style>
