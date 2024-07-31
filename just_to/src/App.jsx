import { useState } from 'react'
import './App.css'
import Comp01 from './Components/Comp01/Comp01'
import GoToHome from './Components/Comp02/GoToHome'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Comp01 />
      {/* <GoToHome /> */}
    </>
  )
}

export default App
