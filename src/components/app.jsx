import IndexPage from './pages/index/indexPage';
import { defaultTheme } from './../theme/defaultTheme';
import { ThemeProvider } from 'styled-components';
import { BodyWrapper } from './../theme/bodyWrapper';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BodyWrapper>
        <IndexPage />
      </BodyWrapper>
    </ThemeProvider>
  );
}

export default App;
