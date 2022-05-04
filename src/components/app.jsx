import IndexPage from './pages/index/indexPage';
import { defaultTheme } from './../theme/defaultTheme';
import { ThemeProvider } from 'styled-components';
import { BodyWrapper } from './../theme/bodyWrapper';
// import { useSelector } from 'react-redux';

function App() {
  // const popupObject = useSelector((state) => state.appReducer.popup);
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <BodyWrapper scrollOff={popupObject.isOpen}> */}
      <BodyWrapper >
        <IndexPage />
      </BodyWrapper>
    </ThemeProvider>
  );
}

export default App;
