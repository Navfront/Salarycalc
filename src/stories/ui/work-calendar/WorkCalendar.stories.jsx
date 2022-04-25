import WorkCalendar from "./WorkCalendar";

export default {
  title: "UI/WorkCalendar",
  component: WorkCalendar,
  agrTypes: {
    title: { control: "string" },
    cellSize: { control: "number" },
  },
};

const Template = (args) => <WorkCalendar {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: "Май",
  cellSize: "15",
};
