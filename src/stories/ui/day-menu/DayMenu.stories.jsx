import DayMenu from './DayMenu';

export default {
  title: 'UI/DayMenu',
  component: DayMenu,
  agrTypes: {
    month: { control: 'string' },
    dayNumber: { control: 'number' },
  },
};

function Template(args) {
  return <DayMenu {...args}></DayMenu>;
}

export const Example = Template.bind({});
Example.args = {
  month: 'Апрель',
  dayNumber: 7,
};
