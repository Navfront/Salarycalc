import Header from "./Header";

export default {
  title: "Layout/Header",
  component: Header,
  agrTypes: {
    bgColor: { control: "color" },
    paddings: { control: "string" },
  },
};

const Template = (args) => <Header {...args}>Header</Header>;

export const Example = Template.bind({});
Example.args = {
  bgColor: "pink",
  paddings: "30px",
};
