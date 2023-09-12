import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo1 from '../../public/assets/logo1.png'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-gray-300'>
      <div>
        <Image src={Logo1} width={150} alt='Logo SKL' />
      </div>

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Sobre</li>
        <li>Skills</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>


      <div className='hidden'>
        <FaBars />
      </div>

      {/*mobile Menu*/}
      <ul className='hidden'>
        <li>Home</li>
        <li>Sobre</li>
        <li>Skills</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>

      <div className='hidden'>

      </div>


    </div>
  )
}

export default Navbar