
import React, { useEffect, useState } from 'react'
import instance from '../Instance'
import { Card, Row, Col, } from 'react-bootstrap'

function DisplayCards({fetchurl,title,stylestate}) {
    const [movie, setMovie]=useState([])
    let content=title
    let active=stylestate
    
      async function fetchData(){
            const request=await instance.get(fetchurl)
            // console.log(request);
            const result=request.data.results
            
            setMovie(result);
            return request
            // console.log(movie.title);
            

            
            // console.log(result);
            // console.log(content);
            
            
            
        }

    useEffect(()=>{
      
        fetchData()
        
        
    },[])
  return (
    <div className='bg-dark text-light'>
      <h1>{content}</h1>
      <Row className='flex-nowrap overflow-scroll gx-0'>
        
        {movie.map((m)=>(
            
        
          
            <Col key={m.id} sm={4} md={2} lg={2} >
              
{/* 'moviecards moviecardsb ms-5 mb-5' */}
                    <Card  className= {active ==true ? "moviecardsb ms-5 mb-5 " : "moviecards ms-5 mb-5"}>
                      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${m.poster_path}`} height="200px" />
                    {/* <Card.Title>{m.title}</Card.Title> */}
                    </Card>

            </Col>
          
        
          
        ))}
        </Row>
      
    </div>
  )
}

export default DisplayCards
