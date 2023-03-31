import React from 'react'


import {AiFillGithub} from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import {FaInstagram } from 'react-icons/fa'
import {FiLinkedin } from 'react-icons/fi'

type Props = {}

function SocialMedias({}: Props) {
  let style = `p-2.5 hover:text-cyan-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer`
  return (
    <div className='flex justify-center mb-8 md:flex-col md:fixed md:bottom-0 md:left-3 md:mb-0'>
      <div className={style}><AiFillGithub size={25}/></div>
      <div className={style}><FaInstagram size={25}/></div>
      <div className={style}><BsTwitter size={25}/></div>
      <div className={style}><FiLinkedin size={25}/></div>
      <div className='hidden md:block p-0 pb-0 after:bg-cyan-700 after:block after:w-px after:h-24 after:mx-auto'></div>
    </div>
  )
}

export default SocialMedias