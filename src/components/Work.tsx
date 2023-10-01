import React from 'react';

const Work = () => {
   return (
      <>
         <div id='work' className='w-full md:h-screen text-gray-300 bg-slate-700'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
               <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-400'>Projetos</p>
                  <p className='py-6'>Alguns de meus projetos</p>
               </div>
               <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-[url('../../public/assets/Projetos/SKgames.png')] bg-cover bg-center bg-no-repeat shadow-lg shadow-slate-700 group container rounded-md flex justify-center item-center mx-auto h-[250px]">

                     {/* Hover Effects */}
                     <div className='text-center items-center justify-center flex flex-col group-hover:bg-cyan-600 group-hover:bg-opacity-90 hover:rounded-lg opacity-0 group-hover:opacity-100 w-full'>
                        <span className='text-2xl font-bold text-white tracking-wide'>
                           React TS Application
                        </span>
                        <div className='pt-8 text-center'>
                           <a href='https://gamestoreskl.vercel.app/' target='_blanck'>
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-sky-400 text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                           <a href='https://github.com/MarcosSkL/game-storehouse' target='_blanck'>
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-sky-400 text-gray-700 font-bold text-lg'>Code</button>
                           </a>

                        </div>

                     </div>
                  </div>
                  <div className="bg-[url('../../public/assets/Projetos/Parallax.png')] bg-cover bg-center bg-no-repeat shadow-lg shadow-slate-700 group container rounded-md flex justify-center item-center mx-auto h-[250px]">

                     {/* Hover Effects */}
                     <div className='text-center items-center justify-center flex flex-col group-hover:bg-cyan-600 group-hover:bg-opacity-90 hover:rounded-lg opacity-0 group-hover:opacity-100 w-full'>
                        <span className='text-2xl font-bold text-white tracking-wide'>
                           React TS Application
                        </span>
                        <div className='pt-8 text-center'>
                           <a href='https://marcosskl.github.io/Parallax_HTML5-e-CSS3/' target='_blanck'>
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-sky-400 text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                           <a href='https://github.com/MarcosSkL/Parallax_HTML5-e-CSS3' target='_blanck'>
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-sky-400 text-gray-700 font-bold text-lg'>Code</button>
                           </a>

                        </div>

                     </div>
                  </div>
                  <div className="bg-[url('../../public/assets/Projetos/Think_of_number.png')] bg-cover bg-center bg-no-repeat shadow-lg shadow-slate-700 group container rounded-md flex justify-center item-center mx-auto h-[250px]">

                     {/* Hover Effects */}
                     <div className='text-center items-center justify-center flex flex-col group-hover:bg-cyan-600 group-hover:bg-opacity-90 hover:rounded-lg opacity-0 group-hover:opacity-100 w-full'>
                        <span className='text-2xl font-bold text-white tracking-wide'>
                           React TS Application
                        </span>
                        <div className='pt-8 text-center'>
                           <a href='https://marcosskl.github.io/Think-of-Number/' target='_blanck'>
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-sky-400 text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                           <a href='https://github.com/MarcosSkL/Think-of-Number' target='_blanck'>
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-sky-400 text-gray-700 font-bold text-lg'>Code</button>
                           </a>

                        </div>

                     </div>
                  </div>
          

               </div>
            </div>

         </div>
      </>
   )
}

export default Work