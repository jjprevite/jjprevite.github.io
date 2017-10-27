<template>
  <b-container>  
    <article id="single-blog-post">
        <h1 class="heading">{{ post.title }}</h1>
        <b-container v-if="post.image">
          <figure v-if="post.image">
              <img :src="post.image">
          </figure>
        </b-container>
        <div class="video-wrapper" v-if="post.video" v-html="post.video"></div>
        <section id="description">
          <b-container>
            <h3 class="heading-description">Description</h3>
            <p class="copy">{{ post.description }}</p>
          </b-container>
        </section>
        <section id="technologies-used">
          <b-container>
            <h3>Technologies Used</h3>
            <p class="copy">{{ post.technologies }}</p>
          </b-container>
        </section>
        <section id="what-i-struggled-with">
          <b-container>
            <h3>What I struggled with</h3>
            <div class="copy" v-html="post.struggles"></div>
          </b-container>
        </section>
        <section id="what-i-learned">
          <b-container>
            <h3>What I learned</h3>
            <div class="copy" v-html="post.learned"></div>
          </b-container>
        </section>
        <b-container>
          <h6 class="home-link"><router-link to="/">Back to Home</router-link></h6>
        </b-container>
    </article>
  </b-container>
</template>

<script>
import postData from '../assets/posts.json'

export default {
  data () {
    return {
      id: this.$route.params.id,
      post: {},
      postData: postData
    }
  },
  created () {
    let postObject = postData.posts.filter(post => post.id === this.id)
    this.post = postObject[0]
  }
}

</script>

<style scoped>
#single-blog-post {
  text-align: left;
}

.heading {
  margin: 0 0 50px;
}

figure img {
  width: 100%;
}

.site-title a {
  color: #2c3e50;
  font-size: 2rem;
}

.site-sub-heading {
  font-size: 1rem;
}

.home-link {
  text-align: center;
  margin: 0 auto 25px;
}

h3 {
  margin: 0;
}

.video-wrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
  margin: 0 15px;
}

</style>