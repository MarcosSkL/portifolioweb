import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo1 from '../../public/assets/logo1.png'
import Image from 'next/image'


const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


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


      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*mobile Menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        <li className='py-6 text text-3xl'>Home</li>
        <li className='py-6 text text-3xl'>Sobre</li>
        <li className='py-6 text text-3xl'>Skills</li>
        <li className='py-6 text text-3xl'>Projetos</li>
        <li className='py-6 text text-3xl'>Contato</li>
      </ul>

      <div className='hidden'>

      </div>


    </div>
  )
}

export default Navbar