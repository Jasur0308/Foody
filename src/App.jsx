import './App.css'
import Banner from './components/banner/Banner'
import Customers from './components/customer/Customers'
import Footer from './components/footer/Footer'
import Mobile from './components/mobile/Mobile'
import Navbar from './components/navbar/Navbar'
import Products from './components/product/Products'
import { products, customers } from './static/data'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Products products={products}/>
      <Mobile/>
      <Customers customers={customers}/>
      <Footer/>
    </>
  )
}

export default App
