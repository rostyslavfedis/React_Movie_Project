import React, {useEffect, useState} from "react";
import style from './MovieDetails.module.css'
import {moviesService} from "../../services";
import {useParams} from "react-router";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const MovieDetails=({children})=>{
    const [filmDetails,setFilmDetails ]= useState(null);
    const [isLoading,setIsLoading ]= useState(null);

    const {id, ...rest}=useParams();

const getMovieDetails =async ()=>{
    try{
        setIsLoading(true)
        const data =await   moviesService.getMovieDetailsById(id)
        setFilmDetails(data);
        toast.success("Data loaded")

    }catch (e){
        console.error(e);
        toast.error("Error happened ")
    }finally {
        setIsLoading(false)
    }

}

    useEffect(()=>{
getMovieDetails()
    },[])

    if(isLoading || !filmDetails || isLoading===null){
        return      <div>loading...</div>
    }


    return(

       <div>
           <div>
               <img src={`https://image.tmdb.org/t/p/w200${filmDetails.poster_path}`} alt={`${filmDetails.original_title} poster`}/>
           </div>
           <h1>{filmDetails.original_title}</h1>
           <h2>{filmDetails.tagline}</h2>
           <h3>{filmDetails.genres.map(el=><span key={el.id}>-{el.name}-</span>)}</h3>
           <p>{filmDetails.overview}</p>
       </div>
    )
}