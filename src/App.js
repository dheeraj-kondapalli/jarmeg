import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginandSignUp from './Pages/LoginSignup/LoginandSignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/home' element = {<LoginandSignUp/>}/>
          <Route path='/login' element = {<LoginPage/>}/>
        </Routes>
      </Layout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
