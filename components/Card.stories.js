import Card from './Card'
export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Displays of Devotion, Murals Dedicated to Dairy'
    },
    category: {
      control: {
        type: 'select',
        options: ['video', 'article', 'podcast'],
      },
      defaultValue: 'video'
    },
    img: {
      control: 'text',
      defaultValue: '/img/img1.jpg'
    },
    isFeatured: { control: 'boolean' },
    isWide: { control: 'boolean' },
  }
}

export const MyCard = (arg, { argTypes }) => ({
  components: { Card },
  props: Object.keys(argTypes),
  template: `
    <div class="w-64">
      <Card v-bind="$props" />
    </div>
  `
})