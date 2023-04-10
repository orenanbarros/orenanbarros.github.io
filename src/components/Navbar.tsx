import React , {useState} from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { AiFillCloseSquare } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';


import logo from '../assets/logo.png'


import { HashLink as Link } from 'react-router-hash-link';

type Props = {
  darkMode : boolean,
  setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>,
  isNavOpen:boolean,
  setIsNavOpen?:React.Dispatch<React.SetStateAction<boolean>>
}

function Navbar({darkMode, setDarkMode, setIsNavOpen, isNavOpen}:Props) {
  
  
  const scrollWithOffset = (el:HTMLElement, yOffset:number) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  
  
  return (
    <nav className="navClass">
      <Link scroll={el => scrollWithOffset(el,-100)} to="#top">
        <img src={logo} width={50}/>
      </Link>      

      <div className='lg:hidden'>
        <GiHamburgerMenu className={isNavOpen ? "hidden": ""} size={35} onClick={() => setIsNavOpen!((prev) => !prev)}/>
        
          
        <div id="mobile-menu" className={`menuNav ${isNavOpen ? "showMenuNav": ""}`}>
          <span className='self-end flex items-center gap-2 text-xs'>
            Fechar
            <AiFillCloseSquare size={40} className={`self-end ${!isNavOpen ? "hidden": ""}`}  onClick={() => setIsNavOpen!((prev) => !prev)} /> 
          </span>
          
          <Link className='linkBtn' scroll={el => scrollWithOffset(el,-40)} to='#about'>Sobre</Link>
          <Link className='linkBtn' scroll={el => scrollWithOffset(el,-20)} to='#experience'>Experiência</Link>
          <Link className='linkBtn' scroll={el => scrollWithOffset(el,-20)} to='#techs'>Tecnologias</Link>
          <Link className='linkBtn' scroll={el => scrollWithOffset(el,-20)} to='#projects'>Projetos</Link>
          <Link className='linkBtn' to='#contato' scroll={el => scrollWithOffset(el,-55)}>Contato</Link>
          <div onClick={() => setDarkMode!(!darkMode)} className=' linkBtn darkModeBtn'>
            {darkMode 
              ?(<BsFillSunFill/>):(<BsFillMoonStarsFill/>)  
            }
          </div>
        </div>
      </div>

      <div id="desktop-menu" className="hidden space-x-8 lg:flex">
        <Link className='linkBtn' scroll={el => scrollWithOffset(el,-30)} to='#about'>Sobre</Link>
        <Link className='linkBtn' scroll={el => scrollWithOffset(el,-30)} to='#experience'>Experiência</Link>
        <Link className='linkBtn' scroll={el => scrollWithOffset(el,-30)} to='#techs'>Tecnologias</Link>
        <Link className='linkBtn' scroll={el => scrollWithOffset(el,-30)} to='#projects'>Projetos</Link>
        <Link className='linkBtn' to='#contato' scroll={el => scrollWithOffset(el,-45)}>Contato</Link>
        <div onClick={() => setDarkMode!(!darkMode)} className='darkModeBtn'>
          {darkMode 
            ?(<BsFillSunFill/>):(<BsFillMoonStarsFill/>)  
          }
        </div>
      </div>
      

    
    </nav>
  )
}

export default Navbar



