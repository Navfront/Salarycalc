import Logo from './Logo';

export default {
  title: 'UI/Logo',
  component: Logo,
  agrTypes: {
    size: { control: 'number' },
    text: { control: 'string' },
  },
};

function Template(args) {
  return <Logo {...args}>Button</Logo>;
}

export const Example = Template.bind({});
Example.args = {
  size: 1,
  text: 'Navfront.ru',
};
