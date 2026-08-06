import './App.css';
import Router from './router/Router';

import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './context/StyleTheme';



function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
    </ThemeProvider>
  );
}

export default App;
