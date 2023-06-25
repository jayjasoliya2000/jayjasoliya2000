import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


  
  export default function BasicTable() {

    const [Data,setData] = useState([])

    useEffect(() => {
      const userData = async ()=>{
        const user = await axios.get("https://dummyjson.com/products")
        setData(user.data.products)
      }
      userData();
      
    }, [])
    
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Serial No</TableCell>
              <TableCell align="right">Product</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">category</TableCell>
              <TableCell align="right">Brand</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data?.map((users)=>{
              return(
                <TableRow
                key={users.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {users.id}
                </TableCell>
                <TableCell align="right">{users.title}</TableCell>
                <TableCell align="right">{users.stock}</TableCell>
                <TableCell align="right">{users.price}</TableCell>
                <TableCell align="right">{users.category}</TableCell>
                <TableCell align="right">{users.brand}</TableCell>
              </TableRow>
              )
            })}
       
           
          </TableBody>

            
        </Table>
      </TableContainer>
    );
  }
