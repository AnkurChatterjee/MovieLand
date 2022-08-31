import './App.css';
import React, { useState } from 'react';
import {useEffect} from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';

function App() {
  const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=fc013f32";
  const [movies,setMovies] = useState([]);
  const movieSearch = async (title) => {
    let response = await fetch(`${api_url}&s=${title}`);
    let data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  }
  const defaultMovies = ['Avengers','Batman','Friends','Titanic','Joker','Bhool Bhulaiyaa','The dark knight','Superman','charlie chaplin'];
  let index;
  while(true){
    let n = Math.trunc(Math.random()*10);
    if(n<9){
      index = n;
      break;
    }
  }
  useEffect(() => {
    movieSearch(defaultMovies[index]);
  },[])
  return (
    <div className="app">
      <Header title={"MovieLand"}/>
      <SearchBar movieSearch={movieSearch}/>
      <Movies movies={movies} />
    </div>
  );
}

export default App;