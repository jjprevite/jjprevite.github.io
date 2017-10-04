<template>
	<b-container>
		<h5 class="footer-text">Made with <icon name="music" style="font-size:em;"></icon> and <icon name="heart"></icon> in Arizona by Joe Previte &copy; {{ date }}</h5>
</b-container>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-text {
	font-size: 0.8em;
}

.fa-icon {
  width: auto;
  height: 0.8em; /* or any other relative font sizes */
  margin: 0 2px;

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}
	

</style>