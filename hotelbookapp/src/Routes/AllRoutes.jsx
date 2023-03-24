import React from 'react'
import{Route,Routes} from "react-router-dom"
import {Homepage} from '../Pages/Homepage'
import {AddHotels} from "../Pages/AddHotels"
import {Hotelcards} from "../Pages/Hotelcards"
import { HotelDetail } from '../Pages/HotelDetail'

export const AllRoutes = () => {


    
  return (
    <Routes>
         <Route path ="/"          element={ <Homepage/>}/>
         <Route path='/addhotels'    element={ <AddHotels/>} /> 
         <Route path ="/showhotellist"  element ={ <Hotelcards/>  }/>
         <Route path ="/hoteldetail/:id"  element ={ <HotelDetail/>  }/>

    </Routes>
  )
}
