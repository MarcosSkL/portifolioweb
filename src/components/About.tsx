import React from 'react'

const About = () => {
  return (
    <>
      <div className='w-full h-screen bg-slate-700 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p
                className='text-4xl font-bold inline border-b-4 border-cyan-400'>
                Sobre
              </p>
            </div>
            <div>

            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Olá, eu sou Marcos, prazer em conhecê-lo. Por favor, dê uma olhada ao redor.</p>
            </div>
            <div>
              <p>Sou apaixonado por construir software excelente que melhore
                a vida das pessoas ao meu redor. Sou especialista em criação de software
                para clientes que vão desde pessoas físicas e pequenas empresas, todos os
                caminho para grandes corporações empresariais. O que você faria se tivesse
                um especialista em software disponível ao seu alcance?</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About