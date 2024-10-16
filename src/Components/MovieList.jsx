import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline  } from "react-icons/io5";
import HorMovieCard from './HorMovieCard';



function MovieList({genreId, index_}) {

    const [movieList,setMovieList]=useState([])
    const elementRef = useRef(null);

    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId = ()=>{
        GlobalApi.getMovieByGenreId(genreId).then(res => {
            //console.log(res.data.reults);
            setMovieList(res.data.results)
        })
    }

    const SliderRight = (element)=>{
        element.scrollLeft+=500;
    }
    const SliderLeft = (element)=>{
        element.scrollLeft-=500;
    }

  return (
    <div className="relative">
        <IoChevronBackOutline 
            className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block 
                    absolute ${index_%3===0 ? 'mt-[80px]' : 'mt-[150px]'}`}
            onClick={()=>SliderLeft(elementRef.current)}
        />

        <div 
            className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5"
            ref={elementRef}>
            {movieList.map((item,index) => (
                <>
                    {index_%3===0 ? <HorMovieCard movie={item} /> : <MovieCard movie={item}/>}
                </>
            ))}
        </div>

        <IoChevronForwardOutline 
            className={`text-[50px] text-white hidden md:block p-2 z-10 cursor-pointer top-0 
                    absolute right-0 ${index_%3===0 ? 'mt-[80px]' : 'mt-[150px]'}`}
            onClick={()=>SliderRight(elementRef.current)}
        />
    </div>
  )
}

export default MovieList
