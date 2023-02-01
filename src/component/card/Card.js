import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [])
    return (
        <div>
            {
                isLoading ?
                    <div className="cards">
                        <SkeletonTheme color="#202020" highlightColor="#444">
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </div>
                    :
                    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                        <div className="cards">
                            <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="" className="cards__img" />
                            <div className="cards__overlay">
                                <div className="card__title">
                                    {movie ? movie.original_title : ""}
                                </div>
                                <div className="card__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="card_rating">
                                        {movie ? movie.vote_average : ""}
                                        <i className='fas fa-star'>{""}</i>
                                    </span>
                                </div>
                                <div className="card__deceription">
                                    {movie ? movie.overview.slice(0, 118) + "..." : ""}
                                </div>
                            </div>
                        </div>
                    </Link>
            }
        </div>
    )
}
export default Card