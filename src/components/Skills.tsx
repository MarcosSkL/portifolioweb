import React from 'react';
import Image from 'next/image';
import HTML from '../../public/assets/html.png';
import CSS from '../../public/assets/css.png';
import Javascript from '../../public/assets/javascript.png';
import ReactLogo from '../../public/assets/ReactLogo.png';
import Node from '../../public/assets/node.png';
import Firebase from '../../public/assets/firebase.png';
import AWS from '../../public/assets/aws.png';
import Github from '../../public/assets/github.png';
import Tailwind from '../../public/assets/tailwind.png';
import Mongo from '../../public/assets/mongo.png';


const Skills = () => {
   return (
      <>
         <div className='w-full h-screen bg-slate-800 text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
               <div>
                  <p className='text-4xl font-bold inline border-b-4 border-cyan-400'>Skills</p>
                  <p className='py-4'>Estas são as tecnologias com as quais trabalhei</p>
               </div>
               <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                  <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                     <Image src={HTML} width={80} height={80} alt='HTML Icon' className='mx-auto' />
                     <p className='my-4'>HTML</p>
                  </div>
                  <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                     <Image src={CSS} width={80} height={80} alt='CSS Icon' className='mx-auto' />
                     <p className='my-4'>CSS</p>
                  </div>
                  <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                     <Image src={Javascript} width={80} height={80} alt='Javascript Icon' className='mx-auto' />
                     <p className='my-4'>Javascript</p>
                  </div>
                  <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                     <Image src={ReactLogo} width={80} height={80} alt='React Icon' className='mx-auto' />
                     <p className='my-4'>React</p>
                  </div>
                  <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                     <Image src={Github} width={80} height={80} alt='Github Icon' className='mx-auto' />
                     <p className='my-4'>Github</p>
                  </div>
                  <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                     <Image src={Node} width={80} height={80} alt='Node Icon' className='mx-auto' />
                     <p className='my-4'>Node</p>
                  </div>
                  <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                     <Image src={Mongo} width={80} height={80} alt='MongoDB Icon' className='mx-auto' />
                     <p className='my-4'>MongoDB</p>
                  </div>
                  <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                     <Image src={Tailwind} width={80} height={80} alt='Tailwind Icon' className='mx-auto' />
                     <p className='my-4'>Tailwind</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Skills