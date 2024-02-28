import React from 'react'

const FriendsCard = ({ friends }) => {
  return ( 
    
    <div>
            <span>Friends</span>
            <span>{friends?.length}</span>        
    </div>
)}

export default FriendsCard 