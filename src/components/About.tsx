import React from 'react';
import { useRef } from 'react';
import useOnScreen from './UseScreen';

const About = () => {

  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <>

      <div id='about' className='w-full h-screen bg-slate-700 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div
            ref={ref}
            className={`animate transform transition-all duration-[2000ms] ease-out ${onScreen ? 'translate-y-0 opacity-100' : '-translate-y-52 opacity-0'}`}
          >
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
                <p>A História por Trás do Código<span className='text-cyan-400'>...</span><span className='animate-blink text-cyan-400'>|</span></p>
              </div>
              <div>
                <p>Sou Desenvolvedor WEB e Mobile, e de olho no Backend. Amante da tecnologia desde pequeno,
                  estou sempre em busca de novos desafios e aprendizagem na área. Ex-militar da Força Aérea
                  Brasileira e Músico, estou migrando para a área da tecnologia, com bastante carga de conhecimento,
                  na qual adquirir em diversas áreas que atuei. Meu objetivo é criar, manter e atualizar,
                  interfaces e aplicações funcionais e modernas, que atendam às necessidades dos usuários, empresas e clientes.
                  Entre em contato comigo, vamos conversar sobre como eu posso contribuir para a sua empresa ou projeto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About