import React from 'react';
import { useRef } from 'react';
import useOnScreen from './UseScreen';
import Image from 'next/image';
import HTML from '../../public/assets/html.png';
import CSS from '../../public/assets/css.png';
import Typescript from '../../public/assets/typescript.png';
import ReactLogo from '../../public/assets/ReactLogo.png';
import Node from '../../public/assets/node.png';
import Firebase from '../../public/assets/firebase.png';
import AWS from '../../public/assets/aws.png';
import Nextjs from '../../public/assets/Nextjs.png';
import Tailwind from '../../public/assets/tailwind.png';
import Mongo from '../../public/assets/mongo.png';


const Skills = () => {

   const ref = useRef<HTMLDivElement>(null);
   const onScreen = useOnScreen(ref);

   return (
      <>
         <div id='skills' className='w-full h-screen bg-slate-800 text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
               <div
                  ref={ref}
                  className={`animate transform transition-all duration-[2000ms] ease-out ${onScreen ? 'translate-y-0 opacity-100' : 'translate-y-52 opacity-0'}`}
               >
                  <div>
                     <p className='text-4xl font-bold inline border-b-4 border-cyan-400'>Skills</p>
                     <p className='py-4'>Estas são as tecnologias com as quais trabalhei</p>
                  </div>
                  <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                     <div
                        ref={ref}
                        className={`animate transform transition-all duration-[2000ms] ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-[500ms]' : 'translate-y-52 opacity-0'}`}
                     >
                        <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                           <Image src={HTML} width={80} height={80} alt='HTML Icon' className='mx-auto' />
                           <p className='my-4'>HTML</p>
                        </div>
                     </div>
                     <div
                        ref={ref}
                        className={`animate transform transition-all duration-[2000ms] ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-[600ms]' : 'translate-y-52 opacity-0'}`}
                     >
                        <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                           <Image src={CSS} width={80} height={80} alt='CSS Icon' className='mx-auto' />
                           <p className='my-4'>CSS</p>
                        </div>
                     </div>
                     <div
                        ref={ref}
                        className={`animate transform transition-all duration-[2000ms] ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-[700ms]' : 'translate-y-52 opacity-0'}`}
                     >
                        <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                           <Image src={Typescript} width={80} height={80} alt='Typescript Icon' className='mx-auto' />
                           <p className='my-4'>Typescript</p>
                        </div>
                     </div>
                     <div
                        ref={ref}
                        className={`animate transform transition-all duration-[2000ms] ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-[800ms]' : 'translate-y-52 opacity-0'}`}
                     >
                        <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                           <Image src={ReactLogo} width={80} height={80} alt='React Icon' className='mx-auto' />
                           <p className='my-4'>React</p>
                        </div>
                     </div>
                     <div
                        ref={ref}
                        className={`animate transform transition-all duration-[2000ms] ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-[900ms]' : 'translate-y-52 opacity-0'}`}
                     >
                        <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                           <Image src={Nextjs} width={80} height={80} alt='NextJS Icon' className='mx-auto' />
                           <p className='my-4'>NextJS</p>
                        </div>
                     </div>
                     <div
                        ref={ref}
                        className={`animate transform transition-all duration-[2000ms] ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-[1000ms]' : 'translate-y-52 opacity-0'}`}
                     >
                        <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                           <Image src={Node} width={80} height={80} alt='Node Icon' className='mx-auto' />
                           <p className='my-4'>Node</p>
                        </div>
                     </div>
                     <div
                        ref={ref}
                        className={`animate transform transition-all duration-[2000ms] ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-[1100ms]' : 'translate-y-52 opacity-0'}`}
                     >
                        <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                           <Image src={Firebase} width={80} height={80} alt='Firebase Icon' className='mx-auto' />
                           <p className='my-4'>Firebase</p>
                        </div>
                     </div>
                     <div
                        ref={ref}
                        className={`animate transform transition-all duration-[2000ms] ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-[1200ms]' : 'translate-y-52 opacity-0'}`}
                     >
                        <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500'>
                           <Image src={Tailwind} width={80} height={80} alt='Tailwind Icon' className='mx-auto' />
                           <p className='my-4'>Tailwind</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Skills