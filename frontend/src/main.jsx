import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import CreateSnack from './Components/CreateSnack/CreateSnack'
import UpdateSnack from './Components/UpdateSnack/UpdateSnack'
import SnackPost from './Components/SnackPost/SnackPost'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
         <Route path='/' element={<App />}/> 
         <Route path='/create' element={<CreateSnack />}/> 
         <Route path='/update/:id' element={<UpdateSnack />}/> 
         <Route path='/view/:id' element={<SnackPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
