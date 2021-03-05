<template>
  <div class="sidebar">
    <div class="relative flex flex-col">
      <ul class="pt-10">
        <li class="nav-item">Health & Wellness</li>
        <li class="nav-item">Sustainability</li>
        <li class="nav-item">Fact & Myths</li>
        <li class="nav-item">Life on the Farm</li>
        <li class="nav-item">Recipes</li>
      </ul>
      <font-awesome-icon @click="$emit('close')" :icon="['fas', 'times']" class="fa-2x text-black absolute right-5 top-5" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    classes() {
      return {
        root: {
          'sidebar': true,
        }
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
.sidebar {
  @apply w-screen h-screen overflow-hidden fixed top-0 left-0 z-50 bg-white;
  backdrop-filter: blur(10px);
}
.nav-item {
  @apply m-10 font-sans text-2xl text-black cursor-pointer text-center;
}
</style>
