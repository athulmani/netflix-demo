import React, { useEffect, useState } from 'react'
import './Banner.css'
import tmdbAxiosInstance from '../tmdbAxiosInstance';




function Banner({fetchUrl}) {
    const [allMovies,setAllMovies]=useState({})
    const base_url = `https://image.tmdb.org/t/p/original/`;



const fetchData=async()=>{
 const {data}= await tmdbAxiosInstance.get(fetchUrl)
console.log(data.results[Math.floor(Math.random()*data.results.length)]);
setAllMovies(data.results[Math.floor(Math.random()*data.results.length)])
//  setAllMovies(data.results);
}
console.log(allMovies);



useEffect(()=>{ 
  fetchData()
},[])
  return (
    <div
    style={{
        height:"600px",
        backgroundImage:`url(${base_url}/${allMovies?.backdrop_path})`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'
    }}
    >
        <div className='bannerText'>
            <h1>{allMovies?.name}</h1>
            <h2>{allMovies?.overview}</h2>
        </div>
    </div>
  )
}

export default Banner