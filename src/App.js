import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashbord';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';

function App() {

  const[isLoggedIn,setIsLoggedIn] = useState(false);
  

  return (
    <div className='flex flex-col bg-[radial-gradient(#1D2843,#111827)] min-h-screen'>
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
      <Routes>

        <Route path='/' element = {<Home isLoggedIn = {isLoggedIn}/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/login' element = {<Login setIsLoggedIn={setIsLoggedIn} />}/> 
        <Route path='/Signup' element = {<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/Dashboard' element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
        <Route path='*' element = {<Home/>}/>

      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
