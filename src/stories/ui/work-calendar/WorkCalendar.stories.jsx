import WorkCalendar from "./WorkCalendar";

export default {
  title: "UI/WorkCalendar",
  component: WorkCalendar,
  agrTypes: {
    title: { control: "string" },
    cellSize: { control: "number" },
  },
};

const Template = (args) => (
  <>
    <WorkCalendar {...args} month="0" title="Янв " />
    <WorkCalendar {...args} month="1" title="Фев " />
    <WorkCalendar {...args} month="2" title="Мар " />
    <WorkCalendar {...args} month="3" title="Апр " />
    <WorkCalendar {...args} month="4" title="Май " />
  </>
);

export const Example = Template.bind({});
Example.args = {
  title: "Май",
  cellSize: "15",
};
