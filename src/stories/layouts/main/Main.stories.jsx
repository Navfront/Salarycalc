import Main from './Main';

export default {
  title: 'Layout/Main',
  component: Main,
  agrTypes: {
    bgColor: { control: 'color' },
    paddings: { control: 'string' },
  },
};

function Template(args) {
  return <Main {...args}>Main</Main>;
}

export const Example = Template.bind({});
Example.args = {
  bgColor: 'lightblue',
  paddings: '30px',
};
