import "./App.css"
import React from "react"

import UploadMovie from "./containers/Movie/UploadMovie"
import ListMovies from "./containers/Movie/ListMovies"
const App = () => {
  return (
    <div>
      <UploadMovie></UploadMovie>
      <ListMovies></ListMovies>
    </div>
  )
}

export default App
