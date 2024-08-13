import Navigation from './customers/components/Navigations/Navigation'
import './App.css';
// import HomePage from './customers/components/pages/Homepages/HomePage';
import Footer from './customers/components/Footer/Footer';
// import Product from './customers/components/Product/Product';
import Prodcutdetails from './customers/components/ProductDetails/Prodcutdetails';
import Cart from './customers/components/Cart/Cart.js';
import Checkout from './customers/components/Checkout/Checkout.js';
import Order from './customers/components/Order/Order.js';
import OrderDetails from './customers/components/Order/OrderDetails.js';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes.js';

function App() {
  return (
    <>
    <Routes>
       <Route path="/*" element={<CustomerRoutes />} ></Route>
    </Routes>
       <div>
        
       
      
       </div>
      
    </>
  );
}

export default App;
