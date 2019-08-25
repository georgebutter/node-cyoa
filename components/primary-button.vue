<template>
  <button :class="`${className ? className : ``} bg-green-300 rounded-sm shadow-green text-green-600 w-full p-2 outline-none`" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    className: {
      type: String,
      default: null
    }
  }
}
</script>
