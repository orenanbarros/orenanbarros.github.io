import React from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import { HashLink as Link } from 'react-router-hash-link';

type Props = {
  darkMode : boolean,
  setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>
}

function Navbar({darkMode, setDarkMode}:Props) {
  
  const scrollWithOffset = (el:HTMLElement, yOffset:number) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  let classLink = 'p-2 hover:-translate-y-0.5 hover:text-yellow-500'
  let classDarkMode = 'mr-2 md:mx-4 cursor-pointer hover:text-slate-600 hover:-translate-y-0.5 hover:text-yellow-500'
  return (
    <nav className="navClass">
      <Link className='p-2' scroll={el => scrollWithOffset(el,-100)} to="#top">RB</Link>
      <h1 className='text-xl ml-3' ></h1>
      <div className='flex items-center'>
        <Link className={classLink} scroll={el => scrollWithOffset(el,-30)} to='#about'>Sobre</Link>
        <Link className={classLink} scroll={el => scrollWithOffset(el,-30)} to='#experience'>Experiência</Link>
        <Link className={classLink} scroll={el => scrollWithOffset(el,-30)} to='#techs'>Tecnologias</Link>
        <Link className={classLink} scroll={el => scrollWithOffset(el,-30)} to='#projects'>Projetos</Link>
        
        <Link className={classLink} to='#contato' scroll={el => scrollWithOffset(el,-30)}>Contato</Link>
        <div onClick={() => setDarkMode!(!darkMode)} className={classDarkMode}>
          {darkMode 
            ?(<BsFillSunFill/>):(<BsFillMoonStarsFill/>)  
          }
        </div>
        
        
      </div>
    </nav>
  )
}

export default Navbar



