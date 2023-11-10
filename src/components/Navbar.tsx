import React, { useState } from 'react';
import { useRef } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import useOnScreen from './UseScreen';
import Logo2 from '../../public/assets/logo2.png';
import Image from 'next/image';
import { Link as Linkk } from 'react-scroll'
import Link from 'next/link';

const Navbar = () => {

   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);

   const ref = useRef<HTMLDivElement>(null);
   const onScreen = useOnScreen(ref);


   return (
      <>
         <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-800 text-gray-300 z-50'>
            <div>
              <Image src={Logo2} width={150} height={150} alt='Logo SKL' />
            </div>

            <ul className='hidden md:flex font-bold'>
               <div
                  ref={ref}
                  className={`animate transform transition-all duration-500 ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-200' : 'translate-x-52 opacity-0'}`}
               >
                  <li>
                     <Linkk to='home' smooth={true} duration={500}>
                        <span className='hover:text-white'>Home</span>
                     </Linkk>
                  </li>
               </div>
               <div
                  ref={ref}
                  className={`animate transform transition-all duration-500 ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-300' : 'translate-x-52 opacity-0'}`}
               >
                  <li>
                     <Linkk to='about' smooth={true} duration={500}>
                        <span className='hover:text-white'>Sobre</span>
                     </Linkk>
                  </li>
               </div>
               <div
                  ref={ref}
                  className={`animate transform transition-all duration-500 ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-[400ms]' : 'translate-x-52 opacity-0'}`}
               >
                  <li>
                     <Linkk to='skills' smooth={true} duration={500}>
                        <span className='hover:text-white'>Skills</span>
                     </Linkk>
                  </li>
               </div>
               <div
                  ref={ref}
                  className={`animate transform transition-all duration-500 ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-500' : 'translate-x-52 opacity-0'}`}
               >
                  <li>
                     <Linkk to='work' smooth={true} duration={500}>
                        <span className='hover:text-white'>Projetos</span>
                     </Linkk>
                  </li>
               </div>
               <div
                  ref={ref}
                  className={`animate transform transition-all duration-500 ease-in-out ${onScreen ? 'translate-y-0 opacity-100 delay-[600ms]' : 'translate-x-20 opacity-0'}`}
               >
                  <li>
                     <Linkk to='contact' smooth={true} duration={500}>
                        <span className='hover:text-white'>Contato</span>
                     </Linkk>
                  </li>
               </div>
            </ul>


            <div onClick={handleClick} className='md:hidden z-10'>
               {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/*mobile Menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
               <li className='py-6 text text-3xl'>
                  <Linkk onClick={handleClick} to='home' smooth={true} duration={500}>
                     <span className='hover:text-white hover:font-bold'>Home</span>
                  </Linkk></li>
               <li className='py-6 text text-3xl'>
                  <Linkk onClick={handleClick} to='about' smooth={true} duration={500}>
                     <span className='hover:text-white hover:font-bold'>Sobre</span>
                  </Linkk></li>
               <li className='py-6 text text-3xl'>
                  <Linkk onClick={handleClick} to='skills' smooth={true} duration={500}>
                     <span className='hover:text-white hover:font-bold'>Skills</span>
                  </Linkk></li>
               <li className='py-6 text text-3xl'>
                  <Linkk onClick={handleClick} to='work' smooth={true} duration={500}>
                     <span className='hover:text-white hover:font-bold'>Projetos</span>
                  </Linkk></li>
               <li className='py-6 text text-3xl'>
                  <Linkk onClick={handleClick} to='contact' smooth={true} duration={500}>
                     <span className='hover:text-white hover:font-bold'>Contato</span>
                  </Linkk></li>
            </ul>

            {/* Icons Social */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

               <ul>
                  <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                     <a
                        className='flex justify-between items-center w-full text-gray-300 '
                        href='https://www.linkedin.com/in/marcos-bezerra-skl/' target='_blank'>
                        Linkedin <FaLinkedin size={38} />
                     </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                     <a
                        className='flex justify-between items-center w-full text-gray-300 '
                        href='https://github.com/MarcosSkL' target='_blank'>
                        Github <FaGithub size={38} />
                     </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-500'>
                     <a
                        className='flex justify-between items-center w-full text-gray-300 '
                        href='mailto:marcos.marsk@gmail.com' target='_blank'>
                        Email <HiOutlineMail size={38} />
                     </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                     <a
                        className='flex justify-between items-center w-full text-gray-300 '
                        href='/assets/Curriculo/Curriculo_Marcos_Bezerra_principal_onePage.pdf' target="_blank">
                        Curriculo <BsFillPersonLinesFill size={38} />
                     </a>
                  </li>
               </ul>

            </div>


         </div >
      </>
   )
}

export default Navbar