import React , {useEffect,useState} from 'react'
import axios from 'axios'
import {Box , Typography , Modal, Button} from '@mui/material'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

export default function Crud() {

    const [ userData , setUserData] = useState([])
    const [ updateUserData , setUpdateUserData] = useState({})
    const [ deletedData , setDeletedData] = useState({})
    const [ newUserData , setNewUserData] = useState({})

    useEffect(() => {
      const callAPI = async () => {
        const user = await axios.get(`https://dummyjson.com/users`)
        setUserData(user.data.users)
        setUpdateUserData(user.data.users)
    }
    callAPI()
    }, [])

   

    const handleEditData = (e) => {
        setOpenUpdate(true);
        setUpdateUserData(e)
        console.log(e);
    }

    const handleValueData = (e,key) => {
        setUpdateUserData({...updateUserData , [key]:e.target.value})
        // console.log({...updateUserData , [key]:e.target.value})
    }

    
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openNew, setOpenNew] = useState(false);
    const handleCloseUpdate = () => setOpenUpdate(false);
    const handleCloseNew = () => setOpenNew(false);
    
    const handleSaveData =async () => {
      const user = await axios.put(`https://dummyjson.com/users/${userData}`,updateUserData)
      setUpdateUserData(user.data);
      console.log(user.data);
    }
    
    const handleDeleteData = async (e) => {
      const deleteData = await axios.delete(`https://dummyjson.com/users/${e}`)
      setDeletedData(deleteData.data);
    }
    // console.log(deletedData);
    
    const handleTwoValueData = (e,key1,key2) => {
      setUpdateUserData({...updateUserData,[key1]:{...updateUserData[key1],[key2]:e.target.value}});
      // console.log({...updateUserData,[key1]:{...updateUserData[key1],[key2]:e.target.value}});
    }

    const handleNewUserData = () => {
      setOpenNew(true);
    }

    const handleAddNewUserData = (e,key1) => {
      setNewUserData({...newUserData,[key1]:e.target.value});
      console.log({...newUserData,[key1]:e.target.value});
    }

    const handleAddTwoLevelNewUserData = (e,key1,key2) => {
      setNewUserData({...newUserData,[key1]:{...newUserData[key1],[key2]:e.target.value}});
      console.log({...newUserData,[key1]:{...newUserData[key1],[key2]:e.target.value}});
    }

    const handleSaveNewUserData = async () => {
      const newUser = await axios.post(`https://dummyjson.com/users/add`,newUserData)
      console.log(newUser.data);
    }
    
    return (
      <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Age</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {userData.map((data)=>{
        return(
    <tr key={data.id}>
      <td>{data.id}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.age}</td>
      <td>
      <button className='btn btn-outline-primary' onClick={()=>{handleEditData(data)}}>Edit</button>
      </td>
      <Modal
        open={openUpdate}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User's Personal Data
          </Typography>
          First Name  : <input type='text' value={updateUserData.firstName} onChange={(e)=>{handleValueData(e,"firstName")}}/> <br />
          Last Name   : <input type='text' value={updateUserData.lastName} onChange={(e)=>{handleValueData(e,"lastName")}}/> <br />
          Age         : <input type='text' value={updateUserData.age} onChange={(e)=>{handleValueData(e,"age")}}/> <br />
          City         : <input type='text' value={updateUserData?.address?.city} onChange={(e)=>{handleTwoValueData(e,"address","city")}}/> <br />
          <button className='btn btn-primary' onClick={handleSaveData}>Update</button>
        </Box>
      </Modal>
      <td>
      <button className='btn btn-danger' onClick={()=>{handleDeleteData(data.id)}}>Delete</button>
      </td>
    </tr>
    );
})}
  </tbody>
</table>

<Button variant='contained' onClick={handleNewUserData}>Create New User</Button>
<Modal
        open={openNew}
        onClose={handleCloseNew}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User's Personal Data
          </Typography>
          First Name  : <input type='text' onChange={(e)=>{handleAddNewUserData(e,"firstName")}}/> <br />
          Last Name   : <input type='text' onChange={(e)=>{handleAddNewUserData(e,"lastName")}}/> <br />
          Age         : <input type='text'  onChange={(e)=>{handleAddNewUserData(e,"age")}}/> <br />
          City         : <input type='text' onChange={(e)=>{handleAddTwoLevelNewUserData(e,"address","city")}}/> <br />
          <button className='btn btn-primary' onClick={handleSaveNewUserData}>Save</button>
        </Box>
      </Modal>
      

    </div>
  )
}
