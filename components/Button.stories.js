import Button from './Button'
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'See More'
    },
    primary: { control: 'boolean', defaultValue: true },
    secondary: { control: 'boolean' },
    tertiary: { control: 'boolean' },
    rounded: { control: 'boolean', defaultValue: true },
    disabled: { control: 'boolean' },
  }
}

export const MyButton = (arg, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" />'
})