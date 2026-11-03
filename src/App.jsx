import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Signin from './Signin'
import Home from './Admin/Home'
import ManageProducts from './Admin/ManageProducts'
import ViewOrders from './Admin/ViewOrders'
import Logout from './Admin/Logout'
import Navbar from './Admin/Navbar'
import UNavbar from './User/UNavbar'
import UHome from './User/UHome'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Store'
import ViewProducts from './User/ViewProducts'
import AddProducts from './Admin/AddProducts'
import ProductDetails from './User/ProductDetails'
import Wishlist from './User/Wishlist'
import Cart from './User/Cart'
import Orders from './User/Orders'
import AllUsers from './Admin/AllUsers'
import AdminProductDetails from './Admin/AdminProductDetails'
import Update from './Admin/Update'

function App() {

  return (
    <>
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin></Signin>}></Route>
      <Route path='/admin'element={<Navbar></Navbar>}>
        <Route path='adminHome'element={<Home></Home>}></Route>
        <Route path='manage'element={<ManageProducts></ManageProducts>}></Route>
        <Route path='add'element={<AddProducts></AddProducts>}></Route>
        <Route path='vieworders'element={<ViewOrders></ViewOrders>}></Route>
         <Route path='viewusers'element={<AllUsers></AllUsers>}></Route>
        <Route path='details/:pid'element={<AdminProductDetails></AdminProductDetails>}></Route>
        <Route path='update/:pid'element={<Update></Update>}></Route>
      </Route>
      <Route path='/user'element={<UNavbar></UNavbar>}>
        <Route path='userHome'element={<UHome></UHome>}></Route>
        <Route path='viewprods'element={<ViewProducts></ViewProducts>}></Route>
        <Route path='details/:pid'element={<ProductDetails></ProductDetails>}></Route>
        <Route path='cart'element={<Cart></Cart>}></Route>
        <Route path='wish'element={<Wishlist></Wishlist>}></Route>
        <Route path='myorders'element={<Orders></Orders>}></Route>
      </Route>
       <Route path='/logout'element={<Logout></Logout>}></Route>
    </Routes>
    </BrowserRouter>
   
     
    </>
  )
}

export default App
