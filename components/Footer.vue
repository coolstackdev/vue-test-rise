<template>
  <div>
    <div :class="classes.root">
      <div class="w-full max-w-screen-2xl mx-auto px-5 flex flex-col md:flex-row items-center">
        <div :class="classes.link">
          <div class="inline-block">
            <p class="font-brandon text-2xl uppercase">Learn</p>
            <div class="w-3/4 bg-white h-1 mt-2"/>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <nuxt-link to="#" class="">About us</nuxt-link>
            <nuxt-link to="#" class="">Health & Wellness</nuxt-link>
            <nuxt-link to="#" class="">Life on the Farm</nuxt-link>
            <nuxt-link to="#" class="">Dairy Dictionary</nuxt-link>
            <nuxt-link to="#" class="">Sustainability</nuxt-link>
            <nuxt-link to="#" class="">Recipes</nuxt-link>
            <nuxt-link to="#" class="">Events</nuxt-link>
            <nuxt-link to="#" class="">Facts & Myths</nuxt-link>
            <nuxt-link to="#" class="">Recource Library</nuxt-link>
          </div>
        </div>
        <div :class="classes.contact">
          <p class="pl-2 mt-10 lg:mt-0 text-center xl:pl-40 lg:text-right mb-3 order-2 lg:order-1">
            If you have any questions or comments about any of the content of this site, please contact us.
          </p>
          <div class="flex w-full md:max-w-sm justify-around order-1 lg:order-2 mt-10 lg:mt-0">
            <font-awesome-icon :icon="['fab', 'facebook-f']" :class="classes.iconSocial" />
            <font-awesome-icon :icon="['fab', 'twitter']" :class="classes.iconSocial" />
            <font-awesome-icon :icon="['fab', 'instagram']" :class="classes.iconSocial" />
            <font-awesome-icon :icon="['fab', 'pinterest-p']" :class="classes.iconSocial" />
            <font-awesome-icon :icon="['fas', 'rss']" :class="classes.iconSocial" />
          </div>
          <div class="w-full lg:w-48 flex justify-center mt-3 xl:mt-0 order-3">
            <Button text="Contact Us" tertiary rounded />
          </div>
          <div class="w-full flex flex-wrap mt-10 md:mt-3 justify-center lg:justify-end order-4">
            <p class="mr-2">&copy; 2018 Dairy Management Inc.</p>
            <div>
              <nuxt-link to="#" class="underline">Terms of Use</nuxt-link> | 
              <nuxt-link to="#" class="underline">Privacy Policy</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full max-w-screen-2xl mx-auto px-5 flex flex-col md:flex-row items-center justify-center md:justify-end mt-10 md:mt-0">
        <p class="mr-3">Visit our content partner</p>
        <img src="~/assets/img/logo-ndc.png" width="80" class="cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script>
const Logo = () => import('@/components/Logo')
const Button = () => import('@/components/Button')
const TextField = () => import('@/components/TextField')

export default {
  components: {
    Logo,
    Button,
    TextField
  },
  computed: {
    classes() {
      return {
        root: {
          'w-full bg-black text-white py-10': true,
        },
        link: {
          'w-full md:w-1/2': true
        },
        contact: {
          'w-full md:w-1/2 flex flex-row flex-wrap justify-end items-center': true,
        },
        iconSocial: {
          'fa-2x text-white': true
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
