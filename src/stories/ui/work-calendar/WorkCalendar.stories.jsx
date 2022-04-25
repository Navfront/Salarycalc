import WorkCalendar from "./WorkCalendar";

export default {
  title: "UI/WorkCalendar",
  component: WorkCalendar,
  agrTypes: {
    title: { control: "string" },
    month: { control: "number" },
    hiddenTitle: { control: "string" },
  },
};

const Template = (args) => (
  <>
    <WorkCalendar {...args} />
  </>
);

export const Example = Template.bind({});
Example.args = {
  title: "Январь",
  month: "0",
  hiddenTitle: "сео",
};
