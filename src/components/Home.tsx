import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <>
      <div className='bg-slate-800 w-full h-screen'>

        <div className='max-h-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-cyan-300'>Olá, me chamo</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-slate-200'>Marcos Bezerra</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-slate-400'>Software Developer Full Stack.</h2>
          <p className='text-slate-400 py-4 max-w-[700px]'>I'm a full-stack Developer specializing in bulding (and occasionally designing)
            exceptional digital experience. Currently, i'm focused on building resposive full-stack
            web applications</p>
          <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-500'>View Work <HiArrowNarrowRight /></button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home