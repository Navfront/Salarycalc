import Nav from './Nav';

export default {
  title: 'Blocks/Nav',
  component: Nav,
  agrTypes: {
    size: { control: 'number' },
  },
};

function Template(args) {
  return <Nav {...args}>SalaryCalc</Nav>;
}

export const Example = Template.bind({});
Example.args = {
  size: 1,
};
