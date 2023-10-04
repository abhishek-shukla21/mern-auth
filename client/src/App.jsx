import './App.css'
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Navbar from './components/Navbar';
import Login from '../src/pages/Login';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import Contactus from './pages/Contactus';
import { UserContextProvider } from '../context/userContext';


axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true

function App() {
  return (
      <UserContextProvider>          
        <Navbar />
        <Toaster position='bottom-right' toastOptions={{duration:2000}} />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contactus' element={<Contactus />} />
        </ Routes>
        <Footer />   
      </UserContextProvider >
  )
}

export default App
