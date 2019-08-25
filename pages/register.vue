<template>
  <div class="font-sans min-h-screen flex items-center justify-center">
    <div class="border-bevel m-2 shadow-shadow max-w-xl w-full text-brown-800">
      <div class="bg-paper shadow-bevel p-10 text-center">
        <h1 class=" mb-4 text-2xl">
          Register
        </h1>
        <p v-if="formError" class="text-red-900 mb-2">
          {{ formError }}
        </p>
        <form autocomplete="off" @submit.prevent="register">
          <email-input
            class-name="mb-4"
            placeholder="Email address"
            :value="formEmail"
            @input="formEmail = $event"
          />
          <text-input
            class-name="mb-4"
            placeholder="Username"
            :value="formUsername"
            @input="formUsername = $event"
          />
          <password-input
            class-name="mb-4"
            placeholder="Password"
            :value="formPassword"
            @input="formPassword = $event"
          />
          <password-input
            class-name="mb-4"
            placeholder="Confirm password"
            :value="formConfirmation"
            @input="formConfirmation = $event"
          />
          <primary-button type="submit" class-name="mb-4">
            Register
          </primary-button>
          <NuxtLink to="/">
            Already have an account?
          </NuxtLink>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import TextInput from '~/components/text-input.vue'
import EmailInput from '~/components/email-input.vue'
import PasswordInput from '~/components/password-input.vue'
import PrimaryButton from '~/components/primary-button.vue'
export default {
  name: 'Index',
  components: {
    EmailInput,
    TextInput,
    PasswordInput,
    PrimaryButton
  },
  data () {
    return {
      formError: null,
      formEmail: '',
      formUsername: '',
      formPassword: '',
      formConfirmation: ''
    }
  },
  methods: {
    async register () {
      try {
        await this.$store.dispatch('register', {
          username: this.formUsername,
          email: this.formEmail,
          password: this.formPassword,
          confirmation: this.formConfirmation
        }).then(() => {
          this.formUsername = ''
          this.formPassword = ''
          this.formEmail = ''
          this.formConfirmation = ''
          this.formError = null
          this.$router.push({ path: '/' })
        })
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
