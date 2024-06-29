import React from 'react'

const LunchRequestItem = ({request, onDelete, onUpdate}) => {

  return (
    <div>
        <li>
            <p><strong>Name:</strong>{request.name}</p>
            <p><strong>College:</strong>{request.college}</p>
            <p><strong>Phone Number:</strong>{request.phoneNumber}</p>
            
            <button onClick={()=>{onUpdate(request._id)}}>Update</button>
            <button onClick={()=>{onDelete(request._id)}}>Delete</button>

        </li>
    </div>
  )
}

export default LunchRequestItem
