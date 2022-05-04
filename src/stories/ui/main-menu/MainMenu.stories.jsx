import MainMenu from './MainMenu';

export default {
  title: 'UI/MainMenu',
  component: MainMenu,
  agrTypes: {
    isActive: { control: 'boolean' },
  },
};

function Template(args) {
  return <MainMenu {...args}></MainMenu>;
}

export const Example = Template.bind({});
Example.args = {
  isActive: true,
};
