import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './../src/theme/defaultTheme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './../src/redux/rootReducer';

const store = createStore(rootReducer);

addDecorator((story) => (
  <ThemeProvider theme={defaultTheme}>
    <Provider store={store}>{story()}</Provider>
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
