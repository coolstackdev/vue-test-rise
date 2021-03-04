<template>
  <div>
    <div :class="classes.root">
      <Logo class="w-40" />
      <ul :class="classes.nav">
        <li :class="classes.navItem">Health & Wellness</li>
        <li :class="classes.navItem">Sustainability</li>
        <li :class="classes.navItem">Fact & Myths</li>
        <li :class="classes.navItem">Life on the Farm</li>
        <li :class="classes.navItem">Recipes</li>
      </ul>
      <div class="justify-self-end">
        <TextField type="text" prefix-icon="search" />
      </div>
    </div>
  </div>
</template>

<script>
const Logo = () => import('@/components/Logo')
const TextField = () => import('@/components/TextField')

export default {
  components: {
    Logo,
    TextField
  },
  computed: {
    classes() {
      return {
        root: {
          'w-full h-20 flex items-center shadow-bottom px-10': true,
        },
        nav: {
          'flex flex-col lg:flex-row': true,
        },
        navItem: {
          'mt-2 lg:mx-5 lg:mt-0 font-sans text-lg text-black cursor-pointer': true
        }
      }
    }
  }
}
</script>

<style scoped>
.shadow-bottom {
  box-shadow: 0 7px 8px -8px rgba(0, 0, 0, .4);
}
</style>
