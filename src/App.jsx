import { useState } from 'react'

import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import request from './Request'
import DisplayCards from './components/DisplayCards'


function App() {
  

  return (
    <>
      <Header/>
      <Banner fetchurl={request.fetchTopRated} />
      <DisplayCards fetchurl={request.fetchActionMovies} title='Action' stylestate={false}  />
      <DisplayCards fetchurl={request.fetchTopRated} title='Top Rated' stylestate={false}  />
      <DisplayCards fetchurl={request.fetchTrending} title='Trending' stylestate={true} />
      <DisplayCards fetchurl={request.fetchNetflixOriginals} title='Netflix Originals' stylestate={false} />
      <DisplayCards fetchurl={request.fetchComedyMovies} title='Comedy' stylestate={false} />
      <DisplayCards fetchurl={request.fetchRomanceMovies} title='Romance' stylestate={false} />
      <DisplayCards fetchurl={request.fetchDocumentaries} title='Documentary' stylestate={false} />
      <DisplayCards fetchurl={request.fetchHorrorMovies} title='Horror' stylestate={false} />
    </>
  )
}

export default App
