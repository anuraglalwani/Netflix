import React, { useEffect, useState } from 'react';
import axios from "../axios";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
import "./Row.css";


const baseURL="https://image.tmdb.org/t/p/original/";

export default function Row ({title,fetchUrl,isLargeRow}){

    
    const [movies,setMovies]=useState([]);
    // const [trailerUrl,setTrailerUrl]=useState("");

    useEffect(()=>{
        async function fetchData(){
          const request=  await axios.get(fetchUrl);
    
          setMovies(request.data.results);
          return request;
        }
        fetchData();

    },[fetchUrl]);

    // const opts = {
    //   height: '390',
    //   width: '100%',
    //   playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 1,
    //   },
    // };

    // function handleClick(movie){
    //   if(trailerUrl){
    //     setTrailerUrl('');
    //   }  
    //   else{
    //     movieTrailer(movie?.name ||"")
    //     .then(url=>{
    //        const urlParams= new URLSearchParams(new URL(url).search);
    //        console.log("urlParams"+ urlParams);
                
    //         const requiredUrl=urlParams.get("v");

    //         console.log("req-url " +requiredUrl);

    //         setTrailerUrl(requiredUrl);

            
    //     })
    //     .catch(err=>console.log(err));
    //   }

    // }
 
    return(

     <div className="row">
         <h2>{title}</h2>
          
          <div className="rowPosters">
           {
               movies.map((movie)=>{
                     return(    
                       <img key={movie.id}
                      //  onClick={handleClick(movie)}
                       className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
                       src={`${baseURL}${isLargeRow? movie.poster_path : movie.backdrop_path}`} 
                       alt={movie.name} />
                     )
                 })
           }

          </div>
          {/* { trailerUrl && <YouTube videoId="4o6HIM03ozw" opts={opts}/>} */}
          
     </div>

    )

}