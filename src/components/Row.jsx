import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Row.css'

function Row({title,fetchUrl,isPoster}) {
    console.log(fetchUrl);


    const [allMovies,setAllMovies]=useState()
    const base_url = `https://image.tmdb.org/t/p/original/`;



const fetchData=async()=>{
 const {data}= await tmdbAxiosInstance.get(fetchUrl)

 setAllMovies(data.results);
}
console.log(allMovies);



useEffect(()=>{
  fetchData()
},[])

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movies-row'>
      {
      allMovies?.map(item=>(

        <img className={`${isPoster && 'movie-poster'} img`} src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt="noimg" />
      ))
    }
    
      </div>
    
    
    </div>
  )
}

export default Row