import IndexPage from './pages/index/indexPage';
import { defaultTheme } from './../theme/defaultTheme';
import { ThemeProvider } from 'styled-components';
import { BodyColor } from './../theme/bodyColor';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BodyColor>
        <IndexPage />
      </BodyColor>
    </ThemeProvider>
  );
}

export default App;
