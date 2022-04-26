import Container from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
  agrTypes: {
    sidePaddings: { control: 'number' },
    pageWidth: { control: 'number' },
  },
};

function Template(args) {
  return (
    <Container {...args}>
      Элементы политического процесса являются только методом политического участия и функционально разнесены на
      независимые элементы. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством
      простого факта: понимание сути ресурсосберегающих технологий создаёт предпосылки для соответствующих условий
      активизации. Имеется спорная точка зрения, гласящая примерно следующее: тщательные исследования конкурентов
      являются только методом политического участия и преданы социально-демократической анафеме. В рамках спецификации
      современных стандартов, тщательные исследования конкурентов лишь добавляют фракционных разногласий и объективно
      рассмотрены соответствующими инстанциями!
    </Container>
  );
}

export const Example = Template.bind({});
Example.args = {
  pageWidth: 1000,
  sidePaddings: 20,
};
