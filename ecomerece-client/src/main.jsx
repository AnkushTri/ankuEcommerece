import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './context/productcontext.jsx'
import { CartProvider } from './context/cartcontext.jsx'
import { FilterContextProvider } from './context/filter_context.jsx'

import { Provider } from 'react-redux';
import store from './store/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
  <AppContextProvider>
    <CartProvider>
      <FilterContextProvider>
          <App />
      </FilterContextProvider>
      </CartProvider>
  </AppContextProvider>
  </React.StrictMode >
  </Provider>,
)
