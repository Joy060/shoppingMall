import './App.css';
import Router from './router/Router';

import GlobalStyle from './GlobalStyle';
import theme from './context/StyleTheme';
import { ThemeProvider } from 'styled-components';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/Cartcontext';


function App() {

  return (
    <ProductProvider >

    <CartProvider>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
      </ThemeProvider>
    </CartProvider>
    </ProductProvider>
  );
}

export default App;
