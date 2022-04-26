import Burger from './Burger';

export default {
  title: 'UI/Burger',
  component: Burger,
  agrTypes: {
    size: { control: 'number' },
    bgColor: { control: 'color' },
    active: { control: 'boolean' },
  },
};

function Template(args) {
  return <Burger {...args}>Button</Burger>;
}

export const Example = Template.bind({});
Example.args = {
  size: 1,
  bgColor: '#333',
  active: false,
};
