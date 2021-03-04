<template>
  <div class="container mx-auto">
    <div class="w-full">
      <Header />
      <div class="w-full md:w-5/6 md:mx-auto mt-10 px-5">
        <div>
          <p class="font-brandon md:text-6xl font-extrabold text-black text-4xl">
            Undeniably Devoted to Dairy
          </p>
          <p class="font-sans text-xl text-black">
            Learn why dairy and dairy products are contribute to a well-balanced diet. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
        <div class="mt-5 py-5 flex border-b border-gray">
          <p class="text-gray mr-4 text-base">
            Learn more:
          </p>
          <p class="text-orange mr-4 text-base">
            Podcasts
          </p>
          <p class="text-orange mr-4 text-base">
            Stories
          </p>
        </div>
        <div class="mt-6 w-full grid grid-cols-1 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            :category="card.category"
            :img="card.img"
            :isFeatured="card.isFeatured"
            :isWide="card.isWide"
            :class="card.isWide ? 'md:col-span-2' : 'md:col-span-1'"
            class="my-3 md:mt-0"
          />
        </div>
        <div class="my-10 flex justify-center">
          <Button text="See More" secondary rounded @click="handleClick" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { cards } from '@/api'

const Header = () => import('@/components/Header')
const Footer = () => import('@/components/Footer')
const Button = () => import('@/components/Button')
const Card = () => import('@/components/Card')

export default {
  components: {
    Header,
    Footer,
    Button,
    Card
  },
  data: () => ({
    cards: []
  }),
  mounted() {
    // load cards
    this.cards = cards
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  }
}
</script>

<style scoped>

</style>
