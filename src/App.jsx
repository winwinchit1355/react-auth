
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './admin/components/layouts/Layout';
import Home from './admin/components/home/Home';
import Login from './admin/components/auth/Login';
import Register from './admin/components/auth/Register';
import { apiCall } from './service/apiService';

function App() {

  return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home/>}/>
            </Route>
            <Route path='/login' element={ <Login />}/>
            <Route path='/register' element={ <Register />}/>
          </Routes>
        </BrowserRouter>
  )
}

export default App
