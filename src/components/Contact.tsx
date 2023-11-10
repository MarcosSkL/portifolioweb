import React from 'react';
import { useRef } from 'react';
import useOnScreen from './UseScreen';

const Contact = () => {

   const ref = useRef<HTMLDivElement>(null);
   const onScreen = useOnScreen(ref);

   return (
      <>
         <div id='contact' className='w-full h-screen bg-slate-800 flex justify-center items-center p-4'>
            <div
               ref={ref}
               className={`animate transform transition-all duration-[2000ms] ease-out ${onScreen ? 'translate-y-0 opacity-100' : '-translate-y-52 opacity-0'}`}
            >
               <form method='POST' action="https://getform.io/f/b0a4c35d-85ba-435f-8061-bfdc71669377" className='flex flex-col max-w-[600px] w-full'>
                  <div className='pb-8'>
                     <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-400'>Contato</p>
                     <p className='text-gray-300 py-4'>Envie o formulário abaixo ou envie-me um e-mail para <a href='mailto:marcos.marsk@gmail.com' target='_blank'><strong className='hover:text-white hover:font-bold'>marcos.marsk@gmail.com</strong></a></p>
                  </div>
                  <input className='bg-slate-300 rounded-lg p-2' type='text' placeholder='Nome' name='name' />
                  <input className='my-4 p-2 rounded-lg bg-slate-300' type='email' placeholder='E-mail' name='email' />
                  <textarea className='bg-slate-300 rounded-lg p-2' placeholder='Mensagem' name='message' rows={10}></textarea>
                  <button className='text-white border-2 rounded-lg hover:bg-cyan-400 hover:border-cyan-400 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
               </form>
            </div>

         </div>
      </>
   )
}

export default Contact