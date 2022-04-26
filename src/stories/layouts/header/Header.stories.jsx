import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  agrTypes: {
    bgColor: { control: 'color' },
    paddings: { control: 'string' },
  },
};

function Template(args) {
  return <Header {...args}>Header</Header>;
}

export const Example = Template.bind({});
Example.args = {
  bgColor: 'pink',
  paddings: '30px',
};
