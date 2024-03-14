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
    <div className='flex flex-col bg-[radial-gradient(#1D2843,#111827)] min-h-screen overflow-y-scroll overflow-x-hidden'>
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <div className='flex flex-wrap text-white w-11/12 max-w-[1180px] mx-auto justify-between lg:justify-center pt-4 items-center lg:gap-[11rem] pb-8 text-sm font-medium'>
            <Link  className="hover:bg-white/40 bg-slate-400/50 transition-all duration-200 text-center p-2 px-3 rounded-md" to="/">Home</Link>
            <Link  className="hover:bg-white/40 bg-slate-400/50 transition-all duration-200 text-center p-2 px-3 rounded-md" to="/about">About</Link>
            <Link  className="hover:bg-white/40 bg-slate-400/50 transition-all duration-200 text-center p-2 px-3 rounded-md" to="/contact">Contact</Link>
        </div>

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
