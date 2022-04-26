import Footer from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  agrTypes: {
    bgColor: { control: 'color' },
    paddings: { control: 'string' },
  },
};

function Template(args) {
  return <Footer {...args}>Header</Footer>;
}

export const Example = Template.bind({});
Example.args = {
  bgColor: 'grey',
  paddings: '30px',
};
