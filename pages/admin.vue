<template>
  <form @submit.prevent="createItem">
    <input type="text" v-model="title" placeholder="title">
    <input type="text" v-model="description" placeholder="description">
    <input type="text" v-model="asset" placeholder="asset">
  </form>
</template>
<script>
export default {
  name: 'Admin',
  data () {
    return {
      title: '',
      description: '',
      asset: ''
    }
  },
  methods: {
    async createItem () {
      try {
        await this.$store.dispatch('create-item', {
          username: this.formUsername,
          password: this.formPassword
        }).then(() => {
          this.formUsername = ''
          this.formPassword = ''
          this.formError = null
          this.$router.push({ path: '/story' })
        })
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
