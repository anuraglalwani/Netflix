import React, { useEffect, useState } from 'react'
import axios from "../axios";
import requests from '../request';
import "./Banner.css";
function Banner() {
  const [movie,setMovie]=useState([]);

   useEffect(()=>{
      async function fetchData(){
       const request= await axios.get(requests.fetchNetflixOriginals);
         setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length-1)]);
         return request;
      }
      fetchData();
   },[])
   console.log(movie)
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition:"centre centre"
        }}>
             <div className="bannerContents">
                <h1 className="bannerTitle">
                    {movie?.title || movie?.name ||movie?.original_name}
                </h1>
                <div className="bannerButtons">
                    <button className="bannderButton">Play</button>
                    <button className="bannderButton">My List</button>
                </div>
                <h1 className="bannerDiscription">
                    {truncate( movie?.overview,150)}
                </h1>
             </div>
             <div className="bannerFadeBottom"/>
        </header>
    )
}

export default Banner
