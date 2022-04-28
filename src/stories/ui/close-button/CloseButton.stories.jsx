import CloseButton from './CloseButton';

export default {
  title: 'UI/CloseButton',
  component: CloseButton,
  agrTypes: {
    color: { control: 'color' },
  },
};

function Template(args) {
  return <CloseButton {...args}></CloseButton>;
}

export const Example = Template.bind({});
Example.args = {
  color: '#333333',
};
