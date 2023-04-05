import React from 'react'


import {AiFillGithub} from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import {FaInstagram } from 'react-icons/fa'
import {FiLinkedin } from 'react-icons/fi'

type Props = {}

function SocialMedias({}: Props) {
  let style = 'iconSocialMedia'
  return (
    <div className='socialMedias'>
      <a href="https://github.com/orenanbarros" target='_blank' className={style}><AiFillGithub size={25}/></a>
      <a href="https://www.instagram.com/orenanbarros/" target='_blank' className={style}><FaInstagram size={25}/></a>
      <a href="https://twitter.com/orenanbarros" target='_blank' className={style}><BsTwitter size={25}/></a>
      <a href="https://www.linkedin.com/in/renan-barros-31a80678/" target='_blank' className={style}><FiLinkedin size={25}/></a>
      <a className='hidden md:block p-0 pb-0 after:bg-cyan-700 after:block after:w-px after:h-24 after:mx-auto'></a>
    </div>
  )
}

export default SocialMedias