import React from 'react'

import { TiMessageTyping } from "react-icons/ti";

export default function Header() {
  return (
    <div className='bg=black flex justify-center items-center flex-col'>
           <h1 className='text-white text-4xl text-[#9209d6]'>speedracer</h1>
           <p className='text-white text-[#8132a8]'> show us your speed</p>
           <TiMessageTyping/>
    </div>
  )
}
