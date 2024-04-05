import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import LoginPage from './Pages/LoginPage/LoginPage';
import New from './Pages/Cart/Cart';
import Footer from "./Pages/Footer/footer";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ProductList from './Pages/Products/products';
import Cart from './Pages/Cart/Cart'
import Cookies from 'js-cookie';
import { UserProvider } from './Contexts/userContext';
import Page from './Pages/productPage/page';
import ProtectedRoute from './ProtectedRoute';
import LoginContainer from './Pages/LoginContainer/LoginContainer';

function App() {
  
  const jwttoken = Cookies.get('jwtToken');
  console.log(jwttoken);

  return (
    <GoogleOAuthProvider clientId="219626227329-99khfealuh9b7l3dhl1bb32vug12c6rf.apps.googleusercontent.com">
    <div>
      <BrowserRouter>
      <UserProvider>
      <Layout>
        <Routes>
          <Route index element= {<Home/>}/>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/login' element = {<LoginContainer/>}/>
          <Route path='/newpage' element = {<New/>}/>
          <Route path='/footer' element = {<Footer/>}/>
          <Route path='/products' element={<ProtectedRoute/>}>
            <Route path='/products' element={<ProductList/>}/>
            <Route path='/products/men' element={<ProductList/>}/>
            <Route path='/products/women' element={<ProductList/>}/>
          </Route>
          <Route path='/cart' element={<ProtectedRoute/>}>
            <Route path='/cart' element = {<Cart/>}/>
          </Route>
          <Route path='/product/:productId' element = {<Page/>}/>
        </Routes>
        <Footer/>
      </Layout>
      </UserProvider>
      </BrowserRouter>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
