<template>
  <div :class="`border-bevel-sm ${className ? className : ``}`">
    <input
      v-model="inputVal"
      type="email"
      :placeholder="placeholder"
      class="px-6 py-2 bg-gray-100 text-brown-800 shadow-inner placeholder-brown-800 outline-none text-base w-full"
    >
  </div>
</template>

<script>
export default {
  name: 'EmailInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      inputVal: this.value
    }
  },
  watch: {
    inputVal (val) {
      this.$emit('input', val)
    }
  }
}
</script>
