import React from 'react'
import { motion } from "framer-motion";
import Followers from '../../Freinds/Followers/Followers';
import Followings from '../../Freinds/Followings/Followings';

function Message() {
  return (
    <>
    <motion.div 
    initial={{ x: -1000 }} // Initial position outside the viewport
    animate={{ x: 0 }} // Move to x=0 (center of the viewport)
    transition={{ duration: .5 }} // Animation duration
    style={{ width: "100%", height: "100%" }}>
      <Followers/>
      <Followings/>
      <div className='message-main'></div>
    </motion.div>
   </>
  )
}

export default Message
