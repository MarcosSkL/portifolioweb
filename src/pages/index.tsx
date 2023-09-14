import React from 'react'
import Navbar from '../components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'

const index = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
      </div>
    </>
  )
}

export default index