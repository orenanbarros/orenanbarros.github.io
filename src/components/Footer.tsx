import React from 'react'
import SocialMedias from './SocialMedias'
import EmailContact from './emailContact'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='bg-slate-500 text-center p-4'>
      <SocialMedias/>
      <div className='text-white text-sm'>
        Desenhado e construído por Renan Barros - 2023
      </div>
      <EmailContact/>
    </div>
  )
}

export default Footer