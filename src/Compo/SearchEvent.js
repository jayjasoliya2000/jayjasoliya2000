import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import { Paper } from '@mui/material';


export default function Search() {

   const [searchUserData, setSearchUserData] = useState([])
   const [searchUserValue, setSearchUserValue ] = useState("")

   useEffect(() => {
    const userData = async() => {
         const user  = await axios.get("https://dummyjson.com/products")
         console.log(user.data.products);
         setSearchUserData(user.data.products);
        
    }
    userData()
   }, [])

   useEffect(() => {
    const Data = async () => {
      const searchData = await axios.get(`https://dummyjson.com/products/search?q=${searchUserValue}`)
      console.log(searchData.data.products);  
      setSearchUserData(searchData.data.products) 
    }
     Data()
   }, [searchUserValue])
   const handleSearch =(event) =>{
    console.log(event.target.value);
    setSearchUserValue(event.target.value)
   }

   const handleButton = async() => {
    const searchData = await axios.get(`https://dummyjson.com/products/search?q=${searchUserValue}`)

    setSearchUserValue(searchData.data)
   }
   
   



  return (
    <div>
      <input placeholder='Search Product' onChange={handleSearch} />
      <button className='btn btn-primary' onClick={handleButton}> Search </button>
      { searchUserData.length>0 ? (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Ratings</th>
          </tr>
        </thead>
        {searchUserData.map((user)=>{
          return(
            <tbody key={user.id}>
          <tr>
            <th scope="row">{user.id}</th>
            <td>{user.title}</td>
            <td>{user.price}</td>
            <td>{user.rating}</td>
          </tr>
          
          
        </tbody>
          )
        })}
        <Paper variant="outlined " />

        <AddHomeWorkIcon/>
<Button variant="text">Text</Button>

      </table>
      
      ) : 
      <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
</div>}
    </div>
  )
}
