import React from "react";
import FreeCards from "../components/FreeCards";
import Spinner from '../components/Spinner.js';
import NoInternet from '../components/NoInternet.js';
import { useState, useEffect } from 'react';
import signupImg from "../assets/signup.png";
import { Link } from "react-router-dom";

function Home(props) {

  const apiUrl = process.env.REACT_APP_API_URL;

    let isLoggedIn = props.isLoggedIn;
    const[data, setData] = useState('');
    const[timeOut, setTimeOut] = useState(false);
    const[internetError, setInternetError] = useState(false);
  
    async function cardData () {
      setTimeOut(true);
      try{
        const response = await fetch(apiUrl);
        const output = await response.json();
  
        setData(output.data.Lifestyle);
      }
      catch(error){
        setInternetError(true);
      }
      setTimeOut(false);
    }
  
    useEffect(() => {
      cardData();
    },[]);

    return (
    <div className="flex flex-col items-center h-full text-white">

      <section className="flex bg-white/20 justify-center sm:justify-between md:justify-between lg:justify-between xl:justify-between items-center max-w-[1180px] w-11/12 mx-auto rounded-md px-24 py-12 gap-8 ">
        <div className=" flex flex-col gap-8 md:max-w-[50%] lg:max-w-[50%]">

          <h1 className="font-bold text-4xl">Time to <span className="text-green-500">Grow</span> your Creativity and Level up with us.</h1>
          <div>
          <p className="text-slate-400 italic">Unlock your potential.</p>
          <p className=" italic text-blue-600">Explore our empowering education.</p>
          </div>

        <div>

          { !isLoggedIn && 
          <Link to="/Login">
            <button className="p-2 px-4 font-bold bg-green-500 hover:bg-green-500/80 transition-all duration-200 w-full rounded-md">
              Join Us
            </button>
          </Link>
          }

          { isLoggedIn &&
          <Link to="/Dashboard">
            <button className="bg-green-500 hover:bg-green-500/80 font-bold transition-all duration-200 p-2 px-2 w-full  rounded-md">
              Go to Dashboard
            </button>
          </Link>
          }

          </div>
        </div>

        <div className="max-w-[400px] rounded-full  hidden md:block lg:block xl:block">
          <img src={signupImg} alt="hero" width={350} className="rounded-full aspect-square hidden md:block lg:block xl:block" />
        </div>
      </section>

      <div className="flex flex-col items-center mt-8 ">
        {!internetError ? timeOut ? <Spinner/> : <FreeCards data = {data}/> : <NoInternet/>}          
      </div>
  

    </div>
    );
}

export default Home;