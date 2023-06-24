import React, { useState } from "react"
import axios from "axios"

const UploadMovie = () => {
  const [files, setFiles] = useState([])
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "Comedy" },
    { id: 4, name: "Drama" },
    { id: 5, name: "Fantasy" },
    { id: 6, name: "Horror" },
    { id: 7, name: "Mystery" },
    { id: 8, name: "Romance" },
    { id: 9, name: "Science Fiction" },
    { id: 10, name: "Thriller" },
  ]
  const uploadFile = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", files[0])
    formData.append("title", title)
    formData.append("genre", genre)
    axios
      .post("http://localhost:5000/movie/create", formData)
      .then(success => {
        console.log("Success")
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="App">
      <form onSubmit={uploadFile}>
        <div>
          <label for="title">Title</label>
          <input
            type="text"
            onChange={e => {
              setTitle(e.target.value)
            }}
            name="title"
          ></input>
        </div>
        <div>
          <label for="genre">genre</label>
          <select
            onChange={e => {
              setGenre(e.target.value)
            }}
          >
            {genres.map(genre => (
              <option key={genre.id}>{genre.name}</option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="file"
            multiple
            accept=".mp4,.mkv"
            onChange={event => {
              setFiles(event.target.files)
            }}
          ></input>
        </div>

        {/* <label for="movie-upload">Movie Upload</label> */}
        <div>
          <button onClick={uploadFile}>Upload Movie</button>
        </div>
      </form>
    </div>
  )
}
export default UploadMovie
