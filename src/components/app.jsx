import IndexPage from "./pages/index/indexPage";
import { defaultTheme } from "./../theme/defaultTheme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <IndexPage />
      </ThemeProvider>
    </>
  );
};

export default App;
