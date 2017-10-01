<template>
    <div id="single-blog-post">
        <h3>I'm inside.</h3>
        <h1>{{ post.title }}</h1>
        <article v-for="post in post.posts">{{ post.content }}</article>
        <figure>
            <img src="post.image">
        </figure>
        </div>
    </div>
</template>

<script>
// import postData from '../assets/posts.json'

export default {
  data () {
    return {
      id: this.$route.params.id,
      post: {}
    }
  },
  created () {
    console.log(this.id)
  }
}

</script>

<style>

</style>
