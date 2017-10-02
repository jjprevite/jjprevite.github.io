<template>
    <article id="single-blog-post">
        <h1 class="heading">{{ post.title }}</h1>
        <figure>
            <img :src="post.image">
        </figure>
        <section id="description">
          <h3 class="heading-description">Description</h3>
          <p>{{ post.description }}</p>
        </section>
        <section id="technologies-used">
          <h3>Technologies Used</h3>
          <p>{{ post.technologies }}</p>
        </section>
        <section id="what-i-struggled-with">
          <h3>What I struggled with</h3>
          <div v-html="post.struggles"></div>
        </section>
        <section id="what-i-learned">
          <h3>What I learned</h3>
          <div v-html="post.learned"></div>
        </section>
        <router-link to="/">Back to Home</router-link>
    </article>
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

<style>

</style>
