<template>
	<h5>Made with <icon name="music"></icon> and <icon name="heart"></icon> in Arizona by Joe Previte &copy; {{ date }}</h5>
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
<style>

</style>