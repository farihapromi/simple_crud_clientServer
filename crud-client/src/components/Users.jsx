import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Users = () => {
    const users=useLoaderData()
    console.log(users)
    const handleDelete=(_id)=>{
      
fetch(`http://localhost:5000/users/${_id}`,{
    method:'DELETE'

})
.then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.log(error))

    }
  return (
    <div>
        {
            users.map(user=>(
                             <div className='flex items-center justify-center' key={user._id}>
                
                <h2>{user.name}: {user.email}</h2>
                <button className='bg-blue-400 p-4 m-4  rounded-lg' onClick={()=>handleDelete(user._id)}>Delete User </button>
                </div>
            )
        
        )
    }
       
      
    </div>
  )
}

export default Users
