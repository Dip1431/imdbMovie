import React, { useEffect, useState, } from 'react'
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom"
import MovieList from '../../component/movieList/MovieList';


const Home = () => {
  const [popularMovies, setpopularMovies] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then(res => res.json())
      .then(data => setpopularMovies(data.results))
  }, [])
  return (
    <div>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            popularMovies.map(movie => (
              <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                </div>
                <div className="posterImage__overlay">
                <div className="posterImage__title">{movie? movie.original_title: ""}</div>
                <div className="posterImage__runtime">
                {movie? movie.resease_date: ""}
                <span className="posterImage__rating">
                {movie? movie.vote_average: ""}
                <i className='fas fa-star'>{""}</i>
                </span>
                </div>
                <div className="posterImage_e_description">{movie? movie.overview: ""}</div>
                </div>
              </Link>
            ))
          }
        </Carousel>
        <MovieList/>
      </div>
    </div>
  )
}
export default Home