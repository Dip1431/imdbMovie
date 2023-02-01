import React, { Component } from 'react'
import "./Header.css"
import {Link} from "react-router-dom"

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="headerLeft">
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" className="header_icon" /></Link>
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top_Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
        </div>
      </div>
    )
  }
}
