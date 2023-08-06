import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/common/nav';
import SharedLayout from './layouts/SharedLayout';
import ProductDetails from './components/Products/ProductDetails';
function App() {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/categories/:categoryId" element={<Home/>} />
          <Route path="/categories/:categoryId/:productId" element={<ProductDetails/>}/>
        </Route>
      </Routes>
  );
}

export default App;
