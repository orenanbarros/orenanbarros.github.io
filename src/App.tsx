import './App.css'

import {useState} from 'react'

//*images
import ImgRenan from './assets/rbarros2023.png'
import plataformaAtos from './assets/projects/plataforma-atos.png'
import plataformaEva from './assets/projects/plataforma-eva.png'

//*Docs
import curriculum from './assets/Curriculo_Renan_Barros_2023.pdf'

//Icons
import { SiTailwindcss,SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiTypescript, SiDocker, SiPostman} from 'react-icons/si'
import { RiVuejsFill } from 'react-icons/ri'
import { FaReact, FaAws, FaAngular, FaSass} from 'react-icons/fa'
import { DiNodejs, DiNpm, DiCss3 } from 'react-icons/di'
import { BsGit } from 'react-icons/bs'
import { AiFillGithub, AiFillHtml5, AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'

//Components
import Navbar from './components/Navbar';
import Icon from './components/IconTech';
import Footer from './components/Footer';
import GoToTopButton from './components/GoToTopButton';

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
            <div className='md:flex md:gap-8'>
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
                      <li>Vue.js</li>
                      <li>Node.js</li>
                  </ul>
              </div>
              <div className='flex flex-col items-center'>
                <div className='imgAboutWrapper'>
                  <img src={ImgRenan} className='sepia hover:filter-none'/>
                </div>
                <div className='btnCurriculum'>
                  <a href={curriculum} target='_blank'>Baixar Currículo</a>
                </div>
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

          <section id='techs' className='flex flex-col text-center p-5 mb-0'>
            <h1 className='py-10'>Tecnologias</h1>
            <div className=''>
              <div className='bg-slate-100 pl-12 pr-12 pt-8 pb-12 mb-5 dark:bg-slate-800'>
                <p className='py-4 mb-4'>
                  Algumas tecnologias que utilizo pra criar aplicações Client-side.
                </p>
                <div className='flex flex-wrap gap-6 justify-center'>
                  <Icon icon={<AiFillHtml5 className={style}/>} title='HTML5'/>
                  <Icon icon={<DiCss3 className={style}/>} title='Css3'/>
                  <Icon icon={<FaSass className={style}/>} title='Sass'/>
                  <Icon icon={<SiTailwindcss className={style}/>} title='Tailwindcss'/>
                  <Icon icon={<RiVuejsFill className={style}/>} title='Vue.js' />
                  <Icon icon={<SiJavascript className={style}/>} title='JavaScript'/>
                  <Icon icon={<FaReact className={style}/>} title='React'/>
                </div>
              </div>
              <div className='bg-slate-100 pl-12 pr-12 pt-8 pb-12 mb-5 dark:bg-slate-800'>
                <p className='py-4 mb-4'>
                  Algumas tecnologias que utilizo para criar aplicações backend rápidas e escaláveis.
                </p>
                <div className='flex flex-wrap gap-6 justify-center'>
                  <Icon icon={<SiTypescript className={style}/>} title='TypeScript'/>
                  <Icon icon={<DiNodejs className={style}/>} title='Node.js'/>
                  <Icon icon={<SiExpress className={style}/>} title='Express'/>
                  <Icon icon={<SiMongodb className={style}/>} title='Mongo DB'/>
                  <Icon icon={<SiPostgresql className={style}/>} title='PostgreSQL'/>
                </div>
              </div>
              <div className='bg-slate-100 pl-12 pr-12 pt-8 pb-12 mb-5 dark:bg-slate-800'>
                <p className='py-4 mb-4'>
                  dentre outras ferramentas e tecnologias ...
                </p>
                <div className='flex flex-wrap gap-6 justify-center'>
                  <Icon icon={<AiFillGithub className={style}/>} title='GitHub'/>
                  <Icon icon={<DiNpm className={style}/>} title='NPM'/>
                  <Icon icon={<BsGit className={style}/>} title='Git'/>
                  <Icon icon={<SiDocker className={style}/>} title='Docker'/>
                  <Icon icon={<FaAws className={style}/>} title='AWS'/>
                  <Icon icon={<SiPostman className={style}/>} title='PostMan'/>
                  <Icon icon={<FaAngular className={style}/>} title='Angular'/>                 
  
                </div>
              </div>
            </div>
          </section>

          <section id='projects' className='p-5 mb-10 text-center '>
            <h1 className='py-10'>Alguns projetos que construí</h1>
            <div className='flex text-center '>
              <div>
                <a href="https://eva.igarape.org.br/" target='_blank'> 
                  <img className='hover:-translate-y-5 transition-all ease-in-out delay-200 grayscale hover:filter-none' src={plataformaAtos}/>
                </a>
                
                <a href="https://eva.igarape.org.br/" target='_blank' className='flex flex-col'> 
                  <span className='text-yellow-500 text-lg font-semibold '>EVA</span>
                  Plataforma sobre Evidências de Violências e Alternativas para mulheres e meninas.
                </a>
                
              </div>

              <div>
                <a href="https://atos.igarape.org.br/" target='_blank'> 
                  <img className='hover:-translate-y-5 transition-all ease-in-out delay-200 grayscale hover:filter-none' src={plataformaEva}/>
                </a>
                
                <a href="https://atos.igarape.org.br/" target='_blank' className='flex flex-col'> 
                  <span className='text-yellow-500 text-lg font-semibold'>ATOS</span>
                  Plataforma de monitoramento e acompanhamento dos decretos do Poder Executivo Federal pela sociedade.
                </a>
                
              </div>
            </div>
          </section>

          <section id='contato' className='flex flex-col text-center p-5 justify-center items-center'>
            <h1 className='mb-10'>Entre em contato</h1>
            <div className='flex flex-col md:flex-row gap-10'>
              <div className='boxContacts dark:bg-slate-800'>
                <a className="link flex flex-col items-center text-center " href='mailto:renanalmeidadebarros@gmail.com'>
                  <span>E-mail</span>
                  <AiOutlineMail size={40} />
                  renanalmeidadebarros@gmail.com
                </a>
              </div>

              <div className='boxContacts dark:bg-slate-800'>
                <a 
                  className="link flex flex-col items-center text-center " 
                  href="https://web.whatsapp.com/send?phone=+5521997640679"
                >
                  <span>WhatsApp</span>
                  <AiOutlineWhatsApp className='hover:text-green-600 cursor-pointer' size={40}/>
                  +552199764-0679
                </a>
              </div>
            </div>

          
            
          </section>
        </div>

                              
        <Footer/>
        <GoToTopButton/>
      </div>
    </div>
    
  )
}

export default App
