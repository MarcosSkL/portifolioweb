import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'

const Home = () => {
   return (
      <>
         <div id='home' className='bg-slate-800 w-full h-screen sm:px-14'>

            <div className='max-h-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
               <p className='text-cyan-300'>Olá, me chamo</p>
               <h1 className='text-4xl sm:text-7xl font-bold text-slate-200'>Marcos Bezerra</h1>
               <h2 className='text-4xl sm:text-7xl font-bold text-slate-400'>Software Developer.</h2>
               <p className='text-slate-400 py-4 max-w-[700px]'>
                  Sou desenvolvedor full-stack especializado no Front, WEB e Mobile (Com um toque de criatividade em design)
                  pronto para transformar ideias complexas em aplicativos web responsivos.
               </p>
               <div>
                  <Link to='work' smooth={true} duration={500}>
                     <button className='group text-white border-2 rounded-lg px-6 py-3 my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-500'>
                        Ver projetos
                        <span className='group-hover:rotate-90 duration-300'>
                           <HiArrowNarrowRight className="ml-3" />
                        </span>
                     </button>
                  </Link>
               </div>
            </div>

         </div>
      </>
   )
}

export default Home