import Popup from './Popup';

export default {
  title: 'UI/Popup',
  component: Popup,
  agrTypes: {},
};

function Template(args) {
  return <Popup {...args}>something</Popup>;
}

export const Example = Template.bind({});
Example.args = {};
