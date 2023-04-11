import SocialMedias from './SocialMedias'


type Props = {}

function Footer({}: Props) {
  return (
    <div className='md:mt-10 text-center p-4 bg-slate-300 md:bg-transparent dark:bg-slate-900'>
      <SocialMedias/>
      <div className='text-slate-500 text-sm'>
        Desenhado e construído por Renan Barros - 2023 ©
      </div>
      
    </div>
  )
}

export default Footer