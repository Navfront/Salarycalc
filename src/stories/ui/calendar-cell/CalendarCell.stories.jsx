import CalendarCell from './CalendarCell';

export default {
  title: 'UI/CalendarCell',
  component: CalendarCell,
  agrTypes: {
    isHday: { control: 'boolean' },
  },
};

function Template(args) {
  return <CalendarCell {...args}>31</CalendarCell>;
}

export const Example = Template.bind({});
Example.args = {
  isHday: false,
};
