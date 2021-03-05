import TextField from './TextField'
export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    prefixIcon: {
      control: {
        type: 'select',
        options: ['search', 'star'],
      },
      defaultValue: 'search'
    },
    placeholder: {
      control: 'text',
      defaultValue: 'here...'
    },
  }
}

export const MyTextField = (arg, { argTypes }) => ({
  components: { TextField },
  props: Object.keys(argTypes),
  template: `
    <div class="w-64">
      <TextField v-bind="$props" />
    </div>
  `
})