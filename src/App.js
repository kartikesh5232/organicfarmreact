import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Basket from './component/basket';
import Login from './component/Login';
import Register from './component/Register';
import About from './component/About';
import Form from './component/form';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/basket" element={<Basket />} />

      </Routes>

    </>
  );
}

export default App;
