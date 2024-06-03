import React from 'react'
import './billboard.css'
import { motion } from 'framer-motion';
function BillBoard() {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }} >
      
    <div className='billboard-main'>
        <div className='billboard-header'>
         <span> <h1 style={{textAlign:'center'}}>BillBoard</h1></span>
        </div>

        <div className='billboard-body'>
          <div className='billboard-member'>
            <h1>1</h1>
            <img src='ProfilePic.jpg' alt='billboard'/>
            <h1>Ayush Mishra</h1>
          </div>
          <div className='billboard-member'>
            <h1>2</h1>
            <img src='Ankit img.jpg' alt='billboard'/>
            <h1>Ankit</h1>
          </div>
          <div className='billboard-member'>
            <h1>3</h1>
            <img src='Akrisht Pathak.jpg' alt='billboard'/>
            <h1>Akristh</h1>
          </div>
          <div className='billboard-member'>
            <h1>4</h1>
            <img src='Ankur Sharma.jpg' alt='billboard'/>
            <h1>Ankur Sharma</h1>
          </div>
          <div className='billboard-member'>
            <h1>5</h1>
            <img src='Mera.jpg' alt='billboard'/>
            <h1>Hakkim Lukka</h1>
          </div>
        </div>
    </div>
    </motion.div>
  )
}

export default BillBoard
