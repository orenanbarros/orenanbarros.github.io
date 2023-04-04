import './App.css'

import {useState} from 'react'
import Navbar from './components/Navbar';
import SocialMedias from './components/SocialMedias';
import ImgRenan from './assets/rbarros2023.png'

import { SiTailwindcss,SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiTypescript, SiDocker, SiPostman} from 'react-icons/si'
import { RiVuejsFill } from 'react-icons/ri'
import { FaReact, FaAws, FaAngular, FaSass} from 'react-icons/fa'
import { DiNodejs, DiNpm, DiCss3 } from 'react-icons/di'
import { BsGit } from 'react-icons/bs'
import { AiFillGithub, AiFillHtml5, AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'

import tailwindcss from './assets/icontecs/tailwindcss.svg'
import vuejs from './assets/icontecs/vuejs.svg'
import git from './assets/icontecs/git.png'

import Icon from './components/icon';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  let professionalExperience =[
    {
      visible:true,
      id:1,
      company:'Elumini It',
      companyFullName:'Elumini It & Business Consulting',
      rageWorkingTime:'2011-2023',
      role:'Consultor de desenvolvimento em TI',
      desc:[`Desenvolvi atividades utilizando Vue.js, React, Angular
      e Python em desenvolvimento e manutenção de sistemas e plataformas web de uma ONG.`,`
      Tambem pude atuar durantes dois anos Stored Procedure SQL Server (DML/DDL) em uma das maiores seguradoras do Brasil;`,
      `Desenvolvimento e manutenção de projeto utilizando Stack Mean [Mongodb, Express, Angular, Node] - AngularJs;`,
      `Atuei em projetos com abordagem SOA e Automação de Processos (BPM) utilizando tecnologias Java, ferramentas de
      desenvolvimento BEA/Oracle;`,
      `Projetos com WebSphere versões 5 e 7. Manutenção em projetos de WebSphere Portal versão 6.1`]
    },
    {
      visible:false,
      id:2,
      company:'Vertigo Tecnologia',
      companyFullName:'Vertigo Tecnologia e Computação',
      rageWorkingTime:'2007-2011',
      role:'Analista Desenvolvedor Java Pleno',
      desc:[`Participei de projetos com abordagem SOA e BPM utilizando
      tecnologias Java, ferramentas de desenvolvimento BEA/Oracle (AquaLogic BPM, WebLogic Workshop, WebLogic Integration)e Oracle DataBase.
      ERP Fusion (Oracle) na maior empresa de comércio eletrônico e varejo do Brasil.`,`
      Desenvolvi projetos de portais utilizando tecnologia Java e framework Liferay e IDE Eclipse para empresas 
      públicas do Rio de Janeiro.`]
    },
    {
      visible:false,
      id:3,
      company:'CEDERJ',
      companyFullName:'CEDERJ - Centro de Ensino à Distância do Estado do Rio de Janeiro',
      rageWorkingTime:'2006-2007',
      role: 'Analista Desenvolvedor Java Junior.',
      desc:['Atividades desenvolvidas: Desenvolvimento de projetos utilizando MVC, Java Web, Java Desktop (Swing), PostgreSql.']
    },
    {
      visible:false,
      id:4,
      company:'CRC-RJ',
      companyFullName:'CRCRJ - Conselho Regional de Contabilidade do Estado do Rio de Janeiro.',
      rageWorkingTime:'2005-2006',
      role: 'Estagiário da Assessoria de Informática.',
      desc:[`Atividades desenvolvidas: Desenvolvimento de Programas internos (ASP) e
        suporte ao usuário. Consultas SQL no SQL Server, Client Novel, Linux (webmail);`
      ]
      
    },
  ]
  
  const [currentIdCompany, setCurrentIdCompany] = useState(1)
 /*
  Itens portifolio:
  – Informações de contato, incluindo as redes sociais que você mais usa
  – Uma breve biografia e uma foto sua
  – Experiência relevante e habilidades dentro do contexto do portfólio
  – Projetos pessoais
  – Documentação de código fonte
  – Formação acadêmica
  – Prêmios/reconhecimentos
  */
 
  let style = 'techIcon'

  let techIconSize = 70;

  const handleOnClickCompany = (e)=>{
    setCurrentIdCompany(e.target.value)
  }

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className='dark:bg-black dark:text-white'>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
        <div className='pt-28 flex flex-col items-center justify-center'>
          <section id='top'>
            <h4>Olá, meu nome é</h4>
            <h1 className='text-5xl py-2 text-slate-700 md:text-[6rem]'>RENAN BARROS</h1>          
          </section>
          <section id='about'>
            <h1 className='py-10'>Sobre mim</h1>
            <div className='md:flex'>
              <div className='md:basis-1/2 text-justify'>
                  <p className='mb-2'>
                    Olá, meu nome é Renan e eu tenho paixão por desenvolvimentos de sistemas para internet. 
                    Meu interesse por essa área iniciou há mais ou menos uns 6 anos quando eu comecei a trabalhar com o CMS Wordprees, editando temas e gerando soluções.
                  </p>
                  <p className='mb-2'>Desta forma aprendi muito sobre HTML e CSS.</p>
                  <p>
                    Mais recentemente, tive o privilégio de trabalhar em projetos para uma ONG
                    onde aprendi muito sobre Vue.js e tive contatos com React e Angular.
                    Meu foco principal atualmente é criar produtos acessíveis e inclusivos e gerar
                    experiencias digitais para uma variedade de clientes.
                  </p>
                  <br></br>
                  <p>Aqui estão algumas tecnologias com que eu tenho trabalhado atualmente:</p>
                  <ul className='ml-8 mt-6 list-disc ulCustom'>
                      <li>JavaScript (ES6+)</li>
                      <li>TypeScript</li>
                      <li>React</li>
                      <li>Node.js</li>
                  </ul>
              </div>
              <div className='imgAboutWrapper'>
                <img src={ImgRenan} className='sepia hover:filter-none'/>
              </div>
            </div>
          </section>
          <section id='experience' 
            className='mb-10 p-5 text-justify justify-center items-center md:max-w-3xl'>
            <h1 className='py-10 text-center'>Onde trabalhei</h1>

            <div className='md:flex'>
              <div className='md:flex md:flex-col md:mr-10 md:mb-0 mb-4'>
                <ul className='flex md:flex-col md:w-48 justify-center gap-2 md:gap-0'>
                  {professionalExperience.map((item) =>(                 
                    <li 
                      className={`company md:mdCompany ${item.id == currentIdCompany ? 'md:mdCurrentCompanyActive' : ''}`} 
                      value={item.id} 
                      key={item.id} 
                      onClick={handleOnClickCompany}>
                        {item.company}
                    </li>
                  ))}
                </ul>  
              </div>
              <div>
                {professionalExperience.map((item) =>(
                  <div key={item.id + item.company} className={`flex flex-col ${item.id == currentIdCompany ? 'visible' : 'hidden'} min-h-full`}>
                    <span className='text-lg text-slate-900 font-semibold'>{item.companyFullName}</span>
                    <span className='mb-4'>
                      <span className='text-sm mr-2'>{item.role}</span>
                      <span className='text-xs text-gray-400'>({item.rageWorkingTime})</span>
                    </span>
                    <ul>
                    {item.desc.map((desc,index)=>(
                      <li key={index} className='mb-2 text-justify'>{desc}</li>
                    ))}
                    </ul>
                    
                  </div>
                ))}
              </div>

            </div>
          </section>
          <section id='techs' className='flex flex-col text-center p-5'>
            <h1 className='py-10'>Tecnologias</h1>
            <div className=''>
              <div className='bg-slate-100 pl-12 pr-12 pt-8 pb-12 mb-5'>
                <p className='py-4 mb-4'>
                  Algumas tecnologias que eu uso pra criar aplicações Client-side.
                </p>
                <div className='flex flex-wrap gap-4 justify-center'>
                  <span><AiFillHtml5 className={style} size={techIconSize}/></span>
                  <span><DiCss3 className={style} size={techIconSize}/></span>
                  <span><FaSass className={style} size={techIconSize}/></span>
                  <span><Icon src={tailwindcss} alt='tailwindCss' title='tailwindcss' className={style}/></span>
                  <span><Icon src={vuejs} alt='vuejs' title='vuejs' className={style}/></span>
                  
                  <span><SiJavascript className={style} size={techIconSize}/></span>
               
                  <span><FaReact className={style} size={techIconSize}/></span>
                </div>
              </div>
              <div className='bg-slate-100 pl-12 pr-12 pt-8 pb-12 mb-5'>
                <p className='py-4 mb-4'>
                  Algumas tecnologias que utilizo para criar aplicações backend rápidas e escaláveis.
                </p>
                <div className='flex flex-wrap gap-4 justify-center'>
                  <span><DiNodejs className={style} size={techIconSize}/></span>
                  <span><SiExpress className={style} size={techIconSize}/></span>
                  <span><SiMongodb className={style} size={techIconSize}/></span>
                  <span><SiPostgresql className={style} size={techIconSize}/></span>
                  <span><SiTypescript className={style} size={techIconSize}/></span>
                </div>
              </div>
              <div className='bg-slate-100 pl-12 pr-12 pt-8 pb-12 mb-5'>
                <p className='py-4 mb-4'>
                  dentre outras ferramentas e tecnologias ...
                </p>
                <div className='flex flex-wrap gap-4 justify-center'>
                  <span><DiNpm className={style} size={techIconSize}/></span>
                  <span><Icon src={git} alt='git' title='git' className={style}/></span>
                  <span><AiFillGithub className={style} size={techIconSize}/></span>

                  <span><SiDocker className={style} size={techIconSize}/></span>
                  <span><FaAws className={style} size={techIconSize}/></span>
                  <span><SiPostman className={style} size={techIconSize}/></span>
                  <span><FaAngular className={style} size={techIconSize}/></span>  
                </div>
              </div>
            </div>
          </section>
          <section id='contato' className='flex flex-col text-center p-5 w-full'>
            <h1 className='py-10'>Entre em contato</h1>
            <div className='p-10 shadow-md bg-white mb-5 flex gap-4 justify-center'>
                <AiOutlineMail size={40} className='hover:text-slate-400 cursor-pointer'/>
                <AiOutlineWhatsApp className='hover:text-green-600 cursor-pointer' size={40}/>
            </div>
          </section>
        </div>

                              
        <Footer/>
      </div>
    </div>
    
  )
}

export default App
