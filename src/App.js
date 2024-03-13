import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import LoginPage from './Pages/LoginPage/LoginPage';
import New from './Pages/LoginPage/Trail';
import Footer from "./Pages/Footer/footer";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ProductList from './Pages/Products/products';
import Trial from './Pages/LoginPage/Trail'
import Cookies from 'js-cookie';
import { UserProvider } from './Contexts/userContext';
import Page from './Pages/productPage/page';
import ProtectedRoute from './ProtectedRoute';

function App() {

  // useEffect(() => {
  //   document.cookie.split(";").forEach((c) => {
  //     document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  //   });
  //   sessionStorage.clear();
  // }, []);

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
          <Route path='/login' element = {<LoginPage/>}/>
          <Route path='/newpage' element = {<New/>}/>
          <Route path='/footer' element = {<Footer/>}/>
          <Route path='/products' element={<ProtectedRoute/>}>
            <Route path='/products' element={<ProductList/>}/>
            <Route path='/products/men' element={<ProductList/>}/>
            <Route path='/products/women' element={<ProductList/>}/>
          </Route>
          <Route path='/product/:productId' element = {<Page/>}/>
          <Route path='/trial' element = {<Trial/>}/>
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
