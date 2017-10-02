<template>
    <div id="single-blog-post">
        <h3>I'm inside.</h3>
        <h1>{{ post.title }}</h1>
        <article>{{ post.description }}</article>
        <figure>
            <img src="post.image">
        </figure>
        </div>
    </div>
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
    console.log(postData.posts[0].description)
    // this works but I need to filter based on id
  }
}

</script>

<style>

</style>
