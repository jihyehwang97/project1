import React from "react";
import PropTypes from 'prop-types';
import './movie.css';
//yarn add prop-types
function Movie({id, year, title, summary, poster}){
   return(
    <div className="movie">
        <img src={poster} alt={title}/>
        <h5 className="movie___title">{title}</h5>
        <h5 className="movie___year">{year}</h5>
        <h5 className="movie___summary">{summary}</h5>
    </div>
   )
}
Movie.PropTypes ={ //타입검사
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.number.isRequired,
    poster: PropTypes.number.isRequired,
}

export default Movie;