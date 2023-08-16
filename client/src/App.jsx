import './App.css';
import Login from './pages/login';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {

  return (
    <>
    <Toaster position='bottom-right' toastOptions={{duration: 5000}} />
    <Routes>
      <Route>
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
