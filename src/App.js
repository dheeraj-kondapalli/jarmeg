import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import LoginPage from './Pages/LoginPage/LoginPage';
import New from './Pages/LoginPage/Trail';
import Footer from "./Pages/Footer/footer";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Card from './Components/card/card';

function App() {
  return (
    <GoogleOAuthProvider clientId="219626227329-99khfealuh9b7l3dhl1bb32vug12c6rf.apps.googleusercontent.com">
    <div>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element= {<Home/>}/>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/login' element = {<LoginPage/>}/>
          <Route path='/newpage' element = {<New/>}/>
          <Route path='/footer' element = {<Footer/>}/>
          <Route path='/card' element = {<Card/>}/>
        </Routes>
      </Layout>
      </BrowserRouter>
      
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
