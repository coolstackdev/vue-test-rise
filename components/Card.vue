<template>
  <div :class="classes.root">
    <div class="relative">
      <img :src="img" :class="classes.img" />
      <div v-if="isFeatured" :class="classes.badge">
        <font-awesome-icon :icon="['fas', 'star']" class="fa-xs mr-1 text-white" />
        <span class="font-brandon text-white font-light text-tiny">Featured</span>
      </div>
    </div>
    <div class="mt-5 mb-8 flex flex-col items-center">
      <p class="font-brandon text-tiny font-bold text-gray-dark uppercase">
        {{ category }}
      </p>
      <div :class="classes.categoryBar" />
      <p :class="classes.cardTitle">
        {{ title }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: null },
    category: { type: String, default: null },
    img: { type: String, default: null },
    isFeatured: { type: Boolean, default: false },
    isWide: { type: Boolean, default: false }
  },
  computed: {
    isVideo() {
      return this.category === 'video'
    },
    isPodcast() {
      return this.category === 'podcast'
    },
    isArticle() {
      return this.category === 'article'
    },
    classes () {
      return {
        root: {
          'flex flex-col shadow-lg cursor-pointer': true,
        },
        img: {
          'card-img': true,
          'border-2': this.isFeatured,
          'border-cyan': this.isVideo,
          'border-orange': this.isPodcast,
          'border-green': this.isArticle
        },
        badge: {
          'absolute top-0 left-0 h-6 flex items-center px-3': true,
          'bg-cyan': this.isVideo,
          'bg-orange': this.isPodcast,
          'bg-green': this.isArticle
        },
        categoryBar: {
          'h-1 w-7 my-3': true,
          'bg-cyan': this.isVideo,
          'bg-orange': this.isPodcast,
          'bg-green': this.isArticle
        },
        cardTitle: {
          'font-brandon font-bold text-center px-5 text-black': true,
          'text-2xl': !this.isWide,
          'text-3xl': this.isWide
        }
      }
    }
  }
}
</script>
<style scoped>
.card-img {
  @apply w-full object-cover;
  height: 150px;
}
</style>
