<template>
  <div :class="classes.root">
    <div :class="classes.wrapper">
      <Logo class="w-40 order-2 lg:order-1" />
      <font-awesome-icon @click="toggleMenu" :icon="['fas', 'bars']" :class="classes.iconMenu" />
      <ul :class="classes.nav">
        <li :class="classes.navItem">Health & Wellness</li>
        <li :class="classes.navItem">Sustainability</li>
        <li :class="classes.navItem">Fact & Myths</li>
        <li :class="classes.navItem">Life on the Farm</li>
        <li :class="classes.navItem">Recipes</li>
      </ul>
      <div class="hidden lg:flex w-32 xl:w-56 order-3">
        <TextField type="text" prefix-icon="search" />
      </div>
      <div class="flex lg:hidden order-3">
        <font-awesome-icon @click="handleClickSearchIcon" :icon="['fas', 'search']" class="fa-lg text-black cursor-pointer" />
      </div>
    </div>
    <transition name="fade">
      <Sidebar v-if="menuOpen" @close="menuOpen = false" />
    </transition>
  </div>
</template>

<script>
const Logo = () => import('@/components/Logo')
const TextField = () => import('@/components/TextField')
const Sidebar = () => import('@/components/Sidebar')

export default {
  components: {
    Logo,
    TextField,
    Sidebar
  },
  data: () => ({
    menuOpen: false
  }),
  computed: {
    classes() {
      return {
        root: {
          'w-full h-20 flex items-center shadow-bottom relative': true,
        },
        wrapper: {
          'w-full max-w-screen-2xl flex mx-auto items-center px-5 justify-between': true
        },
        iconMenu: {
          'fa-lg text-black cursor-pointer lg:hidden order-1 lg:order-2': true
        },
        nav: {
          'hidden lg:flex flex-row order-1 lg:order-2': true,
        },
        navItem: {
          'mt-2 lg:mt-0 mx-4 xl:mx-6 font-sans text-lg text-black cursor-pointer': true
        },
        sideMenu: {
          'w-48 h-screen bg-gray-dark fixed z-30': true
        }
      }
    }
  },
  methods: {
    handleClickSearchIcon() {
      console.log('search icon clicked')
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style scoped>
.shadow-bottom {
  box-shadow: 0 7px 8px -8px rgba(0, 0, 0, .4);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
