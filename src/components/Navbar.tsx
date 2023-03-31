import React from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import { HashLink as Link } from 'react-router-hash-link';

type Props = {
  darkMode : boolean,
  setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>
}

function Navbar({darkMode, setDarkMode}:Props) {
  
  const scrollWithOffset = (el:HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -30; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <nav className="navClass">
      <h1 className='text-xl ml-3' >{'{RB}'}</h1>
      <div className='flex items-center'>
        <Link className='p-2' scroll={el => scrollWithOffset(el)} to='#about'>Sobre</Link>
        <Link className='p-2' scroll={el => scrollWithOffset(el)} to='#experience'>Experiência</Link>
        <Link className='p-2' scroll={el => scrollWithOffset(el)} to='#techs'>Tecnologias</Link>
        <Link className='p-2' to='#contato' scroll={el => scrollWithOffset(el)}>Contato</Link>
        {darkMode 
          ?(<BsFillSunFill onClick={() => setDarkMode!(!darkMode)} className='mr-2 md:mx-4 cursor-pointer hover:text-slate-600'/>)
          :(<BsFillMoonStarsFill onClick={() => setDarkMode!(!darkMode)} className='mr-2 md:mx-4 cursor-pointer hover:text-slate-600'/>)
        }
        
        
      </div>
    </nav>
  )
}

export default Navbar



