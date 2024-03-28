import React from 'react'
import "./Right.css"
import Followers from '../../Freinds/Followers/Followers'
import Followings from '../../Freinds/Followings/Followings'
const Right = () => {
  return (
    <>
     <div className='right-main'>
       <Followers/>
       <div className="right-followings">
        
       <Followings />
       </div>
     </div>
    </>
  )
}

export default Right