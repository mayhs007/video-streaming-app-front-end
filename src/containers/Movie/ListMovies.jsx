import React, { useState, useEffect } from "react"
import { API_URL } from "../../helper/API"

const ListMovies = () => {
  const [movies, setMovies] = useState([])

  const getAllMovies = () => {
    fetch(API_URL + "movie/all")
      .then(response => {
        return response.json()
      })
      .then(data => {
        let { movies } = data
        setMovies(movies)
      })
  }
  useEffect(() => {
    getAllMovies()
  }, [])

  const renderMoviesCard = () => {
    return movies.map((movie, index) => (
      <div style={{ margin: "2.5%" }}>
        <video src={"/" + movie.path} controls width={"200px"} height={"200px"}></video>
        <h1 key={index}>{movie.title}</h1>
      </div>
    ))
  }
  return <div style={{ display: "flex", flexDirection: "row" }}>{renderMoviesCard()}</div>
}
export default ListMovies
