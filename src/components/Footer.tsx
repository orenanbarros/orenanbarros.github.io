import React from 'react'
import SocialMedias from './SocialMedias'
import EmailContact from './emailContact'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='text-center p-4'>
      <SocialMedias/>
      <div className='text-slate-500 text-sm'>
        Desenhado e construído por Renan Barros - 2023
      </div>
      <EmailContact mailto='renanalmeidadebarros@gmail.com'/>
    </div>
  )
}

export default Footer