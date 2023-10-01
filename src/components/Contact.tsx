import React from 'react';

const Contact = () => {
   return (
      <>
         <div id='contact' className='w-full h-screen bg-slate-800 flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/b0a4c35d-85ba-435f-8061-bfdc71669377" className='flex flex-col max-w-[600px] w-full'>
               <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-400'>Contato</p>
                  <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - marcos.marsk@gmail.com</p>
               </div>
               <input className='bg-slate-300 p-2' type='text' placeholder='Nome' name='name' />
               <input className='my-4 p-2 bg-slate-300' type='email' placeholder='E-mail' name='email' />
               <textarea className='bg-slate-300 p-2' placeholder='Mensagem' name='message' rows={10}></textarea>
               <button className='text-white border-2 hover:bg-cyan-400 hover:border-cyan-400 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>

         </div>
      </>
   )
}

export default Contact