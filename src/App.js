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
import { UserProvider } from './User/userContext';
import Page from './Pages/home1/page';
import ProtectedRoute from './ProtectedRoute';
import { useEffect } from 'react';


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
          <Route path='/men' element={<ProtectedRoute/>}>
            <Route path='/men' element={<ProductList/>}/>
          </Route>
          <Route path='/women' element={<ProtectedRoute/>}>
            <Route path='/women' element={<ProductList/>}/>
          </Route>
          <Route path='/trial' element = {<Trial/>}/>
          <Route path='/page' element = {<Page/>}/>
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
