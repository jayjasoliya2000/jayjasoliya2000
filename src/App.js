import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './Compo/Navigation'
import SearchEvent from './Compo/SearchEvent'
import  Table  from './Compo/Table'
import Crud from './Compo/Crud'
import Resume from './Compo/Resume'

export default function App() {
  return (
    <BrowserRouter>
    <Navigation />

      
    <Routes>
       <Route path='/' element = {<Resume />}/>
       <Route path='/search' element = {<SearchEvent />}/>
       <Route path='/table' element = {<Table />}/>
       <Route path='/crud' element = {<Crud />}/>
    </Routes>
    </BrowserRouter>
  )
}
