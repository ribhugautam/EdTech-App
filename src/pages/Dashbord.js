import React from "react";
import Filter from "../components/Filter.js"
import Cards from '../components/Cards.js';
import Spinner from '../components/Spinner.js';
import NoInternet from '../components/NoInternet.js';
import { filterData } from '../data.js';
import { useState, useEffect } from 'react';


function Dashboard () {

  const apiUrl = process.env.REACT_APP_API_URL;

    const[data, setData] = useState('');
    const[timeOut, setTimeOut] = useState(false);
    const[internetError, setInternetError] = useState(false);
    const[catogory,setCategory] = useState(filterData[0].title);
  
    async function cardData () {
      setTimeOut(true);
      try{
        const response = await fetch(apiUrl);
        const output = await response.json();
  
        setData(output.data);
      }
      catch(error){
        setInternetError(true);
      }
      setTimeOut(false);
    }
  
    useEffect(() => {
      cardData();
    },[]);

    return(
        <div className='h-full flex flex-col gap-8'>
      <div>
        <Filter filterData = {filterData} catogory = {catogory} setCategory = {setCategory}/>
      </div>
      <div>
          {  
            !internetError ? timeOut ? <Spinner/> : <Cards data = {data} catogory = {catogory}/> : <NoInternet/>
          }            
        </div>
    </div>
    )
}

export default Dashboard;