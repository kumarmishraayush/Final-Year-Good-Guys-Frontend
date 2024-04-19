import React from 'react'
import { motion } from "framer-motion";

function Message() {
  return (
    <>
    <motion.div 
    initial={{ x: -1000 }} // Initial position outside the viewport
    animate={{ x: 0 }} // Move to x=0 (center of the viewport)
    transition={{ duration: .5 }} // Animation duration
    style={{ width: "100%", height: "100%" }}>
      Message
    </motion.div>
   </>
  )
}

export default Message