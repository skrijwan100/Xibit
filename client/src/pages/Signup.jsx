import React, { useState } from 'react'
import EmailVerify from '../component/EmailVerify'
import gifnew from "../assets/gifs/gifnew.gif"

const Signup = () => {
  const [pageShow, setpageShow] = useState(true)
  return (
    <div className='w-full heightContainer flex items-center justify-center'>
      <EmailVerify checkR={[pageShow, setpageShow]}/>
      <div className=' w-[40%]'>
        <img src={gifnew} alt="" />
      </div>
    </div>
  )
}

export default Signup