<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  background-image: url('/bg-green.png');
}
</style>

<script>
export default {
  mounted () {
    console.log(this.$store.state.authUser)
    if (this.$store.state.authUser) {
      this.$router.push({ path: '/story' })
    } else {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
