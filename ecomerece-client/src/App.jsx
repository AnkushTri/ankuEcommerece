import {BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css'
import Home from './components/Home'
import About from "./components/About"
import Products from "./components/Products"
import SingleProduct from "./components/SingleProduct"
import Cart from "./components/Cart"
import Contact from './components/Contact'
import Error from './components/Error'
import { GlobalStyle } from './components/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Header from "./components/Header"

const App = () => {

  const theme={
    colors:{
      bg:"#F6F8FA",
      footer_bg:"#0a1435",
      btn:"rgb(98 84 243)",
      border:"rgb(98 84 243 0.5)",
      hr:"fff",
      gradient:"liner-gradient(0deg,rgba(132 144 255) 0% ,rgb(98 189 252) 100%",
      shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px, rgpa(27,31,35,0.15) 0px 1px 4px;",
      shadowSupport:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
      black:"#000",
      helper:"#ff0000"

    },
    media:{
      mobile:"768px",
      tab:"998px",
    },
  }

  return(

    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/singleproduct:/id" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
