<template>
  <div :class="classes.root">
    <font-awesome-icon :icon="iconValue" class="mr-2 fa-md" />
    <input
      ref="input"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('input', $event.target.value)"
      :class="classes.input"
      autocomplete="off"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    prefixIcon: { type: String, default: '' },
  },
  data: () => ({
    isActive: false
  }),
  computed: {
    iconValue() {
      switch (this.prefixIcon) {
        case 'search':
          return ['fas', 'search'];
        case 'star':
          return ['fas', 'star']
      }
    },
    classes() {
      return {
        root: {
          'w-full inline-flex items-center justify-start relative': true,
          'rounded-full px-3 py-1 border border-gray-dark text-black font-sans text-lg': true
        },
        input: {
          'bg-transparent border-none outline-none w-full': true,
        }
      }
    }
  },
  methods: {}
}
</script>
