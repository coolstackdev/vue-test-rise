<template>
  <button
    :class="classes.root"
    v-on="$listeners"
    :disabled="disabled"
  >
    <span>{{ text }}</span>
  </button>
</template>
<script>
export default {
  props: {
    text: { type: String, default: null },
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    tertiary: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    classes () {
      return {
        root: {
          'btn box-border font-brandon font-bold text-xl': true,
          'cursor-pointer': !this.disabled,
          'opacity-50 cursor-not-allowed': this.disabled,
          'rounded-full': this.rounded,
          'btn-primary': this.primary,
          'btn-secondary': this.secondary,
          'btn-tertiary': this.tertiary
        }
      }
    }
  }
}
</script>
<style scoped>
.btn {
  @apply flex-none inline-flex items-center justify-center px-10 py-2;
}
.btn-primary {
  @apply bg-cyan text-white outline-none;
}
.btn-secondary {
  @apply bg-orange text-white outline-none;
}
.btn-tertiary {
  @apply bg-transparent text-white border-2 border-white outline-none;
}
</style>
