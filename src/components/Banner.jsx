import React, { useEffect, useState } from 'react'
import instance from '../Instance'
import { Card } from 'react-bootstrap'

function Banner({fetchurl}) {
    //   const [result, setResult]=useState([])
    const [movie, setMovie]=useState([])
    
      async function fetchData(){
            const request=await instance.get(fetchurl)
            // console.log(request);
            const result=request.data.results
            
            setMovie(result[Math.floor(Math.random() * result.length)]);
            return request
            // console.log(movie.title);
            

            
            // console.log(result);
            
            
        }

    useEffect(()=>{
      
        fetchData()
        console.log(movie);
        
    },[])

    
  return (
    <div style={{marginTop:'14vh',backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}} className='mybanner' >
        <div className='mybannercard column'>
          <h1 style={{fontWeight:'bolder',fontFamily:"fantasy",color:'rgba(255, 255, 255, 0.9)',fontSize:'4rem'}}>{movie.title}</h1>
          <Card className='col-sm-12 col-lg-4' style={{backgroundColor:'rgba(39, 24, 24, 0.44)',color:'white'}}>
            
            <Card.Body className='column'>
              <Card.Subtitle>Preview:-</Card.Subtitle>
               <h6 style={{fontSize:'1rem',color:'rgba(243, 232, 232, 0.9)',marginTop:'5vh'}}>{movie.overview}</h6>
            </Card.Body>
          </Card>
        </div>
      
    </div>
  )
}

export default Banner
