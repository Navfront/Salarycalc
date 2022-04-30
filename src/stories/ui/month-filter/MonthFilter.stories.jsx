import MonthFilter from './MonthFilter';

export default {
  title: 'UI/MonthFilter',
  component: MonthFilter,
  agrTypes: {
    textColor: { control: 'color' },
  },
};

function Template(args) {
  return <MonthFilter {...args}></MonthFilter>;
}

export const Example = Template.bind({});
Example.args = {
  textColor: 'white',
};
