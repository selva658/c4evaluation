import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from "react-router-dom"
import {LandingPage} from "./components/landingpage"
import { SearchResult } from './components/searchpage'

function App() {


  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path='/search/:id' element={<SearchResult></SearchResult>}></Route>

      </Routes>
    </div>
  )
}

export default App
