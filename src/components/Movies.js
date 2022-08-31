import React from "react";
import MovieCard from "./MovieCard";

function Movies(props){
    return(
        <div>
            {props.movies!==undefined ? 
            <div className="container">
                {props.movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
            </div> :
            <div className="empty">
                <h2>No movies found</h2>
            </div>}
        </div>
    )
}

export default Movies;