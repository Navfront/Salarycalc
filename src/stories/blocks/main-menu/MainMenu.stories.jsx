import MainMenu from './MainMenu';

export default {
  title: 'Blocks/MainMenu',
  component: MainMenu,
  agrTypes: {
    active: { control: 'boolean' },
  },
};

function Template(args) {
  return <MainMenu {...args}></MainMenu>;
}

export const Example = Template.bind({});
Example.args = {
  active: true,
};
