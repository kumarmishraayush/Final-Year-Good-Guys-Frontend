import React from 'react'
import { motion } from "framer-motion";
import "./Login.css"
 
import { CiLock } from "react-icons/ci";
function Login() {
  return (
    
   <>
   <motion.div 
   initial={{ x: -1000 }} // Initial position outside the viewport
   animate={{ x: 0 }} // Move to x=0 (center of the viewport)
   transition={{ duration: .5 }} // Animation duration
   style={{ width: "100%", height: "100%" }}>
     <div className='login-main'>
      <div className='lock'>
      <CiLock size={50}  />
      </div>
      <div className ='login-header'>Login</div>

      <div className='login-body'>
          Enter Your Email
        <div className='login-email'>
        <input type="text"  name ="email" placeholder='Enter Email' />
        </div>
        Enter Your Password
        <div className='login-password'>
        <input type="password" name="password" placeholder='Enter Password' />
        </div>
        <button type="submit">Login</button>
        <span>Don't have an account?</span>
        <a href="/signup">Signup</a>
        </div>
      </div>
   </motion.div>
   
  </>
  )
}

export default Login
