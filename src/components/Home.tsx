import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <>
      <div className='bg-slate-800 w-full h-screen sm:px-14'>

        <div className='max-h-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-cyan-300'>Olá, me chamo</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-slate-200'>Marcos Bezerra</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-slate-400'>Software Developer.</h2>
          <p className='text-slate-400 py-4 max-w-[700px]'>Sou um desenvolvedor full-stack especializado em construção (e ocasionalmente design)
            experiência digital excepcional. Atualmente, estou focado em construir full-stack resposivo
            Aplicativos da web</p>
          <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-500'>
              View Work
              <span className='hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home