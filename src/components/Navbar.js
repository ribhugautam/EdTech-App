import React from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
function Navbar (props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
    return(
        <div>
        <nav className='flex sm:flex md:flex lg:flex justify-between max-w-[1180px] w-11/12 mx-auto gap-8 items-center text-white py-4'>
          <Link to = '/'>
            <h1 className='font-extrabold text-center p-1 rounded-md px-2 border-4 '>Tech Buddies</h1>
          </Link>

        <div className='hidden sm:flex md:flex lg:flex text-center justify-center items-center sm:gap-6 md:gap-6 lg:gap-6 text-sm font-medium'>
            <Link  className="hover:bg-slate-400/50 w-full transition-all duration-200 text-center p-2 px-2 rounded-md" to="/">Home</Link>
            <Link  className="hover:bg-slate-400/50 w-full transition-all duration-200 text-center p-2 px-2 rounded-md" to="/about">About</Link>
            <Link  className="hover:bg-slate-400/50 w-full transition-all duration-200 text-center p-2 px-2 rounded-md" to="/contact">Contact</Link>
        </div>

        <div className='flex justify-between items-center gap-2 text-sm font-medium'>
          { !isLoggedIn &&
          <Link to="/Login">
          <button className="bg-slate-400/50 hover:bg-white/40 font-bold transition-all duration-200 p-2 px-4 rounded-md">
            LogIn
          </button>
          </Link>
          }

          { !isLoggedIn &&
          <Link to="/Signup">
          <button className="bg-green-500 font-bold hover:bg-green-500/80 transition-all duration-200 p-2 px-4 rounded-md">
            Sign Up
          </button>
          </Link>
          }

          { isLoggedIn &&
          <Link to="/">
          <button onClick={() => {
            setIsLoggedIn(false); 
            toast.success("Logged Out");
          }} 
          className="bg-slate-400/50 hover:bg-white/40 font-bold transition-all duration-200 p-2 px-2 rounded-md">
            LogOut
          </button>
          </Link>
          }

          { isLoggedIn &&
          <Link to="/Dashboard">
          <button className="bg-green-500 hover:bg-green-500/80 font-bold transition-all duration-200 p-2 px-2 rounded-md">
            Dashboard
          </button>
          </Link>
          }

        </div>
      </nav>
    </div>
    )
}

export default Navbar;